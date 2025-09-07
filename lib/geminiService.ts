// lib/geminiService.ts
"use server";
import { GoogleGenAI, Modality } from "@google/genai";

export async function generateHeadshotServer({
  imageBytes,
  mimeType,
  background,
  outfit,
}: {
  imageBytes: string;
  mimeType: string;
  background: string;
  outfit: string;
}): Promise<string> {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) throw new Error("GEMINI_API_KEY not set");

  const ai = new GoogleGenAI({ apiKey });
  const prompt = `Transform this photo into a hyper‑realistic, professional headshot suitable for a corporate LinkedIn profile. The subject should be wearing ${outfit}. Replace the background with ${background}. The final image should have professional studio lighting, be sharp, high‑resolution, and look like a photograph taken by a professional photographer. Do not add any text or logos.`;

  const resp = await ai.models.generateContent({
    model: "gemini-2.5-flash-image-preview",
    contents: {
      parts: [{ inlineData: { data: imageBytes, mimeType } }, { text: prompt }],
    },
    config: { responseModalities: [Modality.IMAGE, Modality.TEXT] },
  });

  const parts = resp.candidates?.[0]?.content?.parts ?? [];
  for (const part of parts) {
    const inline = (part as any).inlineData;
    if (inline?.data && inline?.mimeType) {
      return `data:${inline.mimeType};base64,${inline.data}`;
    }
  }
  throw new Error("No image returned");
}
