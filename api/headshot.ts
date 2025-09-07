import type { VercelRequest, VercelResponse } from "@vercel/node";
import { generateHeadshotServer } from "../lib/geminiService";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const { imageBytes, mimeType, background, outfit } = req.body || {};
  try {
    const dataUrl = await generateHeadshotServer({
      imageBytes,
      mimeType,
      background,
      outfit,
    });
    res.status(200).json({ image: dataUrl });
  } catch (err: any) {
    res.status(500).json({ error: err.message || "Error generating headshot" });
  }
}
