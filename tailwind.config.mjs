const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	darkMode: "class",
	theme: {
		screens: {
			xss: "360px",
			xs: "393px",
			...defaultTheme.screens,
		},
		extend: {
			margin: {
				"80px": "80px",
			},
			width: {
				recommend: "1100px",
			},
			colors: {
				oldworld: {
					bg: "#161617",
					fg: "#c9c7cd",
					subtext1: "#b4b1ba",
					subtext2: "#9f9ca6",
					subtext3: "#8b8693",
					subtext4: "#6c6874",
					bg_dark: "#131314",
					black: "#27272a",
					red: "#ea83a5",
					green: "#90b99f",
					yellow: "#e6b99d",
					purple: "#aca1cf",
					magenta: "#e29eca",
					orange: "#f5a191",
					blue: "#92a2d5",
					cyan: "#85b5ba",
					gray0: "#18181a",
					gray1: "#1b1b1c",
					gray2: "#2a2a2c",
					gray3: "#313134",
					gray4: "#3b3b3e",
					gray5: "#444448",
				},
			},
		},
	},
	plugins: [],
};
