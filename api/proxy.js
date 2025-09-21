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
        // Get the target URL from query parameters or body
        let targetUrl = req.query.url;
        
        // If not in query params, try to get from body (for POST requests)
        if (!targetUrl && req.method === 'POST') {
            try {
                const body = JSON.parse(req.body || '{}');
                targetUrl = body.url;
            } catch (e) {
                // Body parsing failed, continue with query param
            }
        }
        
        if (!targetUrl) {
            res.status(400).json({ error: 'Missing target URL parameter' });
            return;
        }
        
        // Validate URL
        let parsedUrl;
        try {
            parsedUrl = new URL(targetUrl);
        } catch (error) {
            res.status(400).json({ error: 'Invalid URL format' });
            return;
        }
        
        // Only allow HTTPS URLs for security
        if (parsedUrl.protocol !== 'https:') {
            res.status(400).json({ error: 'Only HTTPS URLs are allowed' });
            return;
        }
        
        // Prepare request options
        const options = {
            hostname: parsedUrl.hostname,
            port: parsedUrl.port || (parsedUrl.protocol === 'https:' ? 443 : 80),
            path: parsedUrl.pathname + parsedUrl.search,
            method: req.method,
            headers: {
                'User-Agent': 'Chat-Search-App/1.0',
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        };
        
        // Add authorization header if present
        if (req.headers.authorization) {
            options.headers['Authorization'] = req.headers.authorization;
        }
        
        // Add content-type if present
        if (req.headers['content-type']) {
            options.headers['Content-Type'] = req.headers['content-type'];
        }
        
        // Make the request
        const protocol = getProtocol(parsedUrl.protocol);
        
        const proxyReq = protocol.request(options, (proxyRes) => {
            // Set response headers
            res.status(proxyRes.statusCode);
            
            // Copy relevant headers
            const headersToCopy = [
                'content-type',
                'content-length',
                'cache-control',
                'etag',
                'last-modified'
            ];
            
            headersToCopy.forEach(header => {
                if (proxyRes.headers[header]) {
                    res.setHeader(header, proxyRes.headers[header]);
                }
            });
            
            // Pipe the response
            proxyRes.pipe(res);
        });
        
        // Handle errors
        proxyReq.on('error', (error) => {
            console.error('Proxy request error:', error);
            res.status(500).json({ 
                error: 'Proxy request failed', 
                message: error.message 
            });
        });
        
        // Handle timeout
        proxyReq.setTimeout(30000, () => {
            proxyReq.destroy();
            res.status(504).json({ error: 'Request timeout' });
        });
        
        // Send request body for POST requests
        if (req.method === 'POST' && req.body) {
            try {
                const bodyData = typeof req.body === 'string' ? req.body : JSON.stringify(req.body);
                proxyReq.write(bodyData);
            } catch (e) {
                console.error('Error writing request body:', e);
            }
        }
        
        proxyReq.end();
        
    } catch (error) {
        console.error('Handler error:', error);
        res.status(500).json({ 
            error: 'Internal server error', 
            message: error.message 
        });
    }
}
