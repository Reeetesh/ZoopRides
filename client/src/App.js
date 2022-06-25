import { Routes, Route, BrowserRouter, Redirect } from "react-router-dom";
import BookingBike from "./pages/BookingBike";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "antd/dist/antd.css";
import UserBookings from "./pages/UserBookings";
import AdminHome from "./pages/AdminHome";
import AdminLogin from "./pages/AdminLogin";
import AdminRegister from "./pages/AdminRegister";
import AddBike from "./pages/AddBike";
import EditBike from "./pages/EditBike";

function App() {
  const user = localStorage.getItem("user");
  const admin = localStorage.getItem("admin");
  return (
    <div className="App">
      <BrowserRouter>
        <ProtectedRouteUser path="/" exact component={Home} />
        <ProtectedRouteAdmin path="/admin" exact component={AdminHome} />
        <ProtectedRouteAdmin path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/adminlogin" exact component={AdminLogin} />
        <Route path="/register" exact component={Register} />
        <Route path="/adminregister" exact component={AdminRegister} />
        <ProtectedRouteUser
          path="/booking/:carid"
          exact
          component={BookingBike}
        />
        <ProtectedRouteUser
          path="/userbookings"
          exact
          component={UserBookings}
        />
        <ProtectedRouteAdmin path="/addbike" exact component={AddBike} />
        <ProtectedRouteAdmin
          path="/editbike/:carid"
          exact
          component={EditBike}
        />
      </BrowserRouter>
    </div>
  );
}

export default App;

export function ProtectedRouteUser(props) {
  if (localStorage.getItem("user")) {
    return <Route {...props} />;
  } else if (!localStorage.getItem("admin")) {
    return <Redirect to="/login" />;
  }
}

export function ProtectedRouteAdmin(props) {
  if (localStorage.getItem("admin")) {
    return <Route {...props} />;
  } else if (!localStorage.getItem("user")) {
    return <Redirect to="/adminlogin" />;
  }
}
