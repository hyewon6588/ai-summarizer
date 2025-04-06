import React, { useState } from "react";

export default function SummaryForm() {
  const [inputType, setInputType] = useState("text");
  const [input, setInput] = useState("");
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSummarize = async () => {
    setLoading(true);
    setSummary("");

    const endpoint = inputType === "text" ? "/summarize" : "/summarize-link";
    const payload = inputType === "text" ? { article: input } : { url: input };

    try {
      const res = await fetch(`http://localhost:3001${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      setSummary(data.summary || "No summary returned.");
    } catch (error) {
      setSummary("❌ Error summarizing content.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div style={{ marginBottom: "1rem" }}>
        <label>
          <input
            type="radio"
            name="inputType"
            value="text"
            checked={inputType === "text"}
            onChange={() => setInputType("text")}
          />
          Text
        </label>
        <label style={{ marginLeft: "1rem" }}>
          <input
            type="radio"
            name="inputType"
            value="link"
            checked={inputType === "link"}
            onChange={() => setInputType("link")}
          />
          URL
        </label>
      </div>

      <textarea
        rows="8"
        cols="80"
        placeholder={
          inputType === "text"
            ? "Paste article text here..."
            : "Paste article URL here..."
        }
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></textarea>

      <br />
      <button
        onClick={handleSummarize}
        style={{ marginTop: "1rem", padding: "0.5rem 1rem" }}
        disabled={loading}
      >
        {loading ? "Summarizing..." : "Summarize"}
      </button>

      {summary && (
        <div style={{ marginTop: "2rem", whiteSpace: "pre-wrap" }}>
          <h3>📄 Summary:</h3>
          <p>{summary}</p>
        </div>
      )}
    </div>
  );
}
