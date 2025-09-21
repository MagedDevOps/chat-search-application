const https = require('https');
const http = require('http');
const { URL } = require('url');

// Enable CORS for all requests
function setCORSHeaders(res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With');
    res.setHeader('Access-Control-Max-Age', '86400');
}

// Parse URL and determine protocol
function getProtocol(url) {
    return url.startsWith('https:') ? https : http;
}

// Main handler function
module.exports = async function handler(req, res) {
    console.log('Proxy handler called:', { method: req.method, query: req.query, headers: req.headers });
    
    // Set CORS headers
    setCORSHeaders(res);
    
    // Handle preflight requests
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }
    
    // Only allow GET and POST requests
    if (req.method !== 'GET' && req.method !== 'POST') {
        res.status(405).json({ error: 'Method not allowed' });
        return;
    }
    
    try {
        // Get the target URL from query parameters
        const targetUrl = req.query.url;
        console.log('Target URL:', targetUrl);
        
        if (!targetUrl) {
            console.log('No target URL provided');
            res.status(400).json({ error: 'Missing target URL parameter' });
            return;
        }
        
        // Validate URL
        let parsedUrl;
        try {
            parsedUrl = new URL(targetUrl);
            console.log('Parsed URL:', parsedUrl);
        } catch (error) {
            console.log('URL parsing error:', error.message);
            res.status(400).json({ error: 'Invalid URL format' });
            return;
        }
        
        // Only allow HTTPS URLs for security
        if (parsedUrl.protocol !== 'https:') {
            console.log('Non-HTTPS URL rejected:', parsedUrl.protocol);
            res.status(400).json({ error: 'Only HTTPS URLs are allowed' });
            return;
        }
        
        // For now, let's just return a test response to see if we get this far
        console.log('About to make request to:', targetUrl);
        res.status(200).json({ 
            message: 'Proxy function working!',
            targetUrl: targetUrl,
            parsedUrl: {
                hostname: parsedUrl.hostname,
                pathname: parsedUrl.pathname,
                search: parsedUrl.search
            }
        });
        
    } catch (error) {
        console.error('Handler error:', error);
        res.status(500).json({ 
            error: 'Internal server error', 
            message: error.message 
        });
    }
}
