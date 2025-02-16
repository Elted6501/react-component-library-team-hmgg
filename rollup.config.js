import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";

export default [
  {
    input: "src/index.ts",
    output: {
      file: "dist/esm/index.js",
      format: "esm",
    },
    plugins: [
      resolve(),
      postcss(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json", compilerOptions: { declaration: true, declarationDir: "./dist/esm/types" } }),
    ],
  },
  {
    input: "src/index.ts",
    output: {
      file: "dist/cjs/index.js",
      format: "cjs",
    },
    plugins: [
      resolve(),
      postcss(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json", compilerOptions: { declaration: true, declarationDir: "./dist/cjs/types" } }),
    ],
  },
];
