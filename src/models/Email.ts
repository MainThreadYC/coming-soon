import mongoose, { Model, Schema } from "mongoose";
import { Email } from "@/interfaces";

export interface IEmail extends Email {}

const emailSchema = new Schema({
  email: { type: String, required: true },
});

const EmailModel: Model<IEmail> =
  mongoose.models.Email || mongoose.model("Email", emailSchema);

export default EmailModel;
