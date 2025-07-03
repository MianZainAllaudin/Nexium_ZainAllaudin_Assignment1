# Motivational Quote Generator

## Quote Generator Web App 

A beautiful, responsive Next.js app for discovering and saving motivational quotes.

---

## Features


- **Browse motivational quotes by category** (e.g., "Success", "Love", "Wisdom", etc.)
- **Fetches quotes live from the [ZenQuotes API](https://zenquotes.io/)**
- **Save your favorite quotes** (persisted in your browser)
- **Modern, responsive UI** built with Next.js and React
- **Quotes displayed on beautiful image backgrounds**

---

## Project Structure

```
├── app/
│   ├── api/
│   │   └── quotes/
│   │       └── route.ts         # Next.js API route proxying ZenQuotes API
│   ├── QuoteGenerator.tsx       # Main quote generator component (category, favorites, UI)
│   ├── layout.tsx               # App layout and font setup
│   └── page.tsx                 # Home page (renders QuoteGenerator)
├── components/
│   └── ui/
│       ├── button.tsx           # Button UI component
│       ├── input.tsx            # Input UI component (may be unused now)
│       └── card.tsx             # Card UI component
├── styles/
│   └── globals.css              # Global CSS styles
├── package.json
├── tsconfig.json
└── README.md
```
---

## Setup & Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Usage

- **Select a category** from the dropdown menu (or leave as "All" for a random mix).
- Click **Get Quotes** to see motivational quotes from that category.
- Click the ☆ button to save a quote to your favorites, or ★ to remove it from favorites.
- Your favorite quotes will appear in the "⭐ Favorite Quotes" section and are saved in
---

## Deployment

https://quotegeneratorwebapp.vercel.app/

---

## License

Proprietary License

Copyright (c) 2025 Zain Allaudin

All rights reserved.

This software and associated documentation files (Motivational Quote Generator) are the exclusive property of Zain Allaudin. Unauthorized copying, modification, distribution, or use of the Software, in whole or in part, is strictly prohibited without prior written permission from the copyright holder.

The Software is provided "as is," without warranty of any kind, express or implied, including but not limited to the warranties of merchantability, fitness for a particular purpose, and noninfringement. In no event shall the copyright holder be liable for any claim, damages, or other liability, whether in an action of contract, tort, or otherwise, arising from, out of, or in connection with the Software or the use or other dealings in the Software.

For inquiries regarding licensing, please contact Zain Allaudin.

email: zainallaudin007@gmail.com
