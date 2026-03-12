/** @type {import('tailwindcss').Config} */
export default {
  // 告知 Tailwind 扫描哪些文件
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // 自定义颜色：深色主题
      colors: {
        background: '#0a0a0a',
        foreground: '#ffffff',
        accent: {
          from: '#6366f1',
          to: '#a855f7',
        },
      },
      // 自定义字体
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
