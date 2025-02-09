const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 2004;  // Changed the default port to 2004


// Serve static files (HTML, CSS, JS, images)
app.use(express.static("public"));

// Custom middleware for request logging
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});

// Main route
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Cart page
app.get("/cart", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "cart.html"));
});

// Hidden CTF challenge endpoint
app.get("/secret", (req, res) => {
    res.json({ 
        flag: "expX{W3l!_D0n3_Y0u_G0t_fl@g}",
        message: "Well done! You found the hidden flag!"
    });
});

// 404 handler
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, "public", "404.html"));
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error("Server error:", err.stack);
    res.status(500).send("Internal Server Error");
});

app.listen(PORT, () => {
    console.log(`\n🚀 CTF running at http://localhost:${PORT}`);
    console.log("🔍 CTF challenge is live!.");
});
