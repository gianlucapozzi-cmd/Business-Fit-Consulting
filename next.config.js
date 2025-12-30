/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  images: {
    domains: [],
    formats: ['image/avif', 'image/webp'],
  },
  // Permetti richieste cross-origin durante lo sviluppo
  allowedDevOrigins: ['192.168.0.11'],
  // Specifica la root directory del progetto per evitare conflitti con altri lockfiles
  outputFileTracingRoot: path.join(__dirname),
}

module.exports = nextConfig

