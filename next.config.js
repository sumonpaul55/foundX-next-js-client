const { hostname } = require('os')

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
            },
            // {
            //     protocol: 'https',
            //     hostname: 'res.cloudinary.com',
            // },
            // {
            //     protocol: 'https',
            //     hostname: 'cdn.pixabay.com',
            // },
            // {
            //     protocol: 'https',
            //     hostname: 'pixabay.com',
            // },
        ],
    },
}

module.exports = nextConfig
