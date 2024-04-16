const express = require('express');
const bodyParser = require('body-parser');
const { Client } = require('basic-ftp');

const app = express();
const port = 3000; // You can use any port that's open on your server

app.use(bodyParser.json());

// Serve your static files (HTML, CSS, JS)
app.use(express.static('public'));

// Endpoint to handle FTP connections
app.post('/connect', async (req, res) => {
    const { host, username, password, port } = req.body;
    const client = new Client();

    try {
        await client.access({
            host,
            user: username,
            password,
            port
        });
        console.log(`Connected to ${host}`);

        // Listing files in the current directory
        await client.ensureDir("/")
        const fileList = await client.list();
        console.log(fileList);

        await client.close();
        res.json({ success: true, message: `Successfully connected to ${host}`, files: fileList });
    } catch (error) {
        console.log(`Connection failed: ${error.message}`);
        res.status(500).json({ success: false, message: error.message });
    }
});

app.listen(port, () => {
    console.log(`FTP Client server running at http://localhost:${port}`);
});
