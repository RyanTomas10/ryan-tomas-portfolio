import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { createInquiry, getInquiries } from './src/db/inquiries.ts';
import { supabase, isSupabaseConfigured } from './src/lib/supabase.ts';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json());

// API route to submit a new inquiry from the website contact form
app.post('/api/inquiries', async (req: Request, res: Response) => {
  try {
    const { name, email, projectScope, message } = req.body;

    if (!name || !email || !projectScope || !message) {
      return res.status(400).json({
        error: 'Missing required fields: name, email, projectScope, and message are all required.',
      });
    }

    const trimmedData = {
      name: String(name).trim(),
      email: String(email).trim(),
      projectScope: String(projectScope).trim(),
      message: String(message).trim(),
    };

    let supabaseData = null;
    if (isSupabaseConfigured && supabase) {
      try {
        const { data, error } = await supabase.from('inquiries').insert([
          {
            name: trimmedData.name,
            email: trimmedData.email,
            project_scope: trimmedData.projectScope,
            message: trimmedData.message,
            status: 'pending',
          },
        ]).select();

        if (error) {
          console.error('Supabase insertion error:', error);
        } else {
          supabaseData = data?.[0];
        }
      } catch (sbErr) {
        console.error('Supabase client error:', sbErr);
      }
    }

    const newInquiry = await createInquiry(trimmedData);

    res.status(201).json({
      success: true,
      message: 'Inquiry successfully saved to database.',
      inquiry: supabaseData || newInquiry,
      supabaseConnected: isSupabaseConfigured,
    });
  } catch (error: any) {
    console.error('API /api/inquiries error:', error);
    res.status(500).json({
      error: error.message || 'An error occurred while saving your inquiry.',
    });
  }
});

// API route to retrieve inquiries
app.get('/api/inquiries', async (_req: Request, res: Response) => {
  try {
    const inquiries = await getInquiries();
    res.json({
      success: true,
      count: inquiries.length,
      inquiries,
    });
  } catch (error: any) {
    console.error('API GET /api/inquiries error:', error);
    res.status(500).json({
      error: error.message || 'Failed to fetch inquiries.',
    });
  }
});

// Setup Vite middleware in dev or static files in production
const isProduction = process.env.NODE_ENV === 'production';

if (!isProduction) {
  const { createServer } = await import('vite');
  const vite = await createServer({
    server: { middlewareMode: true },
    appType: 'spa',
  });
  app.use(vite.middlewares);
} else {
  const distPath = path.resolve(__dirname, 'dist');
  app.use(express.static(distPath));
  app.get('*', (_req, res) => {
    res.sendFile(path.resolve(distPath, 'index.html'));
  });
}

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running at http://0.0.0.0:${PORT} in ${isProduction ? 'production' : 'development'} mode`);
});
