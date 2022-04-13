const mongoose = require("mongoose");
require("dotenv/config");

mongoose.Promise = global.Promise;
mongoose
  .connect(process.env.MONGO_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Server connected with database cluster");
  })
  .catch((err) => {
    console.log("Error at connection cluster", err);
  });

  module.exports = mongoose;
