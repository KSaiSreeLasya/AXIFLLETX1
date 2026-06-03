import { RequestHandler } from "express";

export interface ContactRequest {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
}

export const handleContact: RequestHandler = async (req, res) => {
  try {
    const { name, email, phone, company, message } = req.body as ContactRequest;

    if (!name || !email || !message) {
      return res.status(400).json({
        error: "Name, email, and message are required",
      });
    }

    console.log("Contact form submission:", {
      name,
      email,
      phone,
      company,
      message,
      timestamp: new Date().toISOString(),
    });

    res.json({
      success: true,
      message: "Contact form received. We will get back to you soon.",
    });
  } catch (error) {
    console.error("Contact form error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
