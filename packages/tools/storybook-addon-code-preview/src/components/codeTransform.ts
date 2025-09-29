import prettier from "prettier/standalone.js";
import * as htmlPlugin from "prettier/plugins/html";
import * as estreePlugin from "prettier/plugins/estree";
import * as babelPlugin from "prettier/plugins/babel";

// todo: do this properly
export const codeTransform = async (originalCode: string = "", srcLanguage: string, destLanguage: string) => {
  try {
    if (srcLanguage === "lit" && destLanguage === "lit") {
      return await prettier.format(originalCode.trim(), {
        parser: "html",
        plugins: [htmlPlugin],
      });
    } else if (destLanguage === "react") {
      return await prettier.format(`<>${originalCode.trim()}</>`, {
        parser: "babel",
        plugins: [estreePlugin, babelPlugin],
      });
    }
  } catch (e) {
    console.warn("Code Preview - Prettier code formatting failed", e);
  }
  return originalCode;
};
