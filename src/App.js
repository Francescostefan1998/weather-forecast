import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomNavbar from "./components/CustomNavbar";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Forecast from "./components/Forecast";
import Video from "./components/Video";
import Contact from "./components/Contact";
import CityDetail from "./components/CityDetail";
import Settings from "./components/Settings";
import { useState, useEffect } from "react";
// you're going to use curly brackets in an import statement if
// the thing you're importing has not been exported as default
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
function App() {
  const [city, setCity] = useState("london");
  console.log(city);
  return (
    <BrowserRouter>
      <div className="coll">
        <div className="background"></div>
        <div className="over">
          <CustomNavbar />
          {/*AIzaSyDV15n9CXg32JcX8-dgqNbO5xDZvrBTDAc*/}
          <Routes>
            <Route element={<Home setCity={setCity} />} path="/" />
            <Route element={<Forecast city={city} />} path="/forecast" />
            <Route element={<Video />} path="/video" />
            <Route element={<Contact />} path="/contact" />
            <Route
              element={<CityDetail citym={city} />}
              path="/details/:placeId"
            />
            <Route element={<Settings />} path="/settings" />
            <Route element={<NotFound />} path="*" />
          </Routes>
        </div>

        <div className="footer">
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
