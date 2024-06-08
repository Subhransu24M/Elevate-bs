// next.config.js
const withVideos = require('next-videos')

module.exports = withVideos()

module.exports = {
    images:{
        remotePatterns:[
            {
                protocol:'https',
                hostname:'cdn.sanity.io'
            }
        ]
    }
  }