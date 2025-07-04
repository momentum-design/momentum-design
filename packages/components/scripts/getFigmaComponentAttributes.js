const path = require('path');
const fs = require('fs');
const chalk = require('chalk');

const FIGMA_BASE_URL = 'https://api.figma.com/v1/files';

const figmaToken = process.env.FIGMA_ACCESS_TOKEN;
const componentName = process.argv[2];
if (!componentName) {
  console.error('Component name (all lower case and one word) is required as an argument.');
  process.exit(1);
}

const root = process.cwd();

const figmaNodeUrl = process.env[`FIGMA_${componentName.toUpperCase()}_URL`];
if (!figmaNodeUrl) {
  console.error(`Figma URL for component ${componentName} not found in environment variables.`);
  process.exit(1);
}

const match = figmaNodeUrl.match(/\/(design|file)\/([^\/?#]+)/i);
const figmaFileKey = match ? match[2] : undefined;
if (!figmaFileKey) {
  console.error(`Figma File Key cannot be parsed from ${figmaNodeUrl}.`);
  process.exit(1);
}

const figmaNodeId = figmaNodeUrl.split('node-id=')[1];
if (!figmaNodeId) {
  console.error(`Figma Node Id cannot be parsed from ${figmaNodeUrl}.`);
  process.exit(1);
}

const figmaApiUrl = `${FIGMA_BASE_URL}/${figmaFileKey}/nodes?ids=${figmaNodeId}`;
const headers = {
  'X-Figma-Token': figmaToken,
};

async function getFigmaData() {
  try {
    const response = await fetch(figmaApiUrl, { headers });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching Figma component attributes:', error);
  }
}

function getNodeComponentPropertyMapFromData(data) {
  const nodeId = Object.keys(data.nodes)[0];
  const node = data.nodes[nodeId];

  if (node.document.type === 'COMPONENT_SET' || node.document.type === 'COMPONENT') {
    const { componentPropertyDefinitions } = node.document;
    return componentPropertyDefinitions;
  }
  return null;
}

function getReactCodeConnectFile() {
  const componentNameLc = componentName.toLowerCase();
  return path.posix.join(
    root,
    'src',
    'components',
    componentNameLc,
    'code-connect',
    `${componentNameLc}.react.figma.tsx`,
  );
}

function getWebComponentCodeConnectFile() {
  const componentNameLc = componentName.toLowerCase();
  return path.posix.join(
    root,
    'src',
    'components',
    componentNameLc,
    'code-connect',
    `${componentNameLc}.webcomponent.figma.ts`,
  );
}

function appendDataToFile(filePath, data) {
  // if Fetched Figma Component Attributes content in the file already exists, remove it from it
  if (fs.existsSync(filePath)) {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const regex = /\/\*\*[\s\S]*?Fetched Figma Component Attributes:[\s\S]*?\*\//;
    const newContent = fileContent.replace(regex, '');
    fs.writeFileSync(filePath, newContent, 'utf8');
  }

  const content = `\n/**\nFetched Figma Component Attributes:\n${JSON.stringify(data, null, 2)}\n*/\n`;

  fs.appendFileSync(filePath, content, 'utf8', err => {
    if (err) {
      console.error(`Error writing to file ${filePath}:`, err);
    }
  });
}

async function main() {
  const data = await getFigmaData();
  if (data) {
    console.log(chalk.grey(`${componentName}: Fetched Figma component attributes`));
    const componentPropertyDefinitions = getNodeComponentPropertyMapFromData(data);
    if (componentPropertyDefinitions) {
      console.log(chalk.grey(`${componentName}: Parsed Figma component attributes`));
      const reactFilePath = getReactCodeConnectFile();
      const webComponentFilePath = getWebComponentCodeConnectFile();

      appendDataToFile(reactFilePath, componentPropertyDefinitions);
      appendDataToFile(webComponentFilePath, componentPropertyDefinitions);

      console.log(chalk.grey(`${componentName}: Appended Figma component attributes to files`));
      console.log(chalk.green('Success'));
      console.log(chalk.cyan('\n(delete the comment once you are done)'));
    } else {
      console.error('No component property definitions found in the Figma data.');
    }
  } else {
    console.log('No data returned from Figma API.');
  }
}

main().catch(error => {
  console.error('Error in main function:', error);
});
