import colors from 'tailwindcss/colors'

// 删除 tailwincss 弃用颜色，避免警告信息
delete colors['lightBlue']
delete colors['warmGray']
delete colors['trueGray']
delete colors['coolGray']
delete colors['blueGray']

/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./index.html',
		'./src/**/*.{vue,js,ts,jsx,tsx}'
	],
	theme: {
		extend: {},
		colors: {
			...colors,
			primary: 'var(--primary)',
		},
	},
	plugins: []
}

