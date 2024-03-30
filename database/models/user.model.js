import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  clerkUserId: { type: String, required: true, unique: true },
  firstName: { type: String },
  lastName: { type: String },
});
const User = models.user || model("user", userSchema);
export default User;
