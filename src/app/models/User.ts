import { Schema, model } from "mongoose";

const useSchema = new Schema({
    username: { type: String, required: true, unique: true, min: 4, lowercase: true },
    email: { type: String, unique: true, required: true, lowercase: true },
    password: { type: String, required: true  }
});

export default model('User', useSchema);