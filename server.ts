import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import { GoogleGenAI } from "@google/genai";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route for Chatbot
  app.post('/api/chat', async (req, res) => {
    try {
      const { message } = req.body;
      let apiKey = process.env.GEMINI_API_KEY;
      
      if (!apiKey) {
        // Log error but don't crash, ideally the environment provides this
        console.error("GEMINI_API_KEY is missing");
        return res.status(500).json({ error: "Server configuration error (API Key missing)." });
      }

      const genAI = new GoogleGenAI(apiKey);
      const model = genAI.getGenerativeModel({ 
        model: "gemini-1.5-flash",
        systemInstruction: "You are the official AI assistant for Walt Designs & Studio, a premium design agency based in Delhi. You help clients with inquiries about web design, graphic design, branding, and app development. Be professional, creative, and concise. Mention you are from Delhi if relevant."
      });

      const result = await model.generateContent(message);
      const response = await result.response;
      res.json({ text: response.text() });
    } catch (error) {
      console.error("AI Error:", error);
      res.status(500).json({ error: "Failed to process AI request" });
    }
  });

  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });

    app.use(vite.middlewares);

    app.get('*', async (req, res, next) => {
      const url = req.originalUrl;
      
      if (url.startsWith('/api') || url.includes('.')) {
        return next();
      }

      try {
        const template = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');
        const html = await vite.transformIndexHtml(url, template);
        res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
      } catch (e) {
        vite.ssrFixStacktrace(e as Error);
        next(e);
      }
    });

  } else {
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));

    app.get('*', (req, res) => {
      res.sendFile(path.resolve(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
