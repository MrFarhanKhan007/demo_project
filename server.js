import express from 'express';
import { join } from 'path';
import { readFileSync } from 'fs';
var app = express();

app.get('/', function (req, res) {
});

res.sendFile(join(__dirname, "index.html"));
I
app.get('/profile-picture', function (req, res) {
    var img = readFileSync('profile-1.jpg');
    res.writeHead(200, { 'Content-Type': 'image/jpg' }); res.end(img, 'binary');
});

app.listen(3000, function () {
    console.log("app listening on port 3000!");
});