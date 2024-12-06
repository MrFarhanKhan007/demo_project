import express from 'express';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { readFileSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// Route for the homepage
app.get('/', function (req, res) {
    res.sendFile(join(__dirname, "index.html")); // Serve the HTML file
});

// Route for serving profile picture
app.get('Screenshot (16).png', function (req, res) {
    try {
        const img = readFileSync('Screenshot (16).png'); // Ensure the file exists
        res.writeHead(200, { 'Content-Type': 'image/jpg' });
        res.end(img, 'binary'); // Send the image
    } catch (error) {
        console.error("Error reading profile-1.jpg:", error.message);
        res.status(500).send("Could not load the image.");
    }
});

// Start the server
app.listen(3000, function () {
    console.log("App listening on http://localhost:3000!");
});
