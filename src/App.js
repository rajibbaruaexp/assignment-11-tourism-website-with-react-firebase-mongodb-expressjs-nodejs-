import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Booking from "./components/Booking/Booking";
import HomeWrap from "./components/HomeWrap/HomeWrap";
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
