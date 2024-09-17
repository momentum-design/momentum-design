const fs = require("fs");
const path = require("path");

// todo: modify once decision is made on how versioning will exactly work (e.g. if we want to keep the same version in all packages)
const main = async () => {
  const packageJsonPath = path.resolve(process.cwd(), "package.json");
  const packageJson = require(packageJsonPath);

  const dependencies = packageJson.dependencies || {};
  const peerDependencies = packageJson.peerDependencies || {};

  for (const dep in dependencies) {
    if (dependencies[dep].startsWith("workspace:")) {
      dependencies[dep] = `*`;
    }
  }

  for (const dep in peerDependencies) {
    if (peerDependencies[dep].startsWith("workspace:")) {
      peerDependencies[dep] = `*`;
    }
  }

  delete packageJson.scripts;
  delete packageJson.devDependencies;

  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
};

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
