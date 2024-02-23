const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect(
      "mongodb+srv://lionel:1234@atlascluster.n0cgkrm.mongodb.net/memberEbenezer?retryWrites=true&w=majority"
    );
    console.log("Connected");
  } catch (error) {
    console.log(error);
  }
}

module.exports = { connect };
