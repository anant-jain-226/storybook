# astro-ui
Component library + Storybook for the astrologer marketplace.

## Setup
npm install   # all dev dependencies are already listed in package.json
npm run storybook     # develop components in isolation
npm run build         # outputs dist/astro-ui.js + dist/style.css

## Adding a component
1. src/components/<Name>/{Name.jsx, Name.css, Name.stories.jsx}
2. Export it from src/index.js
3. Rebuild (or run `npm run dev`) so the app picks it up
