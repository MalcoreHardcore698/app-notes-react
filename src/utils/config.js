const port = global.location.port

export const config = {
    proxy: {
        host: (port === '3000') ? 'http://localhost:60474' : global.location.origin,
        width: window.innerWidth,
        height: window.innerHeight
    },
    get: (key) => {
        return config.proxy[key]
    }
}