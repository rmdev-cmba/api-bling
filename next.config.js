module.exports = {
    images: {
        deviceSizes: [320, 640, 768, 1024, 1080],
        domains: ['orgbling.s3.amazonaws.com', 'http2.mlstatic.com'],
    },

    // webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    //     // Note: we provide webpack above so you should not `require` it
    //     // Perform customizations to webpack config
    //     config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//))
    
    //     // Important: return the modified config
    //     return config
    //   },
}