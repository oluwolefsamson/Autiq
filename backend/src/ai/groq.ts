export interface AIReplyInput {
  question: string;
  context: string;
}

export const generateAIReply = async (_input: AIReplyInput): Promise<string> => {
  return "Thanks for reaching out. Our team will get back to you shortly.";
};
