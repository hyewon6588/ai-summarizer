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
- **Reason for Selection:**  
  This article was chosen because it is a recent (2025) publication that clearly explains the environmental impact of generative AI in a simple and accessible way, aligning well with the topic requirements.

- **Summary (Generated by OpenAI API):**
 This two-part MIT News article examines the significant environmental impact of generative AI.  The first part focuses on the technology's substantial resource consumption.  The authors highlight the immense electricity demands of training and deploying large language models like GPT-4, leading to substantial carbon dioxide emissions and strain on power grids.  This energy consumption is amplified by the constant need for model fine-tuning and the release of new, larger models, rendering previous versions obsolete.  Furthermore, the cooling requirements of data centers necessitate significant water usage, impacting local ecosystems and water supplies.  The manufacturing and transportation of the high-performance computing hardware, particularly GPUs, contribute further indirect environmental costs, involving resource extraction, complex fabrication processes, and emissions.  The authors cite studies estimating the energy consumption of training GPT-3 and the projected exponential growth of data center energy consumption, emphasizing that this increase is largely fueled by generative AI's demands.  The article concludes by noting that the ease of use masks the considerable environmental cost for the average user and underscores the need for a comprehensive assessment of generative AI's environmental and societal impacts to promote responsible development and mitigate its unsustainable trajectory.


#### 2. Sustainable Solutions Provided by Top Software Makers
- **Article:** [Top ESG software companies to watch in 2025 (Sweep, 2025)](https://www.sweep.net/insights/top-esg-software-companies-to-watch-in-2024)
- **Reason for Selection:**
  This article was selected because it is a recent (2025) guide that provides a clear and concise overview of major software providers’ sustainable solutions, directly supporting the project goals.

- **Summary (Generated by OpenAI API):**
 This article examines the increasing importance of Environmental, Social, and Governance (ESG) metrics in corporate reporting and the role of specialized software in managing ESG data.  The overwhelming support (87%) of CEOs for ESG integration highlights its strategic significance, moving beyond mere compliance to inform decision-making and enhance long-term value.

The article defines ESG, encompassing environmental impact, social responsibility, and corporate governance.  It emphasizes the necessity of tracking ESG metrics due to tightening regulations and investor focus on sustainability.  Key challenges in ESG data management are identified, including data reliability (particularly concerning Scope 3 emissions), lack of standardization, and resource-intensive data collection and analysis.  Similarly, ESG reporting faces challenges related to accuracy, timeliness, consistency, and navigating evolving regulatory landscapes.

The article champions ESG software as a solution, highlighting its ability to automate data collection, improve reporting accuracy and consistency, and provide actionable insights through advanced analytics.  The software's role in ensuring compliance with regulations like CSRD and SFDR is stressed.

Ten leading ESG reporting software platforms (Sweep, Workiva, Greenly, Persefoni, Watershed, SustainIQ, Benchmark Gensuite, Microsoft Sustainability Cloud, IBM Environmental Intelligence Suite, and Normative) are profiled, detailing their key features and major clients.

Finally, the article advises on selecting appropriate ESG software, emphasizing the importance of key capabilities (real-time monitoring, risk management, adaptability), comprehensive ESG management, automated data collection, effective data processing and integration, and streamlined reporting.  The article concludes by discussing the return on investment (ROI) of ESG software, encompassing both quantitative (cost savings, reduced risk, improved efficiency) and qualitative (enhanced stakeholder trust, improved decision-making) aspects.



---

### ✅ c. How the solution was tested

-  Tested both endpoints using **Postman**:
  - `POST /summarize` with raw article text
  - `POST /summarize-link` with article URL
-  Verified that response includes academic summary in `summary.content`
-  Confirmed frontend correctly displays AI-generated summaries in real time
  
---

### ✅ d. Group Memeber

   1 -   Yein An    
   2 -   Hyewon Ham    
   3 -   Hyerim Jeong    
   4 –   Eunji Kwon    
   5 –   Jeremy Liao 

---
