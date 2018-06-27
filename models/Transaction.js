const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// NOTE: Could I just make it so the coin and purchase price are all that's required?
// If I record just the cash value I can use that to determine the amount of coins the user has
// depending on the current value of the coin.
// Actually, if we want the user to be able to view their transaction then listing the amount of coin
// purchased per transaction is still valuable information.  Probs get rid of coinID though.

// Insert user schema for Mongoose here
const TransactionSchema = new Schema({
  coin: {
    type: String,
    required: true
  },
  coinID: {
    type: String
  },
  purchasePrice: {
    type: String
  },
  purchaseAmount: {
    type: String
  }
});

const Transaction = mongoose.model("Transaction", TransactionSchema);

module.exports = Transaction;
