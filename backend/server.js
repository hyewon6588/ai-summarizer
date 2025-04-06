require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { summarizeText } = require("./summarizer");

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.post("/summarize", async (req, res) => {
  const { article } = req.body;

  if (!article) {
    return res
      .status(400)
      .json({ error: "Missing 'article' in request body." });
  }

  try {
    const summary = await summarizeText(article);
    res.json({ summary });
  } catch (err) {
    console.error("Summary error:", err);
    res.status(500).json({ error: "Failed to summarize article." });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
