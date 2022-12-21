import { useState } from "react";
import { Container, Row, Col, Carousel, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import City from "../components/City";
import { useJsApiLoader, GoogleMap } from "@react-google-maps/api";
let center = { lat: 22, lng: 1 };

const Home = ({ setCity }) => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyDV15n9CXg32JcX8-dgqNbO5xDZvrBTDAc",
  });
  const [query, setQuery] = useState("London");
  const [city, setPlace] = useState(null);
  //
  if (city !== null) {
    center = { lat: city.coord.lat, lng: city.coord.lon };
  } else {
  }
  const baseEndpoint = "https://api.openweathermap.org/data/2.5/weather?q=";

  const handleChange = (e) => {
    setQuery(e.target.value);
    setCity(e.target.value);
    console.log(query);
  };
  let currentCity =
    baseEndpoint + query + "&appid=42372aeff5d6aa80307f012ca5f40f85";
  console.log(currentCity);
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        baseEndpoint + query + "&appid=42372aeff5d6aa80307f012ca5f40f85"
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        console.log(
          baseEndpoint + query + "&appid=42372aeff5d6aa80307f012ca5f40f85"
        );
        setPlace(data);
        console.log("VERIFICATION" + city);
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1>Check your city here</h1>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit} className="row1">
            <div className="search">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </div>
            <Form.Control
              className="formc"
              type="search"
              value={query}
              onChange={handleChange}
              placeholder="type and press Enter"
            />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {console.log(city)}
          {city && (
            <div
              className="mt-5
            "
              id="display-flex"
            >
              <div className="left-maps">
                <h3>Weather for {query}</h3>
                <h3>Today</h3>
                <h1>
                  {city.weather[0].main === "Clouds" ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      fill="currentColor"
                      class="bi bi-cloud-fill"
                      viewBox="0 0 40 40"
                    >
                      <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z" />
                    </svg>
                  ) : city.weather[0].main === "Clear" ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      fill="currentColor"
                      class="bi bi-brightness-high"
                      viewBox="0 0 40 40"
                    >
                      <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
                    </svg>
                  ) : city.weather[0].main === "Rain" ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      fill="currentColor"
                      class="bi bi-cloud-drizzle-fill"
                      viewBox="0 0 40 40"
                    >
                      <path d="M4.158 12.025a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm6 0a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm-3.5 1.5a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm6 0a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm.747-8.498a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 11H13a3 3 0 0 0 .405-5.973z" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      fill="currentColor"
                      class="bi bi-cloud-sun"
                      viewBox="0 0 40 40"
                    >
                      <path d="M7 8a3.5 3.5 0 0 1 3.5 3.555.5.5 0 0 0 .624.492A1.503 1.503 0 0 1 13 13.5a1.5 1.5 0 0 1-1.5 1.5H3a2 2 0 1 1 .1-3.998.5.5 0 0 0 .51-.375A3.502 3.502 0 0 1 7 8zm4.473 3a4.5 4.5 0 0 0-8.72-.99A3 3 0 0 0 3 16h8.5a2.5 2.5 0 0 0 0-5h-.027z" />
                      <path d="M10.5 1.5a.5.5 0 0 0-1 0v1a.5.5 0 0 0 1 0v-1zm3.743 1.964a.5.5 0 1 0-.707-.707l-.708.707a.5.5 0 0 0 .708.708l.707-.708zm-7.779-.707a.5.5 0 0 0-.707.707l.707.708a.5.5 0 1 0 .708-.708l-.708-.707zm1.734 3.374a2 2 0 1 1 3.296 2.198c.199.281.372.582.516.898a3 3 0 1 0-4.84-3.225c.352.011.696.055 1.028.129zm4.484 4.074c.6.215 1.125.59 1.522 1.072a.5.5 0 0 0 .039-.742l-.707-.707a.5.5 0 0 0-.854.377zM14.5 6.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z" />
                    </svg>
                  )}
                </h1>
                <h3>The weather today is {city.weather[0].main}</h3>
                <h3>Temp min: {city.main.temp_min}K</h3>
                <h3>Temp max: {city.main.temp_max}K</h3>
                <h3>Temp feels like: {city.main.feels_like}K</h3>
              </div>
              <div className="right-maps">
                <GoogleMap
                  center={center}
                  zoom={9}
                  mapContainerStyle={{ width: "100%", height: "100%" }}
                ></GoogleMap>
              </div>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
