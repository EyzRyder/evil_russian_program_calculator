/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          base:"var(--ion-color-primary)",
          shade:"var(--ion-color-primary-shade)",
          tint:"var(--ion-color-primary-tint)",
        },
        secondary: {
          base:"var(--ion-color-secondary)",
          shade:"var(--ion-color-secondary-shade)",
          tint:"var(--ion-color-secondary-tint)",
        },
        tertiary: {
          base:"var(--ion-color-tertiary)",
          shade:"var(--ion-color-tertiary-shade)",
          tint:"var(--ion-color-tertiary-tint)",
        },
        success: {
          base:"var(--ion-color-success)",
          shade:"var(--ion-color-success-shade)",
          tint:"var(--ion-color-success-tint)",
        },
        warning: {
          base:"var(--ion-color-warning)",
          shade:"var(--ion-color-warning-shade)",
          tint:"var(--ion-color-warning-tint)",
        },
        danger: {
          base:"var(--ion-color-danger)",
          shade:"var(--ion-color-danger-shade)",
          tint:"var(--ion-color-danger-tint)",
        },
        dark: {
          base:"var(--ion-color-dark)",
          shade:"var(--ion-color-dark-shade)",
          tint:"var(--ion-color-dark-tint)",
        },
        medium: {
          base:"var(--ion-color-medium)",
          shade:"var(--ion-color-medium-shade)",
          tint:"var(--ion-color-medium-tint)",
        },
        light: {
          base:"var(--ion-color-light)",
          shade:"var(--ion-color-light-shade)",
          tint:"var(--ion-color-light-tint)",
        },

      },
      backgroundImage:{
        metal:"url('./../assets/img/metal.jpg')",
      }
    },
  },
  plugins: [],
}

