/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'], 
	theme: {
		extend: { 
			spacing : {
				"5px" : "5px"
		},
			animation: {
				shake: 'shake 2s ease',
			},
			keyframes: {
				shake: {
					'0%, 100%': { transform: 'translateY(0)' },
					'25%': { transform: 'translateY(-5px)' },
					'50%': { transform: 'translateY(5px)' },
					'75%': { transform: 'translateY(-5px)' },
				},
			},
		},
	},
	plugins: [],
}
