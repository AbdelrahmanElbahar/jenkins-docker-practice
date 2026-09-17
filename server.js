const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });

    res.end(`
        <html>
            <head>
                <title>Jenkins CI/CD Practice</title>
            </head>
            <body>
                <h1>Hello from my Jenkins CI/CD project!</h1>
                <p>This application is running inside Docker.</p>
            </body>
        </html>
    `);
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});