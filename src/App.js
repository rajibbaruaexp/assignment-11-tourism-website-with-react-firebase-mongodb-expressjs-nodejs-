import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Booking from "./components/Booking/Booking";
import Contact from "./components/Contact/Contact";
import HomeWrap from "./components/HomeWrap/HomeWrap";
import AddANewService from "./components/LoggedInUsersComponents/AddANewService/AddANewService";
import ManageAllBookings from "./components/LoggedInUsersComponents/ManageAllBookings/ManageAllBookings";
import MyBookings from "./components/LoggedInUsersComponents/MyBookings/MyBookings";
import Footer from "./components/shared/Footer/Footer";
import Header from "./components/shared/Header/Header";
import Login from "./components/shared/Header/Login/Login";
import PrivateRoute from "./components/shared/Header/Login/PrivateRoute";
import AuthProvider from "./context/AuthProvider";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <HomeWrap></HomeWrap>
            </Route>

            <Route exact path="/home">
              <HomeWrap></HomeWrap>
            </Route>

            <Route exact path="/about">
              <About></About>
            </Route>

            
            <Route exact path="/contact">
            <Contact></Contact>
            </Route>

            <PrivateRoute exact path="/my-bookings">
              <MyBookings></MyBookings>
            </PrivateRoute>

            <PrivateRoute exact path="/manage-all-bookings">
              <ManageAllBookings></ManageAllBookings>
            </PrivateRoute>

            <PrivateRoute exact path="/add-a-new-service">
              <AddANewService></AddANewService>
            </PrivateRoute>

            <PrivateRoute exact path="/tours/:id">
              <Booking></Booking>
            </PrivateRoute>

            <Route exact path="/login">
              <Login></Login>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
