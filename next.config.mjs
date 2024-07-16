/** @type {import('next').NextConfig} */
const nextConfig = {
  devServer: {
    host: '::', // 绑定到所有 IPv6 地址
    port: 3000  // 你可以选择任何你喜欢的端口
  }
};

export default nextConfig;
