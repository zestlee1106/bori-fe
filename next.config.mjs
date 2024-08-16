/* eslint-disable no-undef */
/** @type {import('next').NextConfig} */

import fs from 'fs'
import path from 'path'
import dotenv from 'dotenv'

const envFile = process.env.BUILD_ENV ? `.env.${process.env.BUILD_ENV}` : '.env'
const envPath = path.resolve(process.cwd(), envFile)

if (fs.existsSync(envPath)) {
  dotenv.config({ path: envPath })
}

const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3300',
      },
      {
        hostname: 'bori-fe.vercel.app',
      },
      {
        hostname: 'images.unsplash.com',
      },
    ],
  },
  env: {
    API_URL: process.env.API_URL,
    NEXT_PUBLIC_API_URL: process.env.API_URL,
  },
  reactStrictMode: false,
}

export default nextConfig
