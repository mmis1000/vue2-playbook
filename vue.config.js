const path = require('path')
const {
    NodeJsInputFileSystem,
    CachedInputFileSystem,
    ResolverFactory
} = require('enhanced-resolve');

class LogPlugin {
    constructor() {
        // create a resolver
        this.resolver = ResolverFactory.createResolver({
            // Typical usage will consume the `NodeJsInputFileSystem` + `CachedInputFileSystem`, which wraps the Node.js `fs` wrapper to add resilience + caching.
            fileSystem: new CachedInputFileSystem(new NodeJsInputFileSystem(), 4000),
            extensions: ['.js', '.json', '.vue'],
            alias: {
                '@': path.resolve(__dirname +'/', 'src/')
            }
            /* any other resolver options here. Options/defaults can be seen below */
        });
    }
    apply(compiler) {
        compiler.hooks.normalModuleFactory.tap('myplugin', this.onNormalModuleFactory.bind(this));
    }


    onNormalModuleFactory(compiler) {
        compiler.hooks.beforeResolve.tapPromise('myplugin', this.onBeforeResolve.bind(this));
    }
    /**
     * 
     * @param {Request} request 
     */
    async onBeforeResolve(request) {
        const resolveContext = {};
        const lookupStartPath = request.context;
        const requestPath = request.request.replace(/!.*$/, '');
        // eslint-disable-next-line no-console
        // console.log(lookupStartPath, requestPath)
        try {
            const filePath = await new Promise((resolve, reject) => {
                this.resolver.resolve({}, lookupStartPath, requestPath, resolveContext, (err/*Error*/, filePath/*string*/) => {
                    if (err) return reject(err)
                    resolve(filePath)
                });
            })

            const sourcePath = path.resolve(__dirname + '/', 'src')
            if (filePath.startsWith(sourcePath) && request.contextInfo.issuer !== filePath.replace(/\?.*$/, '')) {
                // eslint-disable-next-line no-console
                console.error(request.contextInfo.issuer, filePath)
            }
        } catch (err) {
            // eslint-disable-next-line no-console
            // console.error(err)
        }
    }
}

module.exports = {
    publicPath: './',

    configureWebpack: {
        plugins: [
            new LogPlugin()
        ]
    },
}