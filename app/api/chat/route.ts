
import OpenAI from "openai";
import { portfolioContext } from "@/lib/portfolioContext";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    const response = await client.responses.create({
      model: "gpt-5",
      input: [
        {
          role: "system",
          content: portfolioContext,
        },
        {
          role: "user",
          content: message,
        },
      ],
    });

    return Response.json({
      answer: response.output_text,
    });
  } catch (error) {
    console.error(error);

    return Response.json({
      answer: "Sorry, something went wrong.",
    });
  }
}

