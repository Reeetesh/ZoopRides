const express = require("express");
const app = express();
const dbConnection = require("./db");
const port = process.env.PORT || 5000;
app.use(express.json());
var cors = require("cors");

app.use(cors());

const AdminLoginRoute = require("./routes/adminLogin");
const UserRoute = require("./routes/user");
const carsRoute = require("./routes/bikes");
const BookingRoute = require("./routes/bookingRoute");

app.use("/api/bikes/", carsRoute);
app.use("/api/users/", UserRoute);
app.use("/api/bookings/", BookingRoute);
app.use("/api/admin/", AdminLoginRoute);

app.get("/", (req, res) => res.send("hello bubu"));

app.listen(port, () => console.log(`server running on port ${port}`));
