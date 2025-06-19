import { openai } from "@ai-sdk/openai";
import { streamText } from "ai";
import { getServiceConfig } from "@/lib/service-config";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    const { messages, serviceId } = await req.json();

    const serviceConfig = getServiceConfig(serviceId);
    if (!serviceConfig) {
      return new Response("Service not found", { status: 404 });
    }

    const result = await streamText({
      //   model: openai("gpt-3.5-turbo"),
      //   model: openai("gpt-4o"),
      model: openai("gpt-neo-2.7b"),
      system: serviceConfig.systemPrompt,
      messages,
      temperature: 0.7,
    });

    console.log("result: ", result);

    // return result.toAIStreamResponse();
    return result.toDataStreamResponse();
  } catch (error) {
    console.error("Chat API error:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
