/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true }, // wichtig für next/image auf Pages
};

module.exports = nextConfig;