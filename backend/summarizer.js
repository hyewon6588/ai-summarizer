import dotenv from "dotenv";
import { CheerioWebBaseLoader } from "@langchain/community/document_loaders/web/cheerio";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { ChatPromptTemplate } from "@langchain/core/prompts";

dotenv.config();

const model = new ChatGoogleGenerativeAI({
  model: "models/gemini-1.5-flash",
  apiKey: process.env.GOOGLE_API_KEY,
});

export async function summarizeText(text) {
  const prompt = ChatPromptTemplate.fromMessages([
    [
      "system",
      "You are a helpful assistant that summarizes academic articles.",
    ],
    [
      "human",
      "Summarize the following article in a clear, academic tone:\n\n{article}",
    ],
  ]);

  const formattedPrompt = await prompt.formatMessages({ article: text });

  const response = await model.invoke(formattedPrompt);
  return response.content;
}

export async function summarizeFromUrl(url) {
  try {
    // 1. Load the article content from the web
    const loader = new CheerioWebBaseLoader(url);

    const docs = await loader.load();
    const content = docs.map((doc) => doc.pageContent).join("\n\n");

    // 2. Set up prompt + model chain
    const prompt = ChatPromptTemplate.fromMessages([
      [
        "system",
        "You are a helpful assistant that summarizes academic articles.",
      ],
      [
        "human",
        "Summarize the following article in a clear, academic tone:\n\n{article}",
      ],
    ]);

    const formattedPrompt = await prompt.formatMessages({ article: content });

    const summary = await model.invoke(formattedPrompt);
    return summary.content;
  } catch (error) {
    console.error("Error summarizing from URL:", error);
    throw new Error("Failed to summarize from URL.");
  }
}
