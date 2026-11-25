# Burlington Railways

Info website for a fictional Minecraft railway.

## Files

- `index.html`: page structure
- `style.css`: styling, plus the embedded logos and the checkerboard background (no separate image files needed)
- `data.js`: **all the content**: edit this to change lines, stations, fleet, and so on
- `main.js`: builds the page from `data.js`

## Publish on GitHub Pages

1. Create a new repository on GitHub (for example `burlington-railways`).
2. Upload all of these files.
3. Go to **Settings > Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, then Save.
5. After a minute or two, your site will be live at `https://YOUR-USERNAME.github.io/burlington-railways/`.

## Preview locally

Open `index.html` in a browser, or run `python3 -m http.server` in this folder and visit `http://localhost:8000`.
