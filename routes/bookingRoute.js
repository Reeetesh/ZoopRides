const express = require("express");
const router = express.Router();
const Booking = require("../models/bookingModels");
const Car = require("../models/bikeModel");
const { v4: uuidv4 } = require("uuid");
var rand = require("random-key");

router.post("/bookbike", async (req, res) => {
  // const uid = await uuidv4();

  try {
    req.body.transactionId = uuidv4();
    const newBooking = new Booking(req.body);
    await newBooking.save();
    const car = await Car.findOne({ _id: req.body.car });
    car.bookedTimeSlots.push(req.body.bookedTimeSlots);
    await car.save();
    res.send("Your booking is successful");
  } catch (err) {
    console.log(err);
    return res.status(400).json(err);
  }
});

router.get("/getallbookings", async (req, res) => {
  try {
    const bookings = await Booking.find().populate("car");
    res.send(bookings);
  } catch (err) {
    return res.status(400).json(err);
  }
});

module.exports = router;
