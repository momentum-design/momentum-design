// AI-Assisted
const fs = require('fs');
const path = require('path');

const PACKAGE_ROOT = path.resolve(__dirname, '..');
const REPO_ROOT = path.resolve(PACKAGE_ROOT, '..', '..');
const GENERATED_ROOT = path.join(PACKAGE_ROOT, 'src', 'generated', 'knowledge-base');
const GENERATED_CONTENT_ROOT = path.join(GENERATED_ROOT, 'content');
const MANIFEST_PATH = path.join(GENERATED_ROOT, 'manifest.json');
const WEBSITE_PATHS_CONFIG_PATH = path.join(REPO_ROOT, 'config', 'knowledge-base', 'website-paths.config.json');
const INDEX_PATHS = [
  path.join(REPO_ROOT, 'knowledge-base', 'index.root.json'),
  path.join(REPO_ROOT, 'knowledge-base', 'index.packages.json'),
];

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function writeJson(filePath, data) {
  fs.writeFileSync(filePath, `${JSON.stringify(data, null, 2)}\n`);
}

function stripFrontmatter(raw) {
  return raw.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n?/, '');
}

function stripLeadingHeading(markdown, title) {
  const escapedTitle = title.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return markdown.replace(new RegExp(`^#\\s+${escapedTitle}\\r?\\n\\r?\\n`), '');
}

function toYamlString(value) {
  return JSON.stringify(value);
}

function buildPathLookup(config) {
  return new Map(
    (config.sections || []).flatMap((section) =>
      (section.pages || []).map((page) => [
        `${section.slug}/${page.slug}`,
        {
          sectionSlug: section.slug,
          sectionTitle: section.title,
          pageSlug: page.slug,
          pageTitle: page.title,
        },
      ]),
    ),
  );
}

function main() {
  const websiteConfig = JSON.parse(fs.readFileSync(WEBSITE_PATHS_CONFIG_PATH, 'utf8'));
  const pathLookup = buildPathLookup(websiteConfig);
  const topics = INDEX_PATHS.flatMap((indexPath) => JSON.parse(fs.readFileSync(indexPath, 'utf8')).topics || []);
  const publishedTopics = topics
    .filter((topic) => typeof topic.websitePath === 'string' && topic.websitePath.length > 0)
    .map((topic) => ({
      ...topic,
      website: pathLookup.get(topic.websitePath),
    }))
    .filter((topic) => topic.website)
    .sort((left, right) => left.websitePath.localeCompare(right.websitePath));

  fs.rmSync(GENERATED_CONTENT_ROOT, { recursive: true, force: true });
  ensureDir(GENERATED_CONTENT_ROOT);

  for (const topic of publishedTopics) {
    const sourcePath = path.join(REPO_ROOT, topic.path);
    const sourceContent = fs.readFileSync(sourcePath, 'utf8');
    const markdownBody = stripLeadingHeading(stripFrontmatter(sourceContent).trim(), topic.title);
    const targetDir = path.join(GENERATED_CONTENT_ROOT, topic.website.sectionSlug);
    const targetPath = path.join(targetDir, `${topic.website.pageSlug}.md`);

    ensureDir(targetDir);
    fs.writeFileSync(
      targetPath,
      [
        '---',
        `title: ${toYamlString(topic.title)}`,
        `description: ${toYamlString(topic.summary)}`,
        `sourcePath: ${toYamlString(topic.path)}`,
        `websitePath: ${toYamlString(topic.websitePath)}`,
        `sectionTitle: ${toYamlString(topic.website.sectionTitle)}`,
        `pageTitle: ${toYamlString(topic.website.pageTitle)}`,
        '---',
        '',
        markdownBody,
        '',
      ].join('\n'),
    );
  }

  const publishedTopicByPath = new Map(publishedTopics.map((topic) => [topic.websitePath, topic]));
  const sections = (websiteConfig.sections || [])
    .map((section) => {
      const pages = (section.pages || [])
        .map((page) => {
          const websitePath = `${section.slug}/${page.slug}`;
          const topic = publishedTopicByPath.get(websitePath);

          if (!topic) {
            return null;
          }

          return {
            slug: page.slug,
            title: page.title,
            link: `en/${section.slug}/${page.slug}`,
            sourcePath: topic.path,
            websitePath,
          };
        })
        .filter(Boolean);

      if (pages.length === 0) {
        return null;
      }

      return {
        slug: section.slug,
        title: section.title,
        index: pages[0].link,
        pages,
      };
    })
    .filter(Boolean);

  const routes = publishedTopics.map((topic) => ({
    section: topic.website.sectionSlug,
    page: topic.website.pageSlug,
    title: topic.title,
    description: topic.summary,
    path: `en/${topic.website.sectionSlug}/${topic.website.pageSlug}`,
    sourcePath: topic.path,
    websitePath: topic.websitePath,
  }));

  ensureDir(GENERATED_ROOT);
  writeJson(MANIFEST_PATH, { sections, routes });
}

main();
// End AI-Assisted
