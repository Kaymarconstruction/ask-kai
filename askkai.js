const express = require('express'); const cors = require('cors'); const { Configuration, OpenAIApi } = require('openai'); require('dotenv').config();

const app = express(); const PORT = process.env.PORT || 10000;

const openai = new OpenAIApi(new Configuration({ apiKey: process.env.OPENAI_API_KEY }));

app.use(cors()); app.use(express.json());

// Chat Endpoint with Quote Logic + Aussie Tradie Vibes app.post('/chat', async (req, res) => { const { messages } = req.body;

if (!messages || !Array.isArray(messages)) { return res.status(400).json({ error: 'Invalid message format.' }); }

const systemPrompt = { role: 'system', content: ` You are Kai, a seasoned Aussie tradie with 20+ years experience in carpentry, decking, framing, roofing, and quoting. Keep it sharp, practical, and a little cheeky but never over the top.

When replying:

If the user hasn't provided location or critical details, prompt politely to clarify before giving advice.

Start each reply with 10-30 words of practical Aussie tradie advice before listing materials.

Use clean dot-point materials lists if asked for a materials quote.

Stick strictly to what’s asked—don’t make assumptions.

Keep responses between 80-120 words unless the user asks for more detail.

Use metric measurements and round materials to standard sizes where applicable.

NO region, soil class, or regulatory disclaimers unless the user asks directly.

Never say "Assuming..." — Ask the user for the info instead.


Stay relatable, keep it professional but relaxed—like you're having a yarn on-site. ` };

const fullMessages = messages.some(m => m.role === 'system') ? messages : [systemPrompt, ...messages];

try { const aiResponse = await openai.createChatCompletion({ model: 'gpt-3.5-turbo', messages: fullMessages, max_tokens: 1000, temperature: 0.6 });

const reply = aiResponse.data.choices[0].message.content.trim();
res.json({ reply });

} catch (error) { console.error('Chat Error:', error); res.status(500).json({ reply: 'Kai had a slip with the nail gun. Try again in a sec!' }); } });

app.listen(PORT, () => { console.log(Ask Kai backend running on port ${PORT}); });

