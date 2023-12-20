import mongoose from "mongoose";

const PersonalSchema = mongoose.Schema(
  {
    firstName: { type: String },
    lastName: { type: String },
    password: { type: String },
    gender: {
      type: String,
    },
    maritalStatus: {
      type: String,
    },

    bornAt: {
      type: String,
    },
  },
  { timestamps: true }
);

const Personal =
  mongoose.models.Personal || mongoose.model("Personal", PersonalSchema);
export default Personal;
