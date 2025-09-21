# Chat Search Application

A web application for searching chat conversations from the Alexa360 API.

## Features

- 🔐 **Dynamic API Key Management**: Secure API key entry with local storage
- 🔍 **Live Keyword Search**: Real-time search across conversations
- 📅 **Date Range Filtering**: Search within specific time periods
- 🤖 **Bot Message Inclusion**: Option to include/exclude bot messages
- 📄 **Pagination**: Navigate through large result sets
- 🎨 **Modern UI**: Beautiful, responsive design with Bootstrap 5
- 🐳 **Docker Ready**: Easy deployment with Docker and Docker Compose
- 🌐 **Multi-Language**: Support for 11 languages
- 🔒 **Secure**: API keys stored locally, never sent to external servers

## Getting Started

### Option 1: Vercel Deployment (Recommended for Web)

#### Quick Deploy to Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to Vercel
vercel

# Deploy with production settings
vercel --prod
```

#### Manual Vercel Setup
1. **Fork/Clone** this repository
2. **Connect to Vercel**: Go to [vercel.com](https://vercel.com) and import your repository
3. **Configure**: Vercel will automatically detect the configuration
4. **Deploy**: Click "Deploy" and your app will be live!

#### Vercel Configuration Files
- `vercel.json` - Vercel configuration
- `api/proxy.js` - Serverless function for CORS proxy
- `search_vercel.html` - Vercel-optimized frontend
- `js/inline_scripts_vercel.js` - Vercel-compatible JavaScript

### Option 2: Docker Deployment

#### Quick Start with Docker
```bash
# Build and run with Docker Compose
docker-compose up --build

# Or run in background
docker-compose up -d --build

# View logs
docker-compose logs -f

# Stop the application
docker-compose down
```

#### Production Deployment
```bash
# Use production configuration
docker-compose -f docker-compose.prod.yml up -d --build

# Scale the application (if needed)
docker-compose -f docker-compose.prod.yml up -d --scale chat-search-app=2
```

#### Docker Commands
```bash
# Build the image
docker build -t chat-search-app .

# Run the container
docker run -p 8000:8000 -p 3000:3000 chat-search-app

# Run in background
docker run -d -p 8000:8000 -p 3000:3000 --name chat-search chat-search-app

# View logs
docker logs -f chat-search

# Stop and remove
docker stop chat-search && docker rm chat-search
```

### Option 2: Manual Setup

### 1. Start the Servers

The application requires two servers to run:

#### Web Server (Port 8000)
```bash
# Option 1: PowerShell Web Server (Windows)
powershell -ExecutionPolicy Bypass -File start-server.ps1

# Option 2: Node.js Web Server
node -e "const http = require('http'); const fs = require('fs'); const path = require('path'); const server = http.createServer((req, res) => { let filePath = req.url === '/' ? '/search.html' : req.url; filePath = path.join(__dirname, filePath); const ext = path.extname(filePath); const contentType = { '.html': 'text/html', '.css': 'text/css', '.js': 'application/javascript', '.png': 'image/png', '.jpg': 'image/jpeg' }[ext] || 'text/plain'; fs.readFile(filePath, (err, data) => { if (err) { res.writeHead(404); res.end('File not found'); } else { res.writeHead(200, { 'Content-Type': contentType }); res.end(data); } }); }); server.listen(8000, () => console.log('Server running on http://localhost:8000'));"

# Option 3: Python Web Server (if Python is installed)
python -m http.server 8000
```

#### Proxy Server (Port 3000)
```bash
# Start the CORS proxy server
node proxy-server.js

# Or use the batch file (Windows)
start-proxy.bat
```

### 2. Access the Application

1. Open your browser and go to `http://localhost:8000/search.html`
2. Enter your API key when prompted (stored securely in your browser)
3. Start searching conversations immediately

## API Key Setup

### How to Get Your API Key

1. **Go to Dashboard**: Navigate to your main dashboard
2. **Click Profile Icon**: Click the icon on the top right corner
3. **Select API Keys**: Click on "API Keys" from the menu
4. **Create API Token**: Click "Create API Token"
5. **Add Name & Permissions**: Add a name and click "Assign All Abilities"
6. **Choose Workspace & Bot**: Select your workspace and bot
7. **Create & Copy**: Click "Create" and copy the API Key

### Security Features

- ✅ API keys are stored locally in your browser
- ✅ Keys are never sent to third-party servers
- ✅ Option to change API key at any time
- ✅ Demo mode available for testing (limited functionality)

## File Structure

```
├── search.html             # Main search interface (single-page app)
├── proxy-server.js        # CORS proxy server
├── start-server.ps1       # PowerShell web server
├── start-proxy.bat        # Proxy server launcher
├── js/
│   └── inline_scripts.js  # Main application logic
├── css/
│   └── inline_styles.css  # Application styles
└── img/
    └── logo.png           # Application logo
```

## Usage

### Basic Search
1. Enter a User NS (required)
2. Set date range (optional)
3. Choose results per page
4. Click "Search Conversations"

### Live Keyword Search
1. Perform a basic search first
2. Type keywords in the "Live Keyword Search" field
3. Results will filter in real-time

### API Key Management
- Enter API key directly in the search interface
- Key is stored securely in your browser's local storage
- Option to change or remove API key at any time
- Demo mode available for testing (limited functionality)

## Troubleshooting

### Common Issues

**"Python is not recognized"**
- Use the PowerShell web server instead: `powershell -ExecutionPolicy Bypass -File start-server.ps1`

**"422: The limit must be between 1 and 100"**
- This has been fixed in the latest version
- The Live Keyword Search now uses the correct limit

**CORS Errors**
- Make sure the proxy server is running on port 3000
- Use the local proxy test page for debugging

**API Key Issues**
- Ensure your API key is valid and has proper permissions
- Check that you've assigned all abilities to the API key
- Verify the workspace and bot selection

### Server Status Check
```bash
# Check if servers are running
netstat -an | Select-String ":3000|:8000"
```

## Deployment Options

### Docker Deployment
- **Development**: Use `docker-compose up --build`
- **Production**: Use `docker-compose -f docker-compose.prod.yml up -d --build`
- **Cloud**: Deploy to AWS ECS, Google Cloud Run, Azure Container Instances
- **VPS**: Deploy to any VPS with Docker support

### Manual Deployment
- **VPS/Server**: Upload files and run with Node.js + Python
- **Shared Hosting**: Upload static files (requires CORS proxy elsewhere)
- **Local Development**: Use the provided PowerShell/Python scripts

### Cloud Platforms
- **Vercel**: Serverless deployment (Recommended) - Zero configuration, automatic HTTPS, global CDN
- **AWS**: ECS, Fargate, or EC2 with Docker
- **Google Cloud**: Cloud Run or Compute Engine
- **Azure**: Container Instances or App Service
- **DigitalOcean**: Droplet with Docker
- **Linode**: Linode with Docker

### Vercel Benefits
- ✅ **Zero Configuration**: Deploy with a single command
- ✅ **Automatic HTTPS**: SSL certificates included
- ✅ **Global CDN**: Fast loading worldwide
- ✅ **Serverless Functions**: No server management needed
- ✅ **Automatic Scaling**: Handles traffic spikes
- ✅ **Custom Domains**: Easy domain setup
- ✅ **Preview Deployments**: Test before going live

## Development

### Adding New Features
1. Modify `js/inline_scripts.js` for functionality
2. Update `css/inline_styles.css` for styling
3. Test with both real API and demo mode
4. Rebuild Docker image: `docker-compose up --build`

### API Integration
- The application uses multiple CORS proxy fallbacks
- API calls are made through the local proxy server
- Error handling includes specific messages for different API errors

## License

This application is for internal use with the Alexa360 platform.
