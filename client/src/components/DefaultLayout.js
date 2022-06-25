import React from "react";
import { Menu, Dropdown, Button, Space, Row, Col } from "antd";
import { Link } from "react-router-dom";
import "../index.css";
import Footer from "./footer/Footer";

function DefaultLayout(props) {
  const user = JSON.parse(localStorage.getItem("user"));
  const admin = JSON.parse(localStorage.getItem("admin"));
  const menu = (
    <Menu>
      <Menu.Item key={1}>
        <a href="/">Home</a>
      </Menu.Item>
      {user && (
        <Menu.Item key={2}>
          <a href="/userbookings">Bookings</a>
        </Menu.Item>
      )}
      {admin && (
        <Menu.Item key={3}>
          <a href="/admin">Admin</a>
        </Menu.Item>
      )}

      {user && (
        <Menu.Item
          key={4}
          onClick={() => {
            // localStorage.removeItem("user");
            localStorage.clear();
            window.location.href = "/login";
          }}
        >
          <li style={{ color: "tomato" }}>Logout</li>
        </Menu.Item>
      )}
      {admin && (
        <Menu.Item
          key={5}
          onClick={() => {
            // localStorage.removeItem("admin");
            localStorage.clear();
            window.location.href = "/adminlogin";
          }}
        >
          <li style={{ color: "tomato" }}>Logout</li>
        </Menu.Item>
      )}
    </Menu>
  );
  return (
    <div>
      <div className="header">
        <Row gutter={16} justify="center">
          <Col lg={20} sm={24} xs={24}>
            <div className="d-flex justify-content-between">
              <h1>
                <b>
                  <Link to="/" style={{ color: "#f1c40f" }}>
                    Z<i className="fa-solid fa-person-biking"></i>pRides
                  </Link>
                </b>
              </h1>

              <Dropdown overlay={menu} placement="bottom" className="mt-2">
                <Button>{user ? user.username : admin.username}</Button>
              </Dropdown>
            </div>
          </Col>
        </Row>
      </div>
      <div className="content">{props.children}</div>

      <div className="footer text-center">
        {/* <hr style={{ backgroundColor: "#f1c40f", height: "1px" }} />

        <p>
          Made with ❤️ by Reeetesh{"   "}
          <i class="fa-solid fa-user-astronaut" style={{ color: "tomato" }}></i>
        </p>
        <p></p> */}
        <Footer></Footer>
      </div>
    </div>
  );
}

export default DefaultLayout;
