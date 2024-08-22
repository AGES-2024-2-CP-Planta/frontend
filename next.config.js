/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    env: {
        API_URL: process.env.NEXT_PUBLIC_API_URL,
    },
    images: {
        domains: ['example.com'],
    },
    webpack: (config, { isServer }) => {
        // Custom Webpack configurations
        return config;
    },
};
  