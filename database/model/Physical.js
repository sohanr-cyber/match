import mongoose from 'mongoose'

const physicalSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      unique: true
    },
    mass: { type: number },
    gender: {
      type: String
    },
    height: {
      type: number
    },
    issue: {
      type: String
    },
    blood: { type: String },
    bodyType: { type: String },
    bodyColor: { type: String }
  },
  { timestamps: true }
)

const Physical =
  mongoose.models.Physical || mongoose.model('Physical', physicalSchema)
export default Physical
