
import { GoogleGenAI, Type } from "@google/genai";
import type { Photographer } from '../types';

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  // In a real app, you might want to handle this more gracefully.
  // For this example, we'll log a warning.
  console.warn("API_KEY for Gemini is not set in environment variables. AI features will not work.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY! });

export const generateRecommendation = async (prompt: string): Promise<string> => {
  if (!API_KEY) {
    return "AI recommendations are currently unavailable. Please configure the API Key.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        systemInstruction: "You are an AI assistant for a photography marketplace. Your goal is to generate a short, insightful, and enticing recommendation for a photographer based on a user's needs and a photographer's profile. Speak directly to the user. Keep it under 50 words.",
      }
    });
    
    return response.text;
  } catch (error) {
    console.error("Error generating content with Gemini:", error);
    return "Sorry, I couldn't generate a recommendation at this time.";
  }
};

export const findPhotographersWithAI = async (query: string, photographers: Photographer[]): Promise<string[]> => {
    if (!API_KEY) {
        throw new Error("AI search is currently unavailable. API Key not configured.");
    }
    
    const photographerProfiles = photographers.map(p => ({
        id: p.id,
        name: p.name,
        specialties: p.specialties,
        location: p.location,
        bio: p.bio,
    }));

    const prompt = `Based on the user's request: "${query}", analyze the following photographer profiles and return the IDs of the top 3 best matches. The profiles are provided as a JSON object.

    Photographer Profiles:
    ${JSON.stringify(photographerProfiles, null, 2)}
    `;

    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
            config: {
                systemInstruction: "You are an expert photography consultant for FrameNL, a Dutch photographer marketplace. Your task is to match clients with the perfect photographer based on their needs. Analyze the user's request for style, occasion, and location, and compare it against the provided photographer profiles. Return ONLY a JSON object with a single key 'photographerIds' which is an array of the top 3 matching photographer ID strings. Do not include any other text, explanation, or markdown formatting.",
                responseMimeType: "application/json",
                responseSchema: {
                    type: Type.OBJECT,
                    properties: {
                        photographerIds: {
                            type: Type.ARRAY,
                            items: {
                                type: Type.STRING,
                            }
                        }
                    },
                    required: ['photographerIds']
                }
            }
        });
        
        const jsonString = response.text.trim();
        const result = JSON.parse(jsonString);
        
        if (result.photographerIds && Array.isArray(result.photographerIds)) {
            return result.photographerIds;
        }
        return [];

    } catch (error) {
        console.error("Error with AI search:", error);
        throw new Error("Sorry, I couldn't find matches with AI at this time.");
    }
};
