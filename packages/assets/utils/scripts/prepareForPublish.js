const fs = require("fs");
const path = require("path");

const main = async () => {
  const packageJsonPath = path.resolve(process.cwd(), "package.json");
  const packageJson = require(packageJsonPath);

  delete packageJson.scripts;
  delete packageJson.dependencies;
  delete packageJson.devDependencies;

  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
};

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
