const NextFederationPlugin = require('@module-federation/nextjs-mf')

const remotes = isServer => {
    const location = 'chunks'

    return {
        app1: `app1@https://localhost:3001/_next/static/${location}/remoteEntry.js`
    }
}

module.exports = {
    reactStrictMode: true,
    experimental: {
        esmExternals: false,
    },
    webpack5: true,
    webpack(config, options) {
        config.plugins.push(
            new NextFederationPlugin({
                name: 'host',
                filename: 'static/chunks/remoteEntry.js',
                exposes: {
                    './Header': './src/federated-components/Header.tsx'
                },
                remotes: remotes(options.isServer),
                shared: {},
                extraOptions: {
                    automaticAsyncBoundary: false
                }
            })
        )

        return config
    }
}