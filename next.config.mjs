/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol:'https',
                hostname:'cdn.sanity.io'
            }
        ]
    }
};

export default nextConfig;

// next.config.js
const withVideos = require('next-videos')

module.exports = withVideos()



