import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";

import peerDepsExternal from "rollup-plugin-peer-deps-external";

import postcss from "rollup-plugin-postcss";

import packageJson from "./package.json";
const EXTENSIONS = [".ts", ".tsx"];

// Excluded dependencies - dev dependencies
//const EXTERNAL = Object.keys(packageJson.devDependencies);
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  input: "./src/index.ts",
  output: [
    {
      file: packageJson.main,
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript(),
    postcss(), // Resolves node modules
    babel({
      extensions: EXTENSIONS, // Compile our TypeScript files
      babelHelpers: "runtime", // EDIT(2021-11-18): "inline" is not recommended. Please see the details in https://github.com/kraftdorian/react-ts-rollup-starter-lib/issues/1
      include: EXTENSIONS.map((ext) => `src/**/*${ext}`),
      plugins: ["@babel/plugin-transform-runtime"],
    }),
  ],
  external: [...Object.keys(packageJson.devDependencies), 'react', 'react-domh'], // https://rollupjs.org/guide/en/#peer-dependencies
};
