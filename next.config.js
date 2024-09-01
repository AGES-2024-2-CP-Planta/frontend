/** @type {import('next').NextConfig} */
export const reactStrictMode = true;
export const env = {
    API_URL: process.env.NEXT_PUBLIC_API_URL,
};
export const images = {
    domains: ['example.com'],
};
export function webpack(config, { isServer }) {
    return config;
}
  