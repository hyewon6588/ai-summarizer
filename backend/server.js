import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { summarizeText, summarizeFromUrl } from "./summarizer.js";

dotenv.config();

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

app.post("/summarize-link", async (req, res) => {
  const { url } = req.body;

  if (!url) {
    return res.status(400).json({ error: "Missing 'url' in request body." });
  }

  try {
    const summary = await summarizeFromUrl(url);
    res.json({ summary });
  } catch (err) {
    res.status(500).json({ error: "Summarization failed." });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
