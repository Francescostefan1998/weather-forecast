import { useState, useEffect } from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";

const Forecast = ({ city }) => {
  console.log(city);
  const API_KEY = "xyr5cQepA42ZsYQGvdQU81uC1QASKpsrC5okEqlN8V8";
  const [image, setImage] = useState(null);
  console.log(image);
  async function searchCityImages() {
    try {
      const response = await fetch(
        `https://api.unsplash.com/search/photos?query=${city}&client_id=${API_KEY}`
      );
      const data = await response.json();
      const images = data.results;
      setImage(images[0]);
      console.log(images);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    searchCityImages();
  }, [city]);

  return (
    <Container>
      <h1>Forecast</h1>
      <div id="main-big-image">
        {image && <img alt="img" src={image.urls.raw} />}
      </div>
    </Container>
  );
};

export default Forecast;
