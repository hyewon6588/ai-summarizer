# Lab 5: AI Article Summarizer (Vite + React + Gemini API)

## Project Overview

This project is a web-based application that summarizes news articles using a Generative AI model (Gemini 1.5 Flash). Users can input either the full text of an article or a URL. The AI then returns an academic-style summary. The frontend is built with **Vite + React**, and the backend is powered by **Node.js + Express** using the **Google Gemini API** via **LangChain**.

## Tech Stack

- **Frontend:** React (with Vite)
- **Backend:** Node.js + Express
- **AI Model:** Google Gemini (via LangChain)
- **Web Scraping:** CheerioWebBaseLoader
- **API Communication:** Native `fetch()`

## Key Features

- **Text Summarization:** Input raw article content and get a concise academic summary.
- **URL Summarization:** Input an article URL — the server loads and summarizes the page.
- Uses Gemini 1.5 Flash model for fast and accurate AI response.
- Results are displayed on the frontend in real-time.

---

## 🚀 How to Run the App

### 1. Run the Backend

- cd backend
- npm install
- node server.js

✅ **Make sure you have a `.env` file inside the `/backend` folder with the following content:**

```ini
GOOGLE_API_KEY=your_gemini_api_key_here
```

Your backend will start on `http://localhost:3001`

### 2. Run the Frontend

- cd client
- npm install
- npm run dev

---

### ✅ a. How the summarizer was implemented

We implemented the summarizer using **LangChain’s integration with the Google Gemini API**, specifically the `ChatGoogleGenerativeAI` class.

The summarizer logic includes the following steps:

1. **Model Initialization**  
   We create a `ChatGoogleGenerativeAI` object with the model name (`"models/gemini-1.5-flash"`) and the Gemini API key loaded from `.env`.  
   This object allows us to call `.invoke()` and pass chat-style messages to Gemini.

2. **Prompt Creation**  
   We use LangChain’s `ChatPromptTemplate` to define a 2-part prompt:

   - A `system` message describing the assistant's role: _“You are a helpful assistant that summarizes academic articles.”_
   - A `human` message that includes the article content using a `{article}` placeholder.

3. **Text Summarization**  
   When summarizing raw text:

   - The input text is injected into the prompt using `formatMessages({ article: text })`.
   - The formatted message list is passed to `model.invoke()` to get the AI-generated summary.

4. **URL Summarization**  
   When summarizing from a URL:
   - We use `CheerioWebBaseLoader` to fetch and parse the main content from the web page.
   - The extracted text is passed through the same prompt formatting and `invoke()` process as raw text.

This logic allows for consistent summarization of both direct input and online articles using a single unified pipeline.

---

### ✅ b. Articles Selected
####  1. Impact of Emerging Technologies to the Environment

- **Article:** [Explained: Generative AI’s environmental impact (MIT News, 2025)](https://news.mit.edu/2025/explained-generative-ai-environmental-impact-0117)

#### 2. Sustainable Solutions Provided by Top Software Makers
- **Article:** [Sustainability management software providers to consider (TechTarget, 2025)](https://www.techtarget.com/sustainability/feature/Sustainability-management-software-providers-to-consider)

---

### ✅ c. How the solution was tested

- ✅ Tested both endpoints using **Postman**:
  - `POST /summarize` with raw article text
  - `POST /summarize-link` with article URL
- ✅ Verified that response includes academic summary in `summary.content`
- ✅ Confirmed frontend correctly displays AI-generated summaries in real time
  
---

### ✅ d. Group Memeber

   1 -   Yein An    
   2 -   Hyewon Ham    
   3 -   Hyerim Jeong    
   4 –   Eunji Kwon    
   5 –   Jeremy Liao 

---
