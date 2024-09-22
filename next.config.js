const { hostname } = require('os')

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["next.org", "res.cloudinary.com", "i.ibb.co.com"],
    },
}

module.exports = nextConfig
