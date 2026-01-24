const express = require('express');
const path = require('path');
const app = express();

// Render provides the PORT, or we use 10000 as a backup
const PORT = process.env.PORT || 10000;

app.use(express.json());

// 1. Tell the server to serve all files (CSS, Images, JS) from the root folder
app.use(express.static(__dirname));

// 2. Tell the server to specifically show index.html when people visit the main URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// 3. Your Contact API for the form to talk to
app.post('/api/contact', (req, res) => {
    console.log("Mission Brief Received:", req.body);
    res.status(200).json({ message: "MESSAGE RECEIVED BY MCBEN ENERGY HUB" });
});

app.listen(PORT, () => {
    console.log(`McBen Energy Server live on port ${PORT}`);
});
