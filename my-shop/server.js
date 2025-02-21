const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse incoming JSON bodies
app.use(express.json());

// Serve static files (frontend) from "public" folder
app.use(express.static('public'));

// Simple route for testing
app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello from the server!' });
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
