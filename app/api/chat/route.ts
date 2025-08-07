import { NextRequest, NextResponse } from "next/server";

const MODEL = "mistralai/mistral-7b-instruct:free";
const KEY = process.env.API_KEY;

// Define the structure of each chat message
interface ChatMessage {
  role: "system" | "user" | "assistant";
  content: string;
}

// Define the expected request body
interface RequestBody {
  messages: ChatMessage[];
  max_tokens?: number;
}

// Define the OpenRouter response structure
interface OpenRouterResponse {
  choices: {
    message: {
      content: string;
    };
  }[];
}

export async function POST(req: NextRequest) {
  try {
    const { messages, max_tokens }: RequestBody = await req.json();

    if (!KEY) {
      console.error("API_KEY is missing");
      return new Response(JSON.stringify({ error: "API_KEY not found" }), { status: 500 });
    }

    if (!Array.isArray(messages)) {
      return new Response(JSON.stringify({ error: "Invalid messages format" }), { status: 400 });
    }

    const SYSTEM_PROMPT: ChatMessage = {
      role: "system",
      content:
        "You are a concise interior design assistant. Respond in no more than 3 short bullet points. Be helpful and brief.",
    };

    const body = JSON.stringify({
      model: MODEL,
      messages: [SYSTEM_PROMPT, ...messages],
      max_tokens: max_tokens || 100,
    });

    console.log("📤 Sending to OpenRouter:", body);

    const result = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${KEY}`,
        "Content-Type": "application/json",
        "X-Title": "furniture AI chat",
      },
      body,
    });

    if (!result.ok) {
      const errorText = await result.text();
      console.error("OpenRouter error:", errorText);
      return new Response(JSON.stringify({ error: "OpenRouter failed", detail: errorText }), { status: 500 });
    }

    const data: OpenRouterResponse = await result.json();
    const reply = data.choices?.[0]?.message?.content || "No response";

    console.log("OpenRouter reply:", reply);

    return NextResponse.json({
      choices: [
        {
          message: {
            content: reply,
          },
        },
      ],
    });
  } catch (err: unknown) {
    const error = err as Error;
    console.error("Server error:", error.message);
    return new Response(
      JSON.stringify({ error: "Internal Server Error", details: error.message }),
      { status: 500 }
    );
  }
}
