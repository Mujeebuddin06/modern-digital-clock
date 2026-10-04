<div align="center">

# ⏱️ Modern Digital Clock

A clean, glassmorphic digital clock built with plain HTML, CSS and JavaScript.
No frameworks, no build step, no dependencies.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)

<!-- Add a screenshot or GIF here: ![Preview](./preview.png) -->

</div>

---

## Features

- **Live 12-hour clock** with seconds and an AM/PM indicator
- **Current date** formatted for the user's locale settings (US English by default)
- **Glassmorphism card** with backdrop blur over a dusk gradient background
- **Neon display type** using Orbitron for the digits and Poppins for the date
- **Drift-free timing**: each update re-syncs to the next whole second
- **Responsive**: type and padding scale smoothly from phones to desktops
- **Semantic markup** using a real `<time>` element
- **Zero dependencies**: just three files

## Getting started

Clone the repository and open the page:

```bash
git clone https://github.com/<your-username>/<your-repo>.git
cd <your-repo>
```

Then either double-click `index.html`, or serve the folder locally:

```bash
# Python
python3 -m http.server 8000

# or Node
npx serve .
```

Visit `http://localhost:8000`.

> The Google Fonts stylesheet needs an internet connection. Offline, the clock falls back to system fonts.

## Project structure

```
.
├── index.html   # Markup
├── style.css    # Styles and theme variables
└── script.js    # Clock logic
```

## Customization

All colors and fonts are CSS variables at the top of `style.css`:

```css
:root {
  --bg-top: #2b1055;
  --bg-mid: #4a1d6e;
  --bg-bottom: #12082b;
  --glow: rgba(255, 120, 150, 0.28);
  --digits: #00fff5;
  --accent: #ff4d8d;
}
```

**Switch to a 24-hour clock** in `script.js` by replacing the hours line:

```js
els.hours.textContent = pad(h);
```

and hiding the `.clock__period` element.

**Change the date format** by editing the options passed to `Intl.DateTimeFormat`:

```js
const dateFormat = new Intl.DateTimeFormat("en-US", {
  weekday: "long", month: "long", day: "numeric", year: "numeric",
});
```

## Browser support

Works in all current versions of Chrome, Edge, Firefox and Safari. The blur effect relies on `backdrop-filter`; browsers without it simply show a flat translucent card.

## Contributing

Issues and pull requests are welcome. For larger changes, please open an issue first to discuss what you'd like to change.

## License

Released under the [MIT License](./LICENSE). Add a `LICENSE` file to your repository if you don't have one yet.
