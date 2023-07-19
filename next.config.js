/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [process.env.WP_IMAGES_URL],
  },
};

module.exports = {
  ...nextConfig,
  env: {
    NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN:
      process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN,
  },
};
