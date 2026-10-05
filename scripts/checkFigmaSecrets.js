// Pre-commit guard: this repository is public, so a Figma file key or personal
// access token must never reach a commit. Patterns are deliberately narrow —
// they match real keys and tokens, not prose mentions of them in docs.
// No dependencies on purpose: a guard that can fail to load is not a guard.
const { execFileSync } = require('child_process');

const RED = '\u001b[31m';
const RESET = '\u001b[0m';

const PATTERNS = [
  { name: 'Figma design file URL', regex: /figma\.com\/(design|file)\/[0-9a-zA-Z]{22,}/ },
  { name: 'Figma personal access token', regex: /figd_[A-Za-z0-9_-]{20,}/ },
];

const git = (args) => execFileSync('git', args, { maxBuffer: 1024 * 1024 * 64 });

const stagedFiles = git(['diff', '--cached', '--name-only', '--diff-filter=ACM', '-z'])
  .toString('utf8')
  .split('\0')
  .filter(Boolean);

const findings = [];

stagedFiles.forEach((file) => {
  let staged;
  try {
    staged = git(['show', `:${file}`]);
  } catch {
    return;
  }

  if (staged.includes(0)) return;

  staged
    .toString('utf8')
    .split('\n')
    .forEach((line, index) => {
      PATTERNS.forEach(({ name, regex }) => {
        if (regex.test(line)) findings.push({ file, line: index + 1, name });
      });
    });
});

if (findings.length) {
  // Never echo the match itself — that would copy the secret into the terminal
  // scrollback and into any CI log that runs this.
  console.error(`${RED}\n✖ Figma secret detected in staged changes.\n${RESET}`);
  findings.forEach(({ file, line, name }) => console.error(`  ${file}:${line} — ${name}`));
  console.error(
    [
      '',
      'Replace the URL with a <FIGMA_<COMPONENT>_URL> placeholder and put the real',
      'value in packages/components/.env (gitignored). `yarn components figma:scrub`',
      'does this for Code Connect template files.',
      '',
      'If a token was committed anywhere, revoke it in Figma before doing anything else.',
      '',
    ].join('\n'),
  );
  process.exit(1);
}
