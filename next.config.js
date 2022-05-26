/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    EMAIL_PUBLIC_KEY: "tEuGoEaAyKDtb0Y7p",
    EMAIL_SERVICE_ID: "service_ngemjtz",
    EMAIL_TEMPLATE_ID: "template_sxp9eas",
    BASE_URL: process.env.BASE_URL,
  },
};
module.exports = nextConfig;
