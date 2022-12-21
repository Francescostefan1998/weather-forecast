import { useState, useEffect } from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import { useDispatch } from "react-redux";

const CityDetail = ({ citym }) => {
  const [city, setPlace] = useState(null);
  const [query, setQuery] = useState(citym);
  const [classNotFix, setClassNotFix] = useState("discoverMoreStyle");
  const [classNotFixNewBar, setClassNotFixNewBar] = useState("position-not");

  console.log(city);
  const baseEndpoint = "https://api.openweathermap.org/data/2.5/weather?q=";

  const handleChange = (e) => {
    setQuery(e.target.value);
    console.log(query);
  };
  let currentCity =
    baseEndpoint + query + "&appid=42372aeff5d6aa80307f012ca5f40f85";
  console.log(currentCity);
  const handleSubmit = async (e) => {
    try {
      const response = await fetch(
        baseEndpoint + citym + "&appid=42372aeff5d6aa80307f012ca5f40f85"
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        console.log(
          baseEndpoint + citym + "&appid=42372aeff5d6aa80307f012ca5f40f85"
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

  useEffect(() => {
    // Attach the event listener to the window object
    window.addEventListener("scroll", handleScroll);
    handleSubmit();

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [citym]);
  const handleScroll = () => {
    // Get the current scroll position
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    console.log(scrollTop);
    if (scrollTop > 5) {
      setClassNotFix("position-fixed-sidebar");
      setClassNotFixNewBar("position-fixed");
    } else {
      setClassNotFix("discoverMoreStyle");
      setClassNotFixNewBar("position-not");
    }
    // Check if the user has scrolled to the point where you want to change the class
  };
  return (
    <Container className="ov-scroll">
      <h1>Forecast</h1>
      <h2 className="mt-5 mb-4">For Tomorrow:</h2>
      {city && (
        <div className="relative-p">
          <div className="enter-on-scroll mt-5">
            The weather in {citym} will be {city.weather[0].description}.
          </div>
          <div className="enter-on-scroll mt-5">
            The average temperature will be {city.main.temp}K.
          </div>
          <div className="enter-on-scroll mt-5">
            The min temperature will be {city.main.temp_min}K.
          </div>
          <div className="enter-on-scroll mt-5">
            The temperature feels like {city.main.feels_like}K.
          </div>
          <div className="enter-on-scroll mt-5">
            The max temperature will be {city.main.temp_max}K.
          </div>
          <div className="enter-on-scroll mt-5">
            The pressure will be {city.main.pressure}.
          </div>
          <div className="enter-on-scroll mt-5">Visibility: clear.</div>
          <div className="enter-on-scroll mt-5">
            The humidity will be {city.main.humidity}%.
          </div>

          <div className="enter-on-scroll mt-5">
            The wind speed will be {city.wind.speed}.
          </div>
          <div className="image-absolute" id={classNotFixNewBar}>
            <img
              src="https://th.bing.com/th/id/R.870364ca0310a32201dac96bc6bbf634?rik=avlGelQyMnxpng&pid=ImgRaw&r=0"
              alt="b"
            />
          </div>
          <div className="image-absolute-cloud" id={classNotFix}>
            <img
              src="https://th.bing.com/th/id/R.6b69240c450bf7c97fce6da20ccfdc3f?rik=xZ%2fAxDggeSUaKA&riu=http%3a%2f%2fcliparts.co%2fcliparts%2f5iR%2fopX%2f5iRopXria.png&ehk=z6RSidtYmVsOfXhJ1T0gjg8SLiHCaVbqD0cQSeSt3w4%3d&risl=&pid=ImgRaw&r=0"
              alt="b"
            />
          </div>
        </div>
      )}
    </Container>
  );
};

export default CityDetail;
