import { execute } from '../utils.js';

class Yarn {
  static #listToJson(list) {
    return list.split('\n')
      .filter((line) => !!line)
      .map((line) => JSON.parse(line).name);
  }

  static #whyToJson(why) {
    return why.split('\n')
      .filter((line) => !!line)
      .map((line) => `@${JSON.parse(line).value.split('@')[1]}`)
  }

  static why(packageName) {
    return execute(`yarn why ${packageName} --json`)
      .then((response) => Yarn.#whyToJson(response));
  }

  static list({ ref, packageScope } = {}) {
    return execute(`yarn workspaces list ${ref ? `--since="${ref}" ` : ''}--json`)
      .then((response) => Yarn.#listToJson(response))
      .then((json) => json.filter((name) => name?.startsWith(packageScope)));
  }
}

export default Yarn;
