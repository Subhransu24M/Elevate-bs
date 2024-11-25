// next.config.js
const withVideos = require('next-videos')

module.exports = withVideos()

module.exports = {
    images:{
        remotePatterns:[
            {
                protocol:'https',
                hostname:'cdn.sanity.io'
            },
        ],
        domains: ['elevatebs.com'], 
        // loader: 'default', 
        // path: '/images/', 
    },

    // async rewrites() {
    //     return [
    //       {
    //         source: '/images/:path*',
    //         destination: '/_next/image?url=/:path*', // Rewrite _next/image URLs
    //       },
    //     ];
    //   },
  };

 
