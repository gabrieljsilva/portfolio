import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./constants/**/*.{js,ts,jsx,tsx,mdx}",
		"./lib/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			screens: {
				// Ponto onde a navegação do cabeçalho ainda cabe ao lado dos controles.
				nav: "981px",
			},
			colors: {
				bg: "var(--color-bg)",
				surface: "var(--color-surface)",
				ink: "var(--color-text)",
				line: "var(--line)",
				"line-strong": "var(--line-strong)",
				muted: "var(--muted)",
				hover: "var(--hover)",
			},
			fontFamily: {
				sans: ["var(--font-archivo)", "system-ui", "sans-serif"],
			},
			borderRadius: {
				soft: "var(--soft)",
			},
			transitionTimingFunction: {
				soft: "cubic-bezier(0.22, 1, 0.36, 1)",
			},
			keyframes: {
				"page-in": {
					from: { opacity: "0", transform: "translateY(12px)" },
					to: { opacity: "1", transform: "none" },
				},
				"panel-in": {
					from: { opacity: "0", transform: "translateY(-8px)" },
					to: { opacity: "1", transform: "none" },
				},
				caret: {
					"0%, 49%": { opacity: "1" },
					"50%, 100%": { opacity: "0" },
				},
				"acc-open": {
					from: { maxHeight: "0", opacity: "0" },
					"60%": { opacity: "1" },
					to: { maxHeight: "1400px", opacity: "1" },
				},
				"acc-inner": {
					from: { opacity: "0", transform: "translateY(-10px)" },
					to: { opacity: "1", transform: "none" },
				},
			},
			animation: {
				"page-in": "page-in 0.7s cubic-bezier(0.22, 1, 0.36, 1) both",
				"panel-in": "panel-in 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
				caret: "caret 1.1s steps(1) infinite",
				"acc-open": "acc-open 0.55s cubic-bezier(0.22, 1, 0.36, 1)",
				"acc-inner": "acc-inner 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
			},
		},
	},
	plugins: [],
};
export default config;
