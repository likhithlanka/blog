# Notion Page Host

A simple web application that displays your Notion page in an iframe with 0.8% zoom level.

## Features

- Clean, responsive design
- 0.8x zoom level for better readability
- Loading and error states
- Mobile-friendly
- Easy configuration

## Setup

1. **Configure your Notion page URL**:
   - Open `script.js`
   - Replace `'https://your-notion-page-url-here.com'` with your actual Notion page URL
   - Make sure your Notion page is publicly accessible

2. **Open the application**:
   - Open `index.html` in your web browser
   - Or use a local server for better development experience

## Making your Notion page public

1. Open your Notion page
2. Click "Share" in the top right corner
3. Toggle "Share to web" on
4. Copy the public URL
5. Use this URL in the `script.js` file

## Local Development

For local development with live reload, you can use a simple HTTP server:

### Using Python:
```bash
python -m http.server 8000
```

### Using Node.js (http-server):
```bash
npx http-server
```

### Using Live Server (VS Code extension):
- Install the "Live Server" extension
- Right-click on `index.html` and select "Open with Live Server"

## Deployment

### GitHub Pages
1. Create a new repository on GitHub
2. Upload all files to the repository
3. Go to Settings > Pages
4. Select "Deploy from a branch" and choose "main"
5. Your site will be available at `https://username.github.io/repository-name`

### Netlify
1. Drag and drop the project folder to [Netlify Drop](https://app.netlify.com/drop)
2. Your site will be deployed instantly

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project directory
3. Follow the prompts

## File Structure

```
NotionHost/
├── index.html      # Main HTML file
├── styles.css      # Styles with 0.8x zoom configuration
├── script.js       # JavaScript for iframe handling
└── README.md       # This file
```

## Customization

### Changing the zoom level
To change the zoom level, modify the CSS in `styles.css`:

```css
#notion-iframe {
    transform: scale(0.8); /* Change 0.8 to your desired zoom level */
    width: 125%; /* Adjust width accordingly (100/zoom_level)% */
    height: 125%; /* Adjust height accordingly (100/zoom_level)% */
}
```

### Styling
You can customize the appearance by modifying `styles.css`. The current design uses a clean, minimal approach.

## Troubleshooting

- **Blank page**: Make sure your Notion page is public and the URL is correct
- **"Refused to display" error**: Some Notion pages may not allow embedding due to security policies
- **Loading issues**: Check your internet connection and try refreshing the page

## License

This project is open source and available under the [MIT License](LICENSE).
