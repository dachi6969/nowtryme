
const MODEL = "mistralai/mistral-7b-instruct:free";
const KEY = process.env.API_KEY; 

import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { messages } = await req.json();
  const SYSTEM_PROMPT = {
    role: "system",
    content: "You are a concise interior design assistant. Respond in no more than 3 short bullet points. Be helpful and brief.",
  };
  
  const body = JSON.stringify({
    model: MODEL,
    messages: [SYSTEM_PROMPT, ...messages], // prepend system message
    max_tokens: 100, // hard limit on length
  });

  const result = await fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${KEY}`,
      'Content-Type': 'application/json',
      'X-Title': 'furniture AI chat'
    },
    body,
  });

  if (!result.ok) {
    return new Response(JSON.stringify({ error: "Something went wrong" }), {
      status: 500
    });
  }

  const data = await result.json();
  return NextResponse.json(data);
}
