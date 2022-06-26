const mongoose = require("mongoose");

function connectDB() {
  mongoose.connect(
    "mongodb+srv://r1tesh:1508@cluster0.rllyd7m.mongodb.net/car_rental?retryWrites=true&w=majority",
    { useUnifiedTopology: true, useNewUrlParser: true }
  );

  const connection = mongoose.connection;

  connection.on("connected", () => {
    console.log("Mongo DB Connection Successfull");
  });

  connection.on("error", () => {
    console.log("Mongo DB connection Error");
  });
}

connectDB();

module.exports = mongoose;
