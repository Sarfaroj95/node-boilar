const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mainuserSchema = new Schema({
  first_name: {
    type: String,
    min: [4, "Too short, short 4 character"],
    max: [32, "To long, Max is 32 character "]
  },
  last_name: {
    type: String,
    min: [4, "Too short, short 4 character"],
    max: [32, "To long, Max is 32 character "]
  },

  email: {
    type: String,
    min: [4, "Too short, short 4 character"],
    max: [32, "To long, Max is 32 character "],
    unique: true,
    lowercase: true,
    //	require: 'Email is require',
    match: [/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/]
  },

  password: {
    type: String,
    min: [4, "Too short, short 4 character"],
    max: [32, "To long, Max is 32 character "]
    //	require: 'password is required'
  }
});

module.exports = mongoose.model("Mainuser", mainuserSchema);
