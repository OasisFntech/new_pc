import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import { resolve } from 'path'
import vite_build_plugin from './vite_build_plugin.js'
import AutoImport from 'unplugin-auto-import/vite'
import { viteCommonjs } from '@originjs/vite-plugin-commonjs'

// https://vitejs.dev/config/
export default ({ mode }) => {
	return defineConfig({
		server: {
			open: true,
			host: true,
			proxy: {
				'/api': {
					target: 'http://16.162.227.98:9200',
					changeOrigin: true,
				}
			}
		},
		plugins: [
			vue(),
			vite_build_plugin(),
			viteCommonjs(),
			AutoImport({
				include: [
					/\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
					/\.vue$/,
					/\.vue\?vue/, // .vue
					/\.md$/, // .md
				],
				imports: [
					'vue',
					'vue-router',
					'pinia',
					'vue-i18n',
				],
				dts: true,
			})
		],
		resolve: {
			alias: {
				'@': resolve(__dirname, 'src')
			}
		},
		publicDir: `public/${mode}`,
		build: {
			rollupOptions: {
				input: resolve(__dirname, `site/${mode}/index.html`),
			}
		},
	})
}
