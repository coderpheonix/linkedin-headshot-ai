
import { GoogleGenAI, Modality, GenerateContentResponse } from "@google/genai";
import { BackgroundStyle } from "../types";

const fileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const result = reader.result as string;
      // remove "data:image/jpeg;base64,"
      resolve(result.split(',')[1]);
    };
    reader.onerror = (error) => reject(error);
  });
};

export const generateHeadshot = async (
  baseImage: File,
  background: BackgroundStyle,
  outfit: string
): Promise<string | null> => {
  if (!process.env.API_KEY) {
    console.error("API_KEY environment variable not set.");
    throw new Error("API key is not configured. Please contact support.");
  }

  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  try {
    const base64Data = await fileToBase64(baseImage);
    const mimeType = baseImage.type;

    const prompt = `Transform this photo into a hyper-realistic, professional headshot suitable for a corporate LinkedIn profile. The subject should be wearing ${outfit}. Replace the background with ${background}. The final image should have professional studio lighting, be sharp, high-resolution, and look like a photograph taken by a professional photographer. Do not add any text or logos.`;
    
    const response: GenerateContentResponse = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image-preview',
        contents: {
          parts: [
            {
              inlineData: {
                data: base64Data,
                mimeType: mimeType,
              },
            },
            { text: prompt },
          ],
        },
        config: {
            responseModalities: [Modality.IMAGE, Modality.TEXT],
        },
    });

    for (const part of response.candidates[0].content.parts) {
        if (part.inlineData) {
            const base64ImageBytes: string = part.inlineData.data;
            return `data:${part.inlineData.mimeType};base64,${base64ImageBytes}`;
        }
    }
    
    return null;
  } catch (error) {
    console.error("Error generating headshot:", error);
    // Let's check for specific API errors, e.g., safety settings
    if (error.toString().includes('blocked')) {
      throw new Error("Generation failed due to safety policies. Please try a different photo.");
    }
    throw new Error("An unexpected error occurred while generating the image.");
  }
};
