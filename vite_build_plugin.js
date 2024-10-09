import fs from 'fs'
import _ from 'lodash'

export default () => {
    return {
        name: 'vite_build_plugin',

        apply: 'build',
        async writeBundle() {
            const originalHtmlFilePath = `dist/site/${_.last(process.argv)}/index.html`
            const newHtmlFilePath = `dist/index.html`

            await fs.renameSync(originalHtmlFilePath, newHtmlFilePath)
            await fs.rmSync('dist/site', { recursive: true })
        },
    }
}
