import type { NextApiRequest, NextApiResponse } from "next";
import { Email } from "@/models";
import { db } from "@/database";
import { EmailResponse } from "@/interfaces";

type Data = EmailResponse;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case "POST":
      return postEmail(req, res);
    default:
      return res.status(400).json({ message: "The end point does not exist" });
  }
}

const postEmail = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { email = "" } = req.body;

  try {
    await db.connect();

    const findedEmails = await Email.find({ email }).sort({
      email: "ascending",
    });

    if (findedEmails.length > 0) {
      await db.disconnect();
      return res
        .status(409)
        .json({ message: "The email is already registered." });
    } else {
      const newEmail = new Email({
        email,
      });
      await newEmail.save();
      await db.disconnect();
      return res.status(201).json({ message: "Email registered successfully" });
    }
  } catch (error) {
    await db.disconnect();
    return res.status(500).json({ message: "Something went wrong" });
  }
};
