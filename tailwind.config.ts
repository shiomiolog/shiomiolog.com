// tailwind.config.ts
import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  content: [
    "./app/**/*.{vue,js,ts,jsx,tsx}",
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // 通常の文章用（プロポーショナルUDゴシック）
        sans: ['"BIZ UDPGothic"', "sans-serif"],

        // 日付・英数字・ソースコード表記用（Source Code Pro）
        mono: ['"Source Code Pro"', "monospace"],

        // 等幅のUDゴシックも必要な時のためにキープ
        "ud-mono": ['"BIZ UDGothic"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
