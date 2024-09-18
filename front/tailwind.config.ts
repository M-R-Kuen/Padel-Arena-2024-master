import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        glass: "rgba(119, 119, 119, 0.2)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "limeBlue-gradient": "linear-gradient(to right, #BEF164, #1D4ED7)",
      },

      colors: {
        lime: "#BEF164",
        customBlue: "#1D4ED7",
        glass: "rgba(119, 119, 119, 0.2)",
        slate: "#f8fafc",
      },
      boxShadow: {
        glass: "0 4px 30px rgba(0, 0, 0, 0.1)",
      },
      borderRadius: {
        glass: "16px",
      },
      borderColor: {
        glass: "rgba(119, 119, 119, 0.3)",
      },
      backdropBlur: {
        glass: "6.1px", // Backdrop blur for glass effect
      },
      backdropFilter: {
        glass: "blur(6.1px)",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        bounceBall: {
          "0%, 100%": {
            transform: " translateX(100px)",
            animationTimingFunction: "ease-in",
          },
          "20%": {
            transform: " translateX(-100px)",
            animationTimingFunction: "ease-out",
          },
        },
      },
      animation: {
        scroll: "scroll 20s linear infinite",
        "bounce-ball": "bounceBall 0.9s infinite",
      },
    },
  },
  plugins: [],
};

export default config;
