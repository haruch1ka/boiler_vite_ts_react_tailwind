/** @type {import('tailwindcss').Config} */
// import daisyui from "daisyui"; // daisyuiを使用する場合はコメントを解除
const customColors = {
  mono: {
    100: "#edeeee",
    200: "#e5e5e6",
    300: "#9e9e9f",
    500: "#231815",
  },
};
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,html}"], //tailwindのcssを適用するファイル
  //tailwindのクラスに新たな項目を追加するときはここに追加
  theme: {
    extend: {
      colors: customColors,
      padding: {
        // 3.5: "0.875rem",
      },
      fontWeight: {
        // thin: 100,
        // extralight: 200,
        // light: 300,
        // normal: 400,
        // medium: 500,
        // semibold: 600,
        // bold: 700,
        // extrabold: 800,
        // black: 900,
      },
      fontSize: {
        // "1.5xl": ["1.25rem", "1.75rem"],
      },
      borderRadius: {
        // "2.5xl": "1.25rem",
      },
      borderWidth: {
        // 3: "0.1875rem",
      },
      dropShadow: {
        // base: "0 2.5px 2.5px rgba(27,33,20,0.30)",
      },
      boxShadow: {
        // btnBlue: "0 0.375rem 0 #4980b1",
      },
    },
  },
};
