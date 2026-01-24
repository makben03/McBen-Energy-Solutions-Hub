const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;

// Serve your static website files (HTML, CSS, Images)
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// A simple API route for your Contact Form
app.post('/api/contact', (req, res) => {
    // This is where you would send emails or save to a database
    console.log("Mission Brief Received!");
    res.json({ status: "Success", message: "Transmission Received by McBen Energy." });
});

app.listen(PORT, () => {
    console.log(`McBen Server is running on port ${PORT}`);
});