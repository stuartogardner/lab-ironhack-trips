const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tripSchema = new Schema({
  userID: { type: Schema.Types.ObjectId, ref: 'User' },
  friends: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  tripDestination: String,
  tripReview: String,
  tripPhotoPath: String,
  tripPhotoName: String,
});

const Trip = mongoose.model("Trip", tripSchema);

module.exports = Trip;
