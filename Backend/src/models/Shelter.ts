

import mongoose, { Schema, Document } from 'mongoose';

// Interface defining the shelter document structure
export interface IShelter extends Document {
  shelter_name: string;
  location: string;
  contact: string;
  active_inactive: string;
  ratings: number;
  slogan: string;
  scr:string;
}

// Define the Shelter schema with required fields
const shelterSchema: Schema = new Schema({
  shelter_name: { type: String, required: true },
  location: { type: String, required: true },
  contact: { type: String, required: true },
  active_inactive: { type: String, required: true },
  ratings: { type: Number, required: true },
  slogan: { type: String, required: true },
  src: { type: String, required: true },
});

// Create the model using the schema and interface
export default mongoose.model<IShelter>('Shelter', shelterSchema);
