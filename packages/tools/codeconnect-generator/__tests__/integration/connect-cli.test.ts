/**
 * @fileoverview End-to-end smoke test for the connect CLI command.
 */

import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';

import { run } from '../../src/cli';

describe('connect CLI integration', () => {
  let tempDir: string;
  let previousExitCode: typeof process.exitCode;

  beforeEach(() => {
    tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'codeconnect-cli-integration-'));
    previousExitCode = process.exitCode;
    process.exitCode = 0;
  });

  afterEach(() => {
    process.exitCode = previousExitCode;
    fs.rmSync(tempDir, { recursive: true, force: true });
  });

  it('should generate connect files from a custom-elements manifest', async () => {
    const packageRoot = path.join(tempDir, 'components');
    const manifestPath = path.join(packageRoot, 'custom-elements.json');
    const modulePath = 'src/components/button/button.component.ts';
    const componentPath = path.join(packageRoot, modulePath);

    fs.mkdirSync(path.dirname(componentPath), { recursive: true });
    fs.writeFileSync(componentPath, 'export class Button {}', 'utf8');

    const manifest = {
      schemaVersion: '1.0.0',
      modules: [
        {
          kind: 'javascript-module',
          path: modulePath,
          declarations: [
            {
              kind: 'class',
              name: 'Button',
              tagName: 'mdc-button',
              attributes: [
                {
                  name: 'disabled',
                  type: { text: 'boolean' },
                  fieldName: 'disabled',
                },
              ],
            },
          ],
        },
      ],
    };

    fs.writeFileSync(manifestPath, JSON.stringify(manifest), 'utf8');

    const inputPath = path.join(packageRoot, 'src', 'components', 'button');
    await run(['node', 'codeconnect-generator', 'connect', '--path', inputPath]);

    const codeConnectDir = path.join(packageRoot, 'src', 'components', 'button', 'code-connect');
    const webComponentOutput = path.join(codeConnectDir, 'button.webcomponent.figma.ts');
    const reactOutput = path.join(codeConnectDir, 'button.react.figma.tsx');

    expect(fs.existsSync(webComponentOutput)).toBe(true);
    expect(fs.existsSync(reactOutput)).toBe(true);

    const webComponentContent = fs.readFileSync(webComponentOutput, 'utf8');
    expect(webComponentContent).toContain('import figma, { html } from \'@figma/code-connect/html\';');
    expect(webComponentContent).toContain('figma.connect(\'<FIGMA_BUTTON_URL>\', {');
    // eslint-disable-next-line no-template-curly-in-string
    expect(webComponentContent).toContain('disabled=${props.disabled}');
    expect(webComponentContent).toContain('imports: ["import \'@momentum-design/components/button\';"],');

    const reactContent = fs.readFileSync(reactOutput, 'utf8');
    expect(reactContent).toContain('import figma from \'@figma/code-connect\';');
    expect(reactContent).toContain('figma.connect(\'<FIGMA_BUTTON_URL>\', {');
    expect(reactContent).toContain('return <Button {...props} />;');

    expect(process.exitCode).toBe(0);
  });
});
