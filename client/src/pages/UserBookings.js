import React, { useState, useEffect } from "react";
import DefaultLayout from "../components/DefaultLayout";
import { useDispatch, useSelector } from "react-redux";
import { getAllBookings } from "../redux/actions/bookingActions";
import { Col, Row } from "antd";
import Spinner from "../components/Spinner";
import moment from "moment";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
function UserBookings() {
  const dispatch = useDispatch();
  const { bookings } = useSelector((state) => state.bookingsReducer);
  const { loading } = useSelector((state) => state.alertsReducer);
  const user = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    dispatch(getAllBookings());
  }, []);

  return (
    <DefaultLayout>
      {loading && <Spinner />}
      <h3 className="text-center mt-2">My Bookings</h3>

      <Row justify="center" gutter={16}>
        <Col lg={18} sm={24}>
          {bookings
            .filter((o) => o.user === user._id)
            .map((booking) => {
              return (
                <Row
                  gutter={16}
                  className="p-4 mt-3 text-left userbooking"
                  data-aos="fade-up"
                  style={{ height: "180px" }}
                >
                  <Col lg={8} sm={24} style={{ fontSize: "15px" }}>
                    <p>
                      <b>{booking.car.name}</b>
                    </p>
                    <p>
                      Total hours : <b>{booking.totalHours}</b>
                    </p>
                    <p>
                      Rent per hour : ₹<b>{booking.car.rentPerHour}</b>
                    </p>
                    <p>
                      Total amount : ₹<b>{booking.totalAmount}</b>
                    </p>
                  </Col>

                  <Col lg={8} sm={24}>
                    <p>
                      Transaction Id : <b>{booking.transactionId}</b>
                    </p>
                    <p>
                      From: <b>{booking.bookedTimeSlots.from}</b>
                    </p>
                    <p>
                      To: <b>{booking.bookedTimeSlots.to}</b>
                    </p>
                    <p>
                      Date of booking:{" "}
                      <b>{moment(booking.createdAt).format("MMM DD yyyy")}</b>
                    </p>
                  </Col>

                  <Col lg={8} sm={24} className="text-right">
                    <img
                      src={booking.car.image}
                      height="140"
                      width="200"
                      className="p-2 "
                      alt=""
                      style={{ objectFit: "cover" }}
                    />
                  </Col>
                </Row>
              );
            })}
        </Col>
      </Row>
    </DefaultLayout>
  );
}

export default UserBookings;
