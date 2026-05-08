import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY as string);

export const analyzeCareer = async (userData: any) => {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const prompt = `
    As a senior career strategist for Skilligram, analyze the following user profile and provide:
    1. A list of 5 trending skills they should learn next.
    2. Three potential career paths based on their current skills.
    3. A brief improvement tip for their profile.
    
    User Data:
    Skills: ${userData.skills?.join(", ") || "None listed"}
    Interests: ${userData.interests?.join(", ") || "None listed"}
    Bio: ${userData.bio || "No bio"}
    
    Return the response in valid JSON format with keys: suggestedSkills (array), careerPaths (array), and profileTip (string).
  `;

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    // Clean JSON if needed (sometimes gemini wraps in ```json)
    const jsonString = text.replace(/```json/g, "").replace(/```/g, "").trim();
    return JSON.parse(jsonString);
  } catch (error) {
    console.error("Gemini AI Analysis failed:", error);
    return null;
  }
};

export const generateSkillRoadmap = async (skill: string) => {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const prompt = `Generate a 4-step learning roadmap for the skill: ${skill}. Include resources and key milestones. Return as JSON.`;
  
  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return JSON.parse(response.text().replace(/```json/g, "").replace(/```/g, "").trim());
  } catch (error) {
    return null;
  }
};
