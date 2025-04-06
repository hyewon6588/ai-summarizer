1. Project Summary

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

--------------------------------------------

## 🚀 How to Run the App

### 1. Run the Backend
### 2. Run the Frontend
 - cd client
 - npm install
 - npm run dev
