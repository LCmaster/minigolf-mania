import { join } from "path";
import { skeleton } from "@skeletonlabs/tw-plugin";

import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config}*/
const config = {
  darkMode: "class",
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    join(
      require.resolve("@skeletonlabs/skeleton"),
      "../**/*.{html,js,svelte,ts}"
    ),
  ],
  theme: {
    fontFamily: {
      acme: ["Acme", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "checker-pattern": "url('/checker_pattern.png')",
      },
    },
  },
  plugins: [
    forms,
    skeleton({
      themes: { preset: ["rocket"] },
    }),
  ],
};

module.exports = config;
