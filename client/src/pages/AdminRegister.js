import React from "react";
// import DefaultLayout from "../components/DefaultLayout";
import { Row, Col, Form, Input } from "antd";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { adminRegister } from "../redux/actions/adminActions";
import AOS from "aos";
import Spinner from "../components/Spinner";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

function Register() {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.alertsReducer);
  function onFinish(values) {
    dispatch(adminRegister(values));
    console.log(values);
  }
  return (
    <div className="login">
      {loading && <Spinner />}
      <Row gutter={16} className="d-flex align-items-center">
        <Col lg={16} style={{ position: "relative" }}>
          <img
            src={require("../images/bike.png")}
            alt=""
            className="w-100"
            data-aos="slide-left"
            data-aos-duration="2000"
          />

          <h1 className="login-logo">
            Z<i className="fa-solid fa-person-biking" />
            pRides
          </h1>
        </Col>
        <Col lg={8} className="text-left p-5">
          <Form
            layout="vertical"
            className="login-form p-5"
            onFinish={onFinish}
          >
            <h1>Admin Registeration</h1>
            <hr />
            <Form.Item
              name="username"
              label="Username"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>

            <Form.Item name="email" label="Email" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item name="phone" label="Phone" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item
              name="password"
              label="Password"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="cpassword"
              label="Confirm Password"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>

            <button className="btn1 mt-2 mb-3">Register</button>
            <br />
            <Link to={"/login"}>
              <p className="mt-2">Click here to Login as admin</p>
            </Link>
            <br />

            <Link to={"/register"}>
              <p className="mt-2">Click here to register as user</p>
            </Link>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default Register;
