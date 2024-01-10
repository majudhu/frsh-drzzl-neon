import { type Config } from "tailwindcss";

export default {
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "20px",
        lg: "32px`",
        "2xl": "44px",
      },
    },
    extend: {},
  },
  content: [
    "{routes,islands,components}/**/*.{ts,tsx}",
  ],
} satisfies Config;
