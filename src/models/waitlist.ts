const mongoose = require("mongoose");

const waitListSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

const WaitListSchema =
  mongoose.models.WaitListSchema ||
  mongoose.model("WaitListSchema", waitListSchema);

export default WaitListSchema;
