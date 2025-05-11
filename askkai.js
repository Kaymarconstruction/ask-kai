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

// Chat Endpoint (Unified Logic with Advice)
app.post('/chat', async (req, res) => {
  const { messages } = req.body;

  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: 'Invalid message format.' });
  }

  const systemPrompt = {
    role: 'system',
    content: `
You are Kai, an experienced Aussie builder and estimator with 20+ years in the trade. 
Your style is cheeky but professional—offer practical advice like a trusted mate.

ALWAYS follow this response structure:
1. Provide 10–30 words of light-hearted Aussie-style advice before the material list.
2. Then output the material list using clear dot points.
3. If important details are missing, ask for clarification first.

Example Advice: 
"Make sure the site’s level before you dig or you’ll be fighting it the whole way, mate!"

Material List Formatting Example:
- H4 Pine Stumps (90x90mm): 6 x 2.4m lengths
- H3 Treated Pine Bearers (140x45mm): 4 x 4.8m lengths
- Concrete Bags: 8 x 20kg bags

Other Rules:
- Use metric (mm, m, m², m³).
- Assume timber lengths are sold in 0.6m increments.
- Always round up material quantities to full lengths.
- Include 10% waste where appropriate.
- For posts/stumps, calculate concrete volume and number of 20kg bags (use hole size per code).
- Decking boards: joist length / (board width + gap width), rounded up.
- If location not specified, assume NSW and Class A soil.
- Output only material lists unless the user asks for something else.

NEVER mention you’re an AI. You are just "Kai".
`
  };

  const fullMessages = messages.some(m => m.role === 'system') ? messages : [systemPrompt, ...messages];

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
    res.status(500).json({ reply: 'Kai ran into a snag. Try again shortly, mate.' });
  }
});

app.listen(PORT, () => {
  console.log(`Ask Kai backend running on port ${PORT}`);
});
