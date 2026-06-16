// AI-Assisted: Inject knowledge-base overviews into generated declaration files.
const fs = require('node:fs');
const path = require('node:path');

const componentsRoot = path.resolve(__dirname, '../src/components');
const distRoot = path.resolve(__dirname, '../dist');

function extractOverviewSection(markdownContent) {
  const lines = markdownContent.replace(/\r\n/g, '\n').split('\n');
  const overviewStart = lines.findIndex(line => /^##\s+Overview\s*$/i.test(line.trim()));

  if (overviewStart < 0) {
    return '';
  }

  const overviewLines = [];
  for (let i = overviewStart + 1; i < lines.length; i += 1) {
    if (/^##\s+/.test(lines[i].trim())) {
      break;
    }
    overviewLines.push(lines[i]);
  }

  return overviewLines.join('\n').trim();
}

function normalizeText(text) {
  return text
    .replace(/[\s#*`]+/g, ' ')
    .trim()
    .toLowerCase();
}

function formatOverviewForJsDoc(overview) {
  return overview
    .split('\n')
    .map(line => {
      const headingMatch = line.match(/^\s*#{1,6}\s+(.+)$/);
      if (!headingMatch) {
        return line;
      }

      return `**${headingMatch[1].trim()}**`;
    })
    .join('\n');
}

function convertHeadingLinesToBold(lines) {
  return lines.map(line => {
    const headingMatch = line.match(/^\s*#{1,6}\s+(.+)$/);
    if (!headingMatch) {
      return line;
    }

    return `**${headingMatch[1].trim()}**`;
  });
}

function parseJsDocBlock(blockText) {
  return blockText
    .replace(/^\/\*\*[\t ]*\n?/, '')
    .replace(/\n?[\t ]*\*\/$/, '')
    .split('\n')
    .map(line => line.replace(/^[\t ]*\*[ ]?/, ''))
    .join('\n')
    .trim();
}

function renderJsDocBlock(contentLines) {
  const cleanLines = contentLines.map(line => line.replace(/\s+$/g, ''));
  return ['/**', ...cleanLines.map(line => ` * ${line}`), ' */'].join('\n');
}

function getJsDocBlocks(content) {
  const blocks = [];
  const regex = /\/\*\*[\s\S]*?\*\//g;
  let match = regex.exec(content);

  while (match) {
    blocks.push({
      start: match.index,
      end: match.index + match[0].length,
      text: match[0],
    });
    match = regex.exec(content);
  }

  return blocks;
}

function injectOverviewIntoContent(content, overview) {
  if (!overview) {
    return content;
  }

  const formattedOverview = formatOverviewForJsDoc(overview);

  const blocks = getJsDocBlocks(content);
  const tagBlockIndex = blocks.findIndex(block => block.text.includes('@tagname'));

  if (tagBlockIndex < 0) {
    return content;
  }

  const tagBlock = blocks[tagBlockIndex];
  const normalizedOverview = normalizeText(formattedOverview);

  let updatedContent = content;
  let adjustedTagBlock = tagBlock;

  // Remove an adjacent preceding synthetic overview block, then merge into @tagname block.
  if (tagBlockIndex > 0) {
    const previousBlock = blocks[tagBlockIndex - 1];
    const gap = content.slice(previousBlock.end, tagBlock.start);
    const previousBody = parseJsDocBlock(previousBlock.text);

    if (/^\s*$/.test(gap) && normalizeText(previousBody).includes(normalizedOverview)) {
      updatedContent = content.slice(0, previousBlock.start) + content.slice(previousBlock.end);
      const removedLength = previousBlock.end - previousBlock.start;
      adjustedTagBlock = {
        ...tagBlock,
        start: tagBlock.start - removedLength,
        end: tagBlock.end - removedLength,
      };
    }
  }

  const lines = parseJsDocBlock(adjustedTagBlock.text).split('\n');
  const tagLineIndex = lines.findIndex(line => line.trim().startsWith('@tagname'));
  const beforeTagLines = tagLineIndex >= 0 ? lines.slice(0, tagLineIndex) : [];
  const afterTagLines = tagLineIndex >= 0 ? lines.slice(tagLineIndex) : lines;

  const hasOverviewContent = normalizeText(beforeTagLines.join('\n')).includes(normalizedOverview);
  const hasMarkdownHeadings = beforeTagLines.some(line => /^\s*#{1,6}\s+/.test(line));
  const overviewHeadingIndex = beforeTagLines.findIndex(line => line.trim() === 'Overview');

  let normalizedBeforeTagLines = beforeTagLines;
  if (overviewHeadingIndex >= 0) {
    normalizedBeforeTagLines = [...beforeTagLines];
    normalizedBeforeTagLines.splice(overviewHeadingIndex, 1);

    if (normalizedBeforeTagLines[overviewHeadingIndex]?.trim() === '') {
      normalizedBeforeTagLines.splice(overviewHeadingIndex, 1);
    }
  }

  if (hasOverviewContent && overviewHeadingIndex < 0 && !hasMarkdownHeadings) {
    return content;
  }

  const overviewLines = [...formattedOverview.split('\n')];
  const normalizedExistingOverview = convertHeadingLinesToBold(normalizedBeforeTagLines);
  const mergedBeforeTagLines = hasOverviewContent
    ? normalizedExistingOverview
    : [...normalizedExistingOverview, ...overviewLines, ''];

  const mergedLines = [...mergedBeforeTagLines, ...afterTagLines];

  const mergedJsDoc = renderJsDocBlock(mergedLines);

  return updatedContent.slice(0, adjustedTagBlock.start) + mergedJsDoc + updatedContent.slice(adjustedTagBlock.end);
}

function injectOverviewForComponent(componentName) {
  const kbPath = path.join(componentsRoot, componentName, 'knowledge-base', `${componentName}.component.md`);

  if (!fs.existsSync(kbPath)) {
    return 0;
  }

  const markdown = fs.readFileSync(kbPath, 'utf8');
  const overview = extractOverviewSection(markdown);
  if (!overview) {
    return 0;
  }

  const targetFiles = [
    path.join(distRoot, 'components', componentName, `${componentName}.component.d.ts`),
    path.join(distRoot, 'react', componentName, 'index.d.ts'),
  ];

  let updatedFiles = 0;

  targetFiles.forEach(targetPath => {
    if (!fs.existsSync(targetPath)) {
      return;
    }

    const current = fs.readFileSync(targetPath, 'utf8');
    const updated = injectOverviewIntoContent(current, overview);

    if (updated !== current) {
      fs.writeFileSync(targetPath, updated, 'utf8');
      updatedFiles += 1;
    }
  });

  return updatedFiles;
}

function run() {
  if (!fs.existsSync(componentsRoot)) {
    console.error('[inject:kb-dts] Components source directory was not found.');
    process.exitCode = 1;
    return;
  }

  const componentNames = fs
    .readdirSync(componentsRoot, { withFileTypes: true })
    .filter(entry => entry.isDirectory())
    .map(entry => entry.name);

  const updatedCount = componentNames.reduce((total, componentName) => {
    return total + injectOverviewForComponent(componentName);
  }, 0);

  console.log(`[inject:kb-dts] Updated ${updatedCount} declaration file(s).`);
}

run();
// End AI-Assisted
