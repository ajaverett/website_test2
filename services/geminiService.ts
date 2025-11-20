import { GoogleGenAI, Type, Schema } from "@google/genai";
import { StoryStep } from "../types";

// Initialize the Gemini client
// Note: API Key is expected to be in process.env.API_KEY
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const stepSchema: Schema = {
  type: Type.OBJECT,
  properties: {
    title: { type: Type.STRING, description: "A catchy title for this step of the story." },
    description: { type: Type.STRING, description: "A paragraph describing this part of the story (approx 50-80 words)." },
    color: { type: Type.STRING, description: "A hex color code (e.g., #1E40AF) that represents the mood of this step." },
    visualText: { type: Type.STRING, description: "A short, punchy phrase to display on the sticky visual card (max 10 words)." },
    badgeText: { type: Type.STRING, description: "A short label like 'Phase 1' or 'The Beginning'." }
  },
  required: ["title", "description", "color", "visualText", "badgeText"]
};

const storySchema: Schema = {
  type: Type.ARRAY,
  items: stepSchema
};

export const generateStory = async (topic: string): Promise<StoryStep[]> => {
  try {
    const modelId = "gemini-2.5-flash"; // Use the recommended fast model for text generation
    
    const prompt = `Create a compelling 4-step scrollytelling story about: "${topic}". 
    Ensure the colors transition smoothly (e.g., dark to light, or cool to warm).
    Keep the descriptions engaging and suitable for a web experience.`;

    const response = await ai.models.generateContent({
      model: modelId,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: storySchema,
        systemInstruction: "You are a creative writer and UI designer specializing in interactive web storytelling."
      },
    });

    const text = response.text;
    if (!text) {
      throw new Error("No content generated");
    }

    const rawSteps = JSON.parse(text);
    
    // Map to ensure IDs are present
    const steps: StoryStep[] = rawSteps.map((step: any, index: number) => ({
      id: index,
      title: step.title,
      description: step.description,
      color: step.color,
      visualText: step.visualText,
      badgeText: step.badgeText || `Step ${index + 1}`
    }));

    return steps;
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};
