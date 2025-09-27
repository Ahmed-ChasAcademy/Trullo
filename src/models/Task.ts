import { Schema, Model } from "mongoose";

const TaskSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  status: {
    type: String,
    enum: ["to-do", "in progress", "blocked", "done"],
    default: "to-do"
  },
  finishedAt: { type: Date } 
}, { timestamps: true }); 
