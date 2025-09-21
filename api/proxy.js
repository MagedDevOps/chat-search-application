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
        
        // Prepare request options
        const options = {
            hostname: parsedUrl.hostname,
            port: parsedUrl.port || (parsedUrl.protocol === 'https:' ? 443 : 80),
            path: parsedUrl.pathname + parsedUrl.search,
            method: req.method,
            headers: {
                'User-Agent': 'Chat-Search-App/1.0',
                'Accept': 'application/json'
            }
        };
        
        // Add authorization header if present
        if (req.headers.authorization) {
            options.headers['Authorization'] = req.headers.authorization;
        }
        
        console.log('Request options:', options);
        
        // Make the request
        const protocol = getProtocol(parsedUrl.protocol);
        console.log('Using protocol:', parsedUrl.protocol);
        
        let proxyReq;
        try {
            proxyReq = protocol.request(options, (proxyRes) => {
            console.log('Proxy response received:', { statusCode: proxyRes.statusCode, headers: proxyRes.headers });
            
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
                console.error('Error details:', {
                    code: error.code,
                    errno: error.errno,
                    syscall: error.syscall,
                    hostname: error.hostname
                });
                res.status(500).json({ 
                    error: 'Proxy request failed', 
                    message: error.message,
                    code: error.code
                });
            });
            
            // Handle timeout
            proxyReq.setTimeout(30000, () => {
                proxyReq.destroy();
                res.status(504).json({ error: 'Request timeout' });
            });
            
            proxyReq.end();
        } catch (requestError) {
            console.error('Request creation error:', requestError);
            res.status(500).json({ 
                error: 'Request creation failed', 
                message: requestError.message 
            });
            return;
        }
        
    } catch (error) {
        console.error('Handler error:', error);
        res.status(500).json({ 
            error: 'Internal server error', 
            message: error.message 
        });
    }
}
