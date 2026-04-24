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
      const apiKey = process.env.GEMINI_API_KEY;
      
      if (!apiKey) {
        return res.status(500).json({ error: "GEMINI_API_KEY not configured on server." });
      }

      const genAI = new GoogleGenAI(apiKey);
      const model = genAI.getGenerativeModel({ 
        model: "gemini-2.0-flash",
        systemInstruction: "You are the official AI assistant for Walt Designs & Studio, a premium design agency based in Delhi. You help clients with inquiries about web design, graphic design, branding, and app development. Be professional, creative, and concise."
      });

      const result = await model.generateContent(message);
      const response = await result.response;
      res.json({ text: response.text() });
    } catch (error) {
      console.error("AI Error:", error);
      res.status(500).json({ error: "Failed to process AI request" });
    }
  });

  // Clean URL Mapping
  const pageMap: Record<string, string> = {
    '/': 'index.html',
    '/services': 'services.html',
    '/about': 'about-us.html',
    '/about-us': 'about-us.html',
    '/portfolio': 'portfolio.html',
    '/contact': 'contact.html',
    '/growth-agency': 'growth-agency.html',
  };

  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'custom',
    });

    app.use(vite.middlewares);

    app.get('*', async (req, res, next) => {
      const url = req.originalUrl;
      const targetFile = pageMap[url] || pageMap[url.split('?')[0]];

      if (targetFile) {
        try {
          const filePath = path.resolve(__dirname, targetFile);
          const template = fs.readFileSync(filePath, 'utf-8');
          const html = await vite.transformIndexHtml(url, template);
          res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
        } catch (e) {
          vite.ssrFixStacktrace(e as Error);
          next(e);
        }
      } else if (!url.includes('.')) {
        // Fallback for clean URLs not in map to index.html
        try {
          const template = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');
          const html = await vite.transformIndexHtml(url, template);
          res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
        } catch (e) {
          next(e);
        }
      } else {
        next();
      }
    });

  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));

    app.get('*', (req, res) => {
      const url = req.originalUrl.split('?')[0];
      const targetFile = pageMap[url];
      
      if (targetFile) {
        res.sendFile(path.join(distPath, targetFile));
      } else {
        res.sendFile(path.join(distPath, 'index.html'));
      }
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
