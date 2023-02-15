Features:

- I included tailwindcss within app-shell and pilet.
- The App uses translations from resx-files (like a standard Blazor WASM app).

Problems:

- When I navigate to `http://localhost:1234/start` I can switch to other Languages than the initial `de` but the translated value is not displayed.
- When executing a page reload on `http://localhost:1234/start` the german translation also doesn't work any more.