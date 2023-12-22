import mongoose from 'mongoose'

const expectationSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      unique: true
    },
    profession: [
      {
        type: String
      }
    ],
    minheight: {
      type: Number
    },
    maxHeight: { type: Number },
    education: [{ type: String }],
    meritalStatus: [{ type: String }],
    skinColor: [
      {
        type: String
      }
    ],
    bodyType: [{ type: String }],

    bornAtFrom: {
      type: Date
    },
    bornAtTo: {
      type: Date
    },
    district: [{ type: String }],
    char: { type: String }
  },
  { timestamps: true }
)

const Expectation =
  mongoose.models.Expectation ||
  mongoose.model('Expectation', expectationSchema)
export default Expectation
