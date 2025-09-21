# Vercel Deployment Guide

This guide will help you deploy the Chat Search Application to Vercel in just a few minutes.

## Prerequisites

- A GitHub account
- A Vercel account (free at [vercel.com](https://vercel.com))
- Your Alexa360 API key

## Method 1: One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/chat-search-app)

1. Click the "Deploy with Vercel" button above
2. Sign in to Vercel with your GitHub account
3. Vercel will automatically detect the configuration
4. Click "Deploy" and wait for deployment to complete
5. Your app will be live at `https://your-app-name.vercel.app`

## Method 2: Manual Deployment

### Step 1: Prepare Your Repository

1. **Fork this repository** to your GitHub account
2. **Clone locally** (optional, for customizations):
   ```bash
   git clone https://github.com/yourusername/chat-search-app.git
   cd chat-search-app
   ```

### Step 2: Deploy to Vercel

#### Option A: Using Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

#### Option B: Using Vercel Dashboard
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Vercel will auto-detect the configuration
5. Click "Deploy"

### Step 3: Configure Your App

1. **Set Environment Variables** (if needed):
   - Go to your project dashboard
   - Navigate to Settings > Environment Variables
   - Add any required variables

2. **Custom Domain** (optional):
   - Go to Settings > Domains
   - Add your custom domain
   - Follow the DNS configuration instructions

## Configuration Files

The following files are specifically configured for Vercel:

- `vercel.json` - Vercel configuration
- `api/proxy.js` - Serverless function for CORS proxy
- `search_vercel.html` - Vercel-optimized frontend
- `js/inline_scripts_vercel.js` - Vercel-compatible JavaScript
- `package.json` - Node.js dependencies

## How It Works

1. **Frontend**: Served as static files from Vercel's CDN
2. **API Proxy**: Runs as a serverless function at `/api/proxy`
3. **CORS Handling**: The proxy function handles CORS for API calls
4. **Global CDN**: Your app is served from Vercel's global network

## Features

- ✅ **Zero Configuration**: Works out of the box
- ✅ **Automatic HTTPS**: SSL certificates included
- ✅ **Global CDN**: Fast loading worldwide
- ✅ **Serverless**: No server management needed
- ✅ **Auto-scaling**: Handles traffic spikes automatically
- ✅ **Preview Deployments**: Test changes before going live

## Customization

### Adding Custom Domain
1. Go to your Vercel project dashboard
2. Navigate to Settings > Domains
3. Add your domain
4. Configure DNS as instructed
5. Wait for SSL certificate (automatic)

### Environment Variables
If you need to store sensitive data:
1. Go to Settings > Environment Variables
2. Add your variables
3. Use them in your code with `process.env.VARIABLE_NAME`

### Custom Build Settings
Modify `vercel.json` for custom configurations:
```json
{
  "version": 2,
  "builds": [
    {
      "src": "api/proxy.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/api/proxy",
      "dest": "/api/proxy.js"
    }
  ]
}
```

## Troubleshooting

### Common Issues

**"Function timeout"**
- The default timeout is 10 seconds
- Increase in `vercel.json` if needed

**"CORS errors"**
- Check that `/api/proxy` is working
- Verify the proxy function is deployed

**"API key not working"**
- Ensure API key is valid
- Check that the proxy is forwarding requests correctly

### Getting Help

1. Check Vercel's [documentation](https://vercel.com/docs)
2. Visit the [Vercel community](https://github.com/vercel/vercel/discussions)
3. Check your deployment logs in the Vercel dashboard

## Cost

- **Free Tier**: 100GB bandwidth, 1000 serverless function invocations
- **Pro Tier**: $20/month for higher limits
- **Enterprise**: Custom pricing for large deployments

## Next Steps

1. **Test your deployment**: Visit your Vercel URL
2. **Add your API key**: Enter it in the app interface
3. **Customize**: Modify the code as needed
4. **Monitor**: Use Vercel's analytics dashboard

Your Chat Search Application is now live on Vercel! 🎉
