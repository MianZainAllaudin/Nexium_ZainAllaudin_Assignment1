# Motivational Quote Generator

## Quote Generator Web App 

A simple Next.js app that generates motivational quotes based on a topic.

---

## Features

- Search for motivational quotes by topic (e.g., "success", "motivation").
- Responsive UI built with [Next.js](https://nextjs.org/) and [React](https://react.dev/).
- Uses static JSON data for quotes.

---

## Project Structure

```
app/
  ├── data/
  │   └── quotes.json         # Quotes data (topics and quotes)
  ├── QuoteGenerator.tsx      # Main quote generator component (client)
  ├── layout.tsx              # App layout and font setup
  └── page.tsx                # Home page (server component)
components/
  └── ui/                     # UI components (Button, Input, Card, etc.)
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

- Enter a topic (e.g., "success", "motivation") in the input field.
- Click **Get Quotes** to see relevant motivational quotes.

---

## Adding/Editing Quotes

- Edit `app/data/quotes.json` to add new topics or quotes.
- Each topic should have a `topic` string and a `quotes` array.

Example:
```json
{
  "topic": "happiness",
  "quotes": [
    "Happiness depends upon ourselves. - Aristotle",
    "For every minute you are angry you lose sixty seconds of happiness. - Ralph Waldo Emerson"
  ]
}
```

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
