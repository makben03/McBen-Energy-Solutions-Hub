const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 10000; // Render uses port 10000 by default

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public'))); // Assumes your HTML/CSS is in a 'public' folder

app.post('/api/contact', (req, res) => {
    console.log("Contact form data:", req.body);
    res.status(200).send({ message: "Message received at McBen Energy Hub!" });
});

app.listen(PORT, () => {
    console.log(`Server active on port ${PORT}`);
});
