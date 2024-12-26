// import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS || false;
let _assetPrefix = "";
let _basePath = "";
let _output = "export"

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.split('/')[1];
  _assetPrefix = `/${repo}/`;
  _basePath = `/${repo}`;
  // _output = "export";
}

const nextConfig = {
  assetPrefix: _assetPrefix,
  basePath: _basePath,
  output: _output,
};

// pnpm install @next/mdx @mdx-js/loader @mdx-js/react @types/mdx
// const withMDX = createMDX({
//   extension: /\.mdx?$/,
//   options: {
//     remarkPlugins: [],
//     rehypePlugins: [],
//   },
// })

export default nextConfig;
