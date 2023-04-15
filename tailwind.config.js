/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./public/**/*.{html,js}"],
	theme: {
		extend: {
			screens: {
				"mb": { "max": "739px" },
				"tl": { "min": "740px", "max": "1023px" },
				"pc": { "min": "1024px" },
			},
			fontFamily: {
				Karlar: ["Karla", "sans-serif"],
			},
			keyframes: {
				slideDown: {
					"0%": { transform: "translateY(-100%)" },
					"100%": { transform: "translateY(0)" },
				},
				fadeIn: {
					from: { opacity: 0, transform: "translateY(30%)" },
					to: { opacity: 1, transform: "translateY(0)" },
				},
			},
			animation: {
				slideDown: "slideDown .5s ease-in-out",
				fadeIn: "fadeIn .4s ease-in-out",
			},
		},
	},
	plugins: [],
};
