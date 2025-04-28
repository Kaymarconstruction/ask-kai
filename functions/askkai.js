const fetch = require('node-fetch');

exports.handler = async function(event, context) {
  const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

  const body = JSON.parse(event.body);
  const userMessage = body.message;

  try {
    const completion = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: "You are Kai, a helpful experienced Australian carpenter and builder. Answer casually and helpfully with practical advice on construction, building materials, project planning, or job pricing." },
          { role: "user", content: userMessage }
        ],
        max_tokens: 500,
        temperature: 0.6,
      }),
    });

    const data = await completion.json();
    return {
      statusCode: 200,
      body: JSON.stringify({ reply: data.choices[0].message.content.trim() }),
    };

  } catch (error) {
    console.error('Error contacting OpenAI:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Something went wrong contacting Kai.' }),
    };
  }
};
