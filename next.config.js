/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export — produces an `out/` folder that Netlify serves directly.
  output: "export",

  // next/image optimisation is disabled for static export; images are served as-is.
  images: {
    unoptimized: true,
  },

  // Emit trailing-slash directories so deep links resolve correctly on static hosts.
  trailingSlash: true,

  reactStrictMode: true,
};

module.exports = nextConfig;
