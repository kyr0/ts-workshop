import { build } from 'esbuild'

build({
  entryPoints: ['src/index.ts'],
  outbase: './src/',
  format: 'esm',
  //outfile: 'build/index.js',
  outdir: './build/',
  //minify: true,
  sourcemap: true,
  treeShaking: true,
  bundle: true,
  external: ['node_modules'],
  platform: 'node',
})
