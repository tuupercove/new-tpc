import { heroui } from '@heroui/react';
import daisyui from "daisyui"

module.exports = {
    content: [
        "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
        './src/**/*.{astro,html,svelte,vue,js,ts,jsx,tsx}'
    ],
    theme: {
        extend: {},
    },
    darkMode: "class",
    plugins: [
        daisyui,
        heroui
    ],
};
