const LANDING_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Xeno - Access Portal</title>
    <link rel="icon" type="image/png" href="https://xeno.now/xeno.png">
    <style>
        :root {
            --primary: #8b5cf6;
            --primary-hover: #a78bfa;
            --bg-color: #000000;
            --surface: rgba(15, 15, 15, 0.85);
            --border: rgba(255, 255, 255, 0.08);
            --text-main: #f0f0f0;
            --text-muted: #777777;
        }

        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
        }

        body {
            background-color: var(--bg-color);
            background-image: 
                radial-gradient(at 0% 0%, rgba(139, 92, 246, 0.08) 0px, transparent 50%),
                radial-gradient(at 100% 100%, rgba(139, 92, 246, 0.06) 0px, transparent 50%);
            background-attachment: fixed;
            color: var(--text-main);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
        }

        .orb {
            position: absolute;
            border-radius: 50%;
            filter: blur(100px);
            z-index: -1;
            opacity: 0.3;
            animation: float 20s infinite ease-in-out alternate;
        }

        .orb-1 {
            width: 300px;
            height: 300px;
            background: rgba(139, 92, 246, 0.35);
            top: 20%;
            left: 20%;
        }

        .orb-2 {
            width: 350px;
            height: 350px;
            background: rgba(139, 92, 246, 0.25);
            bottom: 10%;
            right: 15%;
            animation-delay: -5s;
        }

        @keyframes float {
            0% { transform: translate(0, 0) scale(1); }
            50% { transform: translate(50px, 30px) scale(1.1); }
            100% { transform: translate(-20px, 60px) scale(0.9); }
        }

        .container {
            background: var(--surface);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border: 1px solid var(--border);
            border-radius: 24px;
            padding: 3rem;
            width: 90%;
            max-width: 440px;
            text-align: center;
            box-shadow: 0 25px 60px -12px rgba(0, 0, 0, 0.8);
            transform: translateY(20px);
            opacity: 0;
            animation: popIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes popIn {
            to {
                transform: translateY(0);
                opacity: 1;
            }
        }

        .logo {
            width: 80px;
            height: 80px;
            border-radius: 20px;
            margin: 0 auto 1.5rem;
            object-fit: contain;
            filter: drop-shadow(0 8px 20px rgba(139, 92, 246, 0.25));
        }

        h1 {
            font-size: 2rem;
            font-weight: 700;
            margin-bottom: 0.5rem;
            letter-spacing: -0.025em;
        }

        p {
            color: var(--text-muted);
            margin-bottom: 2.5rem;
            line-height: 1.6;
            font-size: 1.05rem;
        }

        .load-btn {
            background: var(--primary);
            color: white;
            border: none;
            padding: 1rem 2rem;
            font-size: 1.1rem;
            font-weight: 600;
            border-radius: 12px;
            cursor: pointer;
            width: 100%;
            transition: all 0.2s ease;
            position: relative;
            overflow: hidden;
            box-shadow: 0 4px 14px 0 rgba(139, 92, 246, 0.39);
        }

        .load-btn:hover {
            background: var(--primary-hover);
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(139, 92, 246, 0.5);
        }

        .load-btn:active {
            transform: translateY(0);
        }

        .load-btn.loading {
            color: transparent;
            pointer-events: none;
        }

        .load-btn.loading::after {
            content: "";
            position: absolute;
            width: 20px;
            height: 20px;
            top: 50%;
            left: 50%;
            margin-top: -10px;
            margin-left: -10px;
            border: 3px solid rgba(255,255,255,0.3);
            border-top-color: white;
            border-radius: 50%;
            animation: spin 0.8s linear infinite;
        }

        @keyframes spin {
            to { transform: rotate(360deg); }
        }

        .footer {
            margin-top: 2rem;
            font-size: 0.85rem;
            color: rgba(255, 255, 255, 0.2);
        }
    </style>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap" rel="stylesheet">
</head>
<body>
    <div class="orb orb-1"></div>
    <div class="orb orb-2"></div>
    <div class="container">
        <img src="https://xeno.now/xeno.png" alt="Xeno" class="logo">
        <h1>Access Xeno</h1>
        <p>You are about to enter Xeno through a secure proxy.</p>
        <button class="load-btn" id="loadBtn" onclick="initProxy()">
            Load Xeno.now
        </button>
        <div class="footer">
            made by dert &bull; Uses Vercel Edge Network
        </div>
    </div>
    <script>
        function initProxy() {
            const btn = document.getElementById('loadBtn');
            btn.classList.add('loading');
            document.cookie = "xeno_proxy=active; path=/; max-age=31536000;";
            setTimeout(() => {
                window.location.reload();
            }, 800);
        }
    </script>
</body>
</html>`;

// MIME type map for common file extensions
const MIME_TYPES = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'application/javascript',
    '.mjs': 'application/javascript',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.webp': 'image/webp',
    '.woff': 'font/woff',
    '.woff2': 'font/woff2',
    '.ttf': 'font/ttf',
    '.otf': 'font/otf',
    '.mp4': 'video/mp4',
    '.webm': 'video/webm',
    '.mp3': 'audio/mpeg',
    '.wav': 'audio/wav',
    '.pdf': 'application/pdf',
    '.xml': 'application/xml',
    '.txt': 'text/plain',
    '.map': 'application/json',
    '.wasm': 'application/wasm',
};

function getMimeFromPath(urlPath) {
    const ext = (urlPath.match(/\.[a-zA-Z0-9]+(?:\?|$)/) || [''])[0].replace('?', '');
    return MIME_TYPES[ext.toLowerCase()] || null;
}

// External domains to also proxy through
const PROXIED_DOMAINS = [
    'linkvertise.com',
    'www.linkvertise.com',
    'lootlabs.gg',
    'www.lootlabs.gg',
    'lootdest.org',
    'www.lootdest.org',
    'lootdest.com',
    'www.lootdest.com',
    'work.ink',
    'www.work.ink',
    'loot-link.com',
    'www.loot-link.com',
];

// Rewrite HTML to route external links through the proxy
function rewriteHtml(html) {
    let result = html;
    for (const domain of PROXIED_DOMAINS) {
        result = result.replaceAll(`https://${domain}/`, `/__ext/${domain}/`);
        result = result.replaceAll(`http://${domain}/`, `/__ext/${domain}/`);
        result = result.replaceAll(`https://${domain}"`, `/__ext/${domain}/"`);
        result = result.replaceAll(`http://${domain}"`, `/__ext/${domain}/"`);
    }
    return result;
}

// Client-side script injected into every HTML page to intercept JS-generated links
const INTERCEPT_SCRIPT = `<script>
(function() {
    const DOMAINS = ${JSON.stringify(PROXIED_DOMAINS)};

    function rewriteUrl(url) {
        try {
            const u = new URL(url, window.location.origin);
            for (const d of DOMAINS) {
                if (u.hostname === d || u.hostname === 'www.' + d) {
                    return '/__ext/' + u.hostname + u.pathname + u.search + u.hash;
                }
            }
        } catch(e) {}
        return null;
    }

    // Intercept all link clicks
    document.addEventListener('click', function(e) {
        const a = e.target.closest('a');
        if (!a || !a.href) return;
        const rewritten = rewriteUrl(a.href);
        if (rewritten) {
            e.preventDefault();
            e.stopPropagation();
            if (a.target === '_blank') {
                window.open(rewritten, '_blank');
            } else {
                window.location.href = rewritten;
            }
        }
    }, true);

    // Override window.open
    const origOpen = window.open.bind(window);
    window.open = function(url, target, features) {
        if (url) {
            const rewritten = rewriteUrl(url);
            if (rewritten) return origOpen(rewritten, target, features);
        }
        return origOpen(url, target, features);
    };

    // Override location assignment
    const origAssign = window.location.assign.bind(window.location);
    const origReplace = window.location.replace.bind(window.location);
    window.location.assign = function(url) {
        const rewritten = rewriteUrl(url);
        return origAssign(rewritten || url);
    };
    window.location.replace = function(url) {
        const rewritten = rewriteUrl(url);
        return origReplace(rewritten || url);
    };

    // Rewrite href attributes on dynamically added links
    new MutationObserver(function(mutations) {
        for (const m of mutations) {
            for (const node of m.addedNodes) {
                if (node.nodeType !== 1) continue;
                const anchors = node.tagName === 'A' ? [node] : node.querySelectorAll ? node.querySelectorAll('a[href]') : [];
                for (const a of anchors) {
                    if (!a.href) continue;
                    const rewritten = rewriteUrl(a.href);
                    if (rewritten) a.href = rewritten;
                }
            }
        }
    }).observe(document.documentElement, { childList: true, subtree: true });
})();
</script>`;

async function proxyRequest(targetUrl, req, res, referer) {
    const response = await fetch(targetUrl, {
        method: req.method,
        headers: {
            'User-Agent': req.headers['user-agent'] || '',
            'Accept': req.headers['accept'] || '*/*',
            'Accept-Language': req.headers['accept-language'] || '',
            'Referer': referer,
        },
        redirect: 'follow',
    });

    const contentType = response.headers.get('content-type') || getMimeFromPath(targetUrl);
    if (contentType) res.setHeader('Content-Type', contentType);

    const cacheControl = response.headers.get('cache-control');
    if (cacheControl) res.setHeader('Cache-Control', cacheControl);

    // If response is HTML, rewrite links + inject client-side interceptor
    if (contentType && contentType.includes('text/html')) {
        let html = await response.text();
        html = rewriteHtml(html);
        // Inject interceptor script right after <head> tag
        html = html.replace(/<head([^>]*)>/i, `<head$1>${INTERCEPT_SCRIPT}`);
        return res.status(response.status).send(html);
    }

    const body = Buffer.from(await response.arrayBuffer());
    return res.status(response.status).send(body);
}

export default async function handler(req, res) {
    // Parse cookies
    const cookies = {};
    (req.headers.cookie || '').split(';').forEach(c => {
        const [key, ...rest] = c.trim().split('=');
        if (key) cookies[key] = rest.join('=');
    });

    // No cookie = show landing page
    if (cookies.xeno_proxy !== 'active') {
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.setHeader('Cache-Control', 'public, max-age=3600');
        return res.status(200).send(LANDING_HTML);
    }

    try {
        // Get original path from the __path query param injected by vercel.json rewrite
        const originalPath = req.query.__path || '';
        const path = originalPath ? `/${originalPath}` : '/';

        // Rebuild query string without our internal __path param
        const queryString = Object.entries(req.query)
            .filter(([key]) => key !== '__path')
            .map(([key, val]) => `${encodeURIComponent(key)}=${encodeURIComponent(val)}`)
            .join('&');
        const qs = queryString ? '?' + queryString : '';

        // Check if this is an external domain proxy request: /__ext/domain.com/path
        const extMatch = path.match(/^\/__ext\/([^/]+)(\/.*)?$/);
        if (extMatch) {
            const extDomain = extMatch[1];
            const extPath = extMatch[2] || '/';
            const targetUrl = `https://${extDomain}${extPath}${qs}`;
            return await proxyRequest(targetUrl, req, res, `https://${extDomain}/`);
        }

        // Default: proxy to xeno.now
        const targetUrl = `https://xeno.now${path}${qs}`;
        return await proxyRequest(targetUrl, req, res, 'https://xeno.now/');
    } catch (err) {
        return res.status(502).send('Proxy error: ' + err.message);
    }
}
