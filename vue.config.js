/* eslint-disable no-console */

const path = require('path')

class LogPlugin {
    constructor(path = null) {
        // create a resolver
        this.relations = {}
        this.filePath = path
    }
    rootPath (path) {
        if (typeof path === 'string' && path.startsWith(__dirname)) {
            return path.replace(__dirname, '')
        } else {
            return path
        }
    }
    apply(compiler) {
        compiler.hooks.normalModuleFactory.tap('myplugin', this.onNormalModuleFactory.bind(this));
        compiler.hooks.afterEmit.tap('myplugin', this.onAfterEmit.bind(this));
    }

    onNormalModuleFactory(compiler) {
        compiler.hooks.afterResolve.tapPromise('myplugin', this.onAfterResolve.bind(this));
    }

    async onAfterResolve(request) {
        if (
            !request.context.match('node_modules') &&
            request.resourceResolveData.context.issuer !== request.resourceResolveData.path &&
            (!request.resourceResolveData.context.compiler || !request.resourceResolveData.context.compiler.startsWith('mini-css-extract-plugin ')) &&
            !request.resourceResolveData.path.match('node_modules')
        ) {
            const from = this.rootPath(request.resourceResolveData.context.issuer) || '(core)'
            const to = this.rootPath(request.resourceResolveData.path) || '(core)'
            this.relations[from] = this.relations[from] || []
            if (this.relations[from].indexOf(to) < 0) {
                this.relations[from].push(to)
            }
        }
    }

    async onAfterEmit() {
        console.log(JSON.stringify(this.relations, 0, 4))
        const walked = new Set()

        let current = new Set(['(core)'])

        const emitted = []

        while (current.size > 0) {
            const next = new Set()

            for (let path of current) {
                if (!walked.has(path)) {
                    if (this.relations[path]) {
                        emitted.push(`"${path}"->{${this.relations[path].map(i => `"${i}"`).join(' ')}}`)
                        this.relations[path].forEach(i => next.add(i))
                    }
                    walked.add(path)
                }
            }

            current = next
        }

        const file = `digraph hierarchy {
    nodesep=1.0 // increases the separation between nodes

    node [color=Red,fontname=Courier,shape=box] //All nodes will this shape and colour
    edge [color=Blue] //All the lines look like this

${emitted.map(i => '    ' + i).join('\n')}
}
`

        if (this.filePath) {
            const fs = require('fs')
            fs.writeFileSync(this.filePath, file)
        }
    }
}

module.exports = {
    publicPath: './',

    configureWebpack: {
        plugins: [
            new LogPlugin(path.resolve(__dirname, './dist/arch-uml.txt'))
        ]
    },
}