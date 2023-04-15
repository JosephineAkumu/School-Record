const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Records = new Schema(
  {
    votehead: {
      type: String,
    },
    income: {
      type: String,
    },
    expenditure: {
      type: String,
    },
  },
  {
    collection: "records",
  }
);

module.exports = mongoose.model("Records", Records);
