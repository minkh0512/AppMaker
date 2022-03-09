/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}
module.exports = {
  assetPrefix:
    process.env.NODE_ENV === "production"
      ? "https://minkh0512.github.io/AppMaker/"
      : "",
};
module.exports = nextConfig
