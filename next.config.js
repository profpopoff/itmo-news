/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['news.itmo.ru'],
  },
}

module.exports = nextConfig
