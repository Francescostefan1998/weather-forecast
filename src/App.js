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
// you're going to use curly brackets in an import statement if
// the thing you're importing has not been exported as default
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
function App() {
  return (
    <BrowserRouter>
      <div className="coll">
        <div className="background"></div>
        <div>
          <CustomNavbar />
          {/*AIzaSyDV15n9CXg32JcX8-dgqNbO5xDZvrBTDAc*/}
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Forecast />} path="/forecast" />
            <Route element={<Video />} path="/video" />
            <Route element={<Contact />} path="/contact" />
            <Route element={<CityDetail />} path="/details/:placeId" />
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
