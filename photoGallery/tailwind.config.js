const { guessProductionMode } = require("@ngneat/tailwind");

process.env.TAILWIND_MODE = guessProductionMode() ? "build" : "watch";

module.exports = {
  prefix: "",
  mode: "jit",
  purge: {
    content: ["./src/**/*.{html,ts,css,scss,sass,less,styl}"],
  },
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      background: {
        svgs: {
          gallery: "url('./src/assets/svg/gallery.svg')",
          blank: "url('./src/assets/svg/blank.svg')",
          "border-change": "url('./src/assets/svg/border-change.svg')",
          checkbox: "url('./src/assets/svg/checkbox.svg')",
          close: "url('./src/assets/svg/close.svg')",
          left: "url('./src/assets/svg/left.svg')",
          "minus-square": "url('./src/assets/svg/minus-square.svg')",
          moon: "url('./src/assets/svg/moon.svg')",
          notebook: "url('./src/assets/svg/notebook.svg')",
          photo: "url('./src/assets/svg/photo.svg')",
          "plus-square": "url('./src/assets/svg/plus-square.svg')",
          plus: "url('./src/assets/svg/plus.svg')",
          question: "url('./src/assets/svg/question.svg')",
          right: "url('./src/assets/svg/right.svg')",
          rotate: "url('./src/assets/svg/rotate.svg')",
          save: "url('./src/assets/svg/save.svg')",
          search: "url('./src/assets/svg/search.svg')",
          sun: "url('./src/assets/svg/sun.svg')",
          "zoom-in": "url('./src/assets/svg/zoom-in.svg')",
          "zoom-out": "url('./src/assets/svg/zoom-out.svg')",
        },

        test:
          "https://i.pinimg.com/originals/06/3a/ef/063aef8aed6644f49a95a516544546b7.jpg",
      },

      font: {
        Kufi: ["Reem Kufi", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
  ],
};
