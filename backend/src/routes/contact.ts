import { Router, Request, Response } from 'express';

const router = Router();

router.post('/', (req: Request, res: Response) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      error: 'Please provide name, email, and message.',
    });
  }

  // Ready for integration with nodemailer, SendGrid, Resend, or database storage
  console.log(`[Contact Form Received] From: ${name} <${email}>, Subject: ${subject || 'No Subject'}`);

  return res.status(200).json({
    success: true,
    message: 'Thank you for reaching out! Your message has been received.',
  });
});

export default router;
