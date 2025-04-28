const fetch = require('node-fetch');

exports.handler = async (event, context) => {
  try {
    const { prompt } = JSON.parse(event.body || '{}');

    if (!prompt) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Prompt missing." })
      };
    }

    const apiKey = process.env.OPENAI_API_KEY;
    const endpoint = "https://api.openai.com/v1/chat/completions";

    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: "You are Kai Marlow, a laid-back but knowledgeable Australian carpenter and construction consultant. Provide friendly, accurate advice for construction, decking, pergolas, renovations, quoting and trades. If the question is about materials, suggest eco-friendly options too."
          },
          {
            role: "user",
            content: prompt
          }
        ],
        temperature: 0.6,
        max_tokens: 600
      })
    });

    if (!response.ok) {
      const error = await response.json();
      console.error("OpenAI error:", error);
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "OpenAI request failed." })
      };
    }

    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify({ reply: data.choices[0].message.content.trim() })
    };
  } catch (error) {
    console.error("Server error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Server error." })
    };
  }
};
