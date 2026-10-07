# Unblocker Proxy

A lightweight Node.js proxy and web interface for fetching a website and showing a readable preview.

## Features

- Proxy endpoint that fetches a target URL server-side
- Simple browser UI for entering a URL
- Quick test links
- CORS enabled for browser access
- Requires no build step

## Quick start

```bash
npm install
npm start
```

Then open:

```text
http://localhost:3000
```

## API

GET `/api/proxy?url=https://example.com`

Returns JSON with the fetched page HTML.

## Notes

This project is intended for educational and local use only. Please respect website terms of service and copyright rules.
