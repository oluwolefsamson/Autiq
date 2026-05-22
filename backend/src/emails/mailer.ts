export interface MailPayload {
  to: string;
  subject: string;
  html: string;
}

export const sendMail = async (_payload: MailPayload): Promise<void> => {
  // Wire SMTP or an email API here.
};
