/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS || false;
let _assetPrefix = "";
let _basePath = "";
let _output = undefined

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.split('/')[1];
  _assetPrefix = `/${repo}/`;
  _basePath = `/${repo}`;
  _output = "export";
}

const nextConfig = {
  assetPrefix: "/webnotes/",
  basePath: "/webnotes",
  output: _output
};

export default nextConfig;
