import mongoose, { Schema, model, models } from 'mongoose';

const AnalysisSchema = new Schema({
  role: { type: String, required: true },
  skills: { type: [String], required: true },
  score: Number,
  matched: [String],
  missing: [String],
  createdAt: { type: Date, default: Date.now },
});

const Analysis = models.Analysis || model('Analysis', AnalysisSchema);

export default Analysis;