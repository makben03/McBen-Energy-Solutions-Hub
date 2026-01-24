const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 10000;

// Allow the server to read JSON data
app.use(express.json());

// FORCE the server to serve all files in the main folder (images, css, js)
app.use(express.static(path.join(__dirname))); 

/* ==========================================
   NEW: STATIC FILE RECOVERY (LOGO & CSS FIX)
   Ensures logo.png and style.css are always found
   ========================================== */
app.get('/logo.png', (req, res) => {
    res.sendFile(path.join(__dirname, 'logo.png'));
});

app.get('/style.css', (req, res) => {
    res.sendFile(path.join(__dirname, 'style.css'));
});

// Route for the Home Page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Route for the Contact Page (fixes your contact.html link)
app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'contact.html'));
});

// API for the Contact Form
app.post('/api/contact', (req, res) => {
    // Log the data to the Render console for your verification
    console.log("Mission Brief Data:", req.body);
    res.json({ status: "Success", message: "Transmission Received." });
});

app.listen(PORT, () => {
    console.log(`McBen Server live on port ${PORT}`);
});
