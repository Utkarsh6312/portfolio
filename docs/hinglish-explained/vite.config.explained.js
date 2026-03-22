// Study copy only: yeh explained version hai, app build is file se nahi hota.
// Har original line ke neeche Hinglish explanation di gayi hai.
import { defineConfig } from 'vite'
// Yeh line { defineConfig } ko vite se import kar rahi hai taaki yahan use kar sakein.
import react from '@vitejs/plugin-react'
// Yeh line react ko @vitejs/plugin-react se import kar rahi hai taaki yahan use kar sakein.
import tailwindcss from '@tailwindcss/vite'
// Yeh line tailwindcss ko @tailwindcss/vite se import kar rahi hai taaki yahan use kar sakein.

// Yeh blank line sirf code ko readable blocks me divide kar rahi hai.
// https://vite.dev/config/
// Yeh line current logic ka part hai aur upar-niche wali lines ke saath milkar kaam kar rahi hai.
export default defineConfig({
// Yeh line defineConfig({ ko is file ka default export bana rahi hai.
  plugins: [react(),
// Yeh object ka plugins field define kar rahi hai.
       tailwindcss(),
// Yeh line current logic ka part hai aur upar-niche wali lines ke saath milkar kaam kar rahi hai.
  ],
// Yeh line current logic ka part hai aur upar-niche wali lines ke saath milkar kaam kar rahi hai.
})
// Yeh line current logic ka part hai aur upar-niche wali lines ke saath milkar kaam kar rahi hai.
