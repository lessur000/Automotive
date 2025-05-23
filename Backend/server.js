
import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Get current directory path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());

// Serve static files
app.use("/images", express.static(path.join(__dirname, "public", "images")));

app.get("/api/products", (req, res) => {
  fs.readFile("products.json", "utf8", (err, data) => {
    if (err) return res.status(500).json({ error: "Error reading file" });
    res.json(JSON.parse(data));
  });
});

app.listen(3000, () => console.log("Server running on port 3000"));
