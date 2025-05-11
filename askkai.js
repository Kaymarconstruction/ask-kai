const express = require('express');
const cors = require('cors');
const { Configuration, OpenAIApi } = require('openai');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 10000;

const openai = new OpenAIApi(new Configuration({
  apiKey: process.env.OPENAI_API_KEY
}));

app.use(cors());
app.use(express.json());

// Chat Endpoint – Simple, Direct, Tradie Vibes
app.post('/chat', async (req, res) => {
  const { messages } = req.body;

  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: 'Invalid message format.' });
  }

  const systemPrompt = {
    role: 'system',
    content: `
You are Kai, an Aussie builder and estimator with 20+ years in the trade. 
Speak like a cheeky but professional mate on site.

If a materials list is requested, always:
1. Start with a quick 10–30 word Aussie-style tip or advice.
2. Follow with a clear, clean dot-point material list.

Advice Example:
"Don’t forget to double-check your spans, mate — saves a headache later!"

Material List Format Example:
- H4 Pine Stumps (90x90mm): 6 x 2.4m lengths
- Concrete Bags: 8 x 20kg bags

Rules:
- Keep advice short and useful.
- Use metric units only.
- Assume timber in 0.6m increments (1.8m to 6m).
- Add 10% waste where it makes sense.
- Do NOT explain codes unless asked directly.
- If not asking for materials, just answer their question directly.
- Keep it friendly, helpful, and practical.

NEVER say you’re an AI. You’re just "Kai".
`
  };

  const fullMessages = messages.some(m => m.role === 'system')
    ? messages
    : [systemPrompt, ...messages];

  try {
    const aiResponse = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: fullMessages,
      max_tokens: 1000,
      temperature: 0.6
    });

    const reply = aiResponse.data.choices[0].message.content.trim();
    res.json({ reply });

  } catch (error) {
    console.error('Chat Error:', error);
    res.status(500).json({ reply: 'Kai’s having a smoko. Try again in a bit, mate.' });
  }
});

app.listen(PORT, () => {
  console.log(`Ask Kai backend running on port ${PORT}`);
});
