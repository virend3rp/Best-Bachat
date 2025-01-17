import mongoose, { Schema, Document } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Define the types for the user document
interface IUser extends Document {
  username: string;
  email: string;
  fullName: string;
  avatar: string;
  favorites: mongoose.Types.ObjectId[];
  password: string;
  
  // Instance methods
}

// Define the user schema
const userSchema = new Schema<IUser>(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    fullName: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    avatar: {
      type: String, // cloudinary URL
      required: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    
  },
  { timestamps: true }
);




// Create and export the model
const User = (mongoose.models.User as mongoose.Model<IUser>) || mongoose.model<IUser>("User",userSchema);
export { User };
