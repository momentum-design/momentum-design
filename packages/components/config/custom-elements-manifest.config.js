/* eslint-disable no-restricted-syntax */
/* eslint-disable no-param-reassign */
function replace(string, terms) {
  terms.forEach(({ from, to }) => {
    string = string?.replace(from, to);
  });

  return string;
}

module.exports = {
  /** Globs to analyze */
  globs: ['src/components/**/*.component.ts', 'src/utils/mixins/*.ts'],
  /** Globs to exclude */
  exclude: ['*.js'],
  /** Directory to output CEM to */
  outdir: 'dist',
  /** Run in dev mode, provides extra logging */
  dev: false,
  /** Not run in watch mode, for build */
  watch: false,
  /** Include third party custom elements manifests */
  dependencies: false,
  /** Output CEM path to `package.json`, defaults to true */
  packagejson: false,
  /** Enable special handling for litelement */
  litelement: true,
  /** Enable special handling for catalyst */
  catalyst: false,
  /** Enable special handling for fast */
  fast: false,
  /** Enable special handling for stencil */
  stencil: false,
  /** Provide custom plugins */
  plugins: [
    {
      name: 'momentum-translate-module-paths',
      packageLinkPhase({ customElementsManifest }) {
        customElementsManifest?.modules?.forEach((mod) => {
          //
          // CEM paths look like this:
          //
          //  src/components/avatar/avatar.component.ts
          //
          // But we want them to look like this:
          //
          //  components/avatar/avatar.component.js
          //
          const terms = [
            { from: /^src\//, to: '' }, // Strip the src/ prefix
            { from: /\.(t|j)sx?$/, to: '.js' }, // Convert .ts to .js
          ];

          mod.path = replace(mod.path, terms);

          for (const ex of mod.exports ?? []) {
            ex.declaration.module = replace(ex.declaration.module, terms);
          }

          for (const dec of mod.declarations ?? []) {
            if (dec.kind === 'class') {
              for (const member of dec.members ?? []) {
                if (member.inheritedFrom) {
                  member.inheritedFrom.module = replace(member.inheritedFrom.module, terms);
                }
              }
              if (dec.superClass?.module) {
                dec.superClass.module = replace(dec.superClass.module, terms);
              }
            }
          }
        });
      },
    },
    {
      name: 'momentum-jsdocs',
      analyzePhase({ ts, node, moduleDoc }) {
        if (node.kind === ts.SyntaxKind.ClassDeclaration) {
          const className = node.name.getText();
          const classDoc = moduleDoc?.declarations?.find((declaration) => declaration.name === className);

          // This is what allows us to map JSDOC comments to ReactWrappers.
          // this will only parse the full JSDoc comment (including web component tags)
          classDoc.jsDoc = node.jsDoc?.map((jsDoc) => jsDoc.getFullText()).join('\n');
        }
      },
    },
  ],
};
