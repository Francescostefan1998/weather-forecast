import { useState, useEffect } from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import Home from "../components/Home";
import { useDispatch } from "react-redux";

const City = ({ cityPath }) => {
  const [city, setPlace] = useState(null);

  const fetchCity = async (e) => {
    try {
      const response = await fetch(cityPath);
      if (response.ok) {
        const data = await response.json();
        console.log("Fetched" + data);

        setPlace(data);
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchCity();
  }, [cityPath]);

  return (
    <Container>
      <h3>{city.main.temp}</h3>
      <h3></h3>
      <h3></h3>
    </Container>
  );
};

export default City;
