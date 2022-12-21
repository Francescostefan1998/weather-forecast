import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  Button,
  FormControl,
} from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const CustomNavbar = () => {
  const location = useLocation();
  console.log("LOCATION PATHNAME", location.pathname);
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Link to="/">
        <Navbar.Brand>Weather Forecast</Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Link to="/" className="navbar-links">
            <div
              className={
                location.pathname === "/" ? "nav-link active" : "nav-link"
              }
            >
              Home
            </div>
          </Link>
          <Link to="/forecast" className="navbar-links">
            <div
              className={
                location.pathname === "/forecast"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Detail
            </div>
          </Link>

          <Link to="/contact" className="navbar-links">
            <div
              className={
                location.pathname === "/contact"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Contact
            </div>
          </Link>
          <Link to="/details/:placeId" className="navbar-links">
            <div
              className={
                location.pathname === "/details:placeId"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Forecast
            </div>
          </Link>
          <Link to="/settings" className="navbar-links">
            <div
              className={
                location.pathname === "/settings"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Settings
            </div>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
