import axios from "axios";
import { message } from "antd";

export const adminLogin = (reqObj) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });

  try {
    const response = await axios.post("/admin/login", reqObj);
    localStorage.setItem("admin", JSON.stringify(response.data));
    message.success("Login Success");
    dispatch({ type: "LOADING", payload: false });
    setTimeout(() => {
      window.location.href = "/admin";
    }, 500);
  } catch (err) {
    console.log(err);
    message.error("Invalid Credintials");
    dispatch({ type: "LOADING", payload: false });
  }
};

export const adminRegister = (reqObj) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });

  try {
    const response = await axios.post("/admin/register", reqObj);
  
    message.success("Registered sucessfully");
    setTimeout(() => {
      window.location.href = "/adminlogin";
    }, 500);

    dispatch({ type: "LOADING", payload: false });
  } catch (err) {
    console.log(err);
    message.error("regitration failed");
    dispatch({ type: "LOADING", payload: false });
  }
};
