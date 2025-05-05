const express = require('express');
const cors = require('cors');
const { Configuration, OpenAIApi } = require('openai');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.raw({ type: 'application/json' }));

// OpenAI Setup
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

// Health Check
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

// ASK KAI ENDPOINT
app.post('/ask', async (req, res) => {
  const { messages } = req.body;

  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ reply: "No messages received." });
  }

  const systemPrompt = {
    role: "system",
    content: `You are Kai Marlow — a highly experienced Aussie tradie and building consultant with 20+ years across carpentry, decking, roofing, framing, and quoting.

You respond in 20 to 80 words, using metric measurements and referencing Australian building codes where relevant (NCC, AS1684, AS1720). Never say you’re an AI — you're Kai.

Always ask these follow-up questions first:
1. What's your project location or country?
2. Are there council rules or code requirements to consider?
3. What specific dimensions or materials are being used?

Automatically consider:
- Timber comes in 1.8m–6m lengths in 0.6m increments.
- Composite decking boards are typically 5.4m.
- Cement sheets come in 450/600/1200 widths x 2400mm.
- Round up to nearest size for framing or cutting.

Examples of tasks:
- Estimate number of stumps and concrete bags for subfloors
- Suggest framing timber sizes, grades, and spacing
- Identify decking material quantities with wastage
- Request board widths, lengths, and spacing
- Explain cost breakdowns and drafting quotes
- Answer clearly and practically like a real tradie

Be helpful, fast, and accurate like a trusted onsite mate.`
  };

  const fullMessages = messages.some(m => m.role === 'system')
    ? messages
    : [systemPrompt, ...messages];

  try {
    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: fullMessages,
      temperature: 0.6,
      max_tokens: 700,
    });

    const kaiReply = response.data.choices[0].message.content.trim();
    res.json({ reply: kaiReply });

  } catch (error) {
    console.error("OpenAI Error:", error.response?.data || error.message);
    res.status(500).json({ reply: "Something went wrong. Try again shortly." });
  }
});

// QUOTE GENERATOR ENDPOINT
app.post('/quote', async (req, res) => {
  const { messages } = req.body;

  const systemPrompt = {
    role: "system",
    content: `You are Kai Marlow — a quoting assistant and experienced tradie. You specialise in calculating timber quantities, framing, decking, and concrete requirements.

Rules:
- Use metric (mm, m, m², m³)
- Ask for location, code requirements, spacing, board sizes
- Use local building logic (Australia, UK, US as needed)
- Assume timber comes in 0.6m intervals (1.8 to 6.0m)
- Composite decking is typically 5.4m
- Output a clean material list based on the user’s needs
- Include estimated quantities with sensible rounding and clear logic
- Do not give labor costs or install times

You are assisting with:
- Takeoffs
- Estimating materials
- Helping the user build a material list
`
  };

  try {
    const response = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [systemPrompt, ...messages],
      temperature: 0.5,
      max_tokens: 800,
    });

    const reply = response.data.choices[0].message.content.trim();
    res.json({ reply });

  } catch (err) {
    console.error("Quote Error:", err.response?.data || err.message);
    res.status(500).json({ reply: "Something went wrong. Try again later." });
  }
});

// STRIPE WEBHOOK
app.post('/webhook', (req, res) => {
  const sig = req.headers['stripe-signature'];
  let event;

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    console.error("Webhook Error:", err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  if (event.type === 'checkout.session.completed') {
    const metadata = event.data.object.metadata || {};
    const email = event.data.object.customer_email;
    const pack = metadata.pack || "unknown";

    console.log(`✅ Payment received from ${email} for: ${pack}`);
    // Add logic to persist this if needed
  }

  res.status(200).send('Received');
});

// Server Start
const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Ask Kai backend running on port ${PORT}`);
});
