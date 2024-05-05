import { useState, useEffect } from "react";
import { GetAPOD } from "../service/NASAapi";
import { Row } from "reactstrap";

function APODComponet() {
  // State to store APOD data
  const [data, setData] = useState({});

  // Function to fetch APOD data from NASA API
  const fetchData = async () => {
    const response = await GetAPOD(); // Fetch data from API
    const data = await response.json(); // Convert response to JSON format
    console.log("apod ", data);
    setData(data); // Update state with fetched data
  };

  // useEffect hook to fetch data when component mounts
  useEffect(() => {
    fetchData(); // Fetch data on component mount
  }, []);

  return (
    <>
      {/* Title */}
      <Row className="mt-5 ms-5 f-pink">
        <h2> Astronomy Picture of the Day</h2>
      </Row>

      {/* APOD content */}
      {data ? (
        <Row className="mo-5 position-relative">
          {/* APOD image */}
          <img className="url-img" src={data.url} alt="cover" />
          {/* APOD title and explanation */}
          <div className="position-absolute t-50 text-center w-100 text-white">
            <p className="h1">
              {/* Blinking pipe symbol */}
              <span
                className="f-perpal"
                style={{ animation: "blinkingText 1s infinite" }}
              >
                |
              </span>{" "}
              {/* APOD title */}
              <span
                style={{
                  color: "rgba(0, 204, 255, 0.76)",
                }}
              >
                {data.title}
              </span>{" "}
              {/* Blinking pipe symbol */}
              <span
                className="f-pink"
                style={{ animation: "blinkingText 1s infinite" }}
              >
                |
              </span>
            </p>
            {/* APOD explanation */}
            <div className="w-res-75 text-center mx-auto">
              <p className="h3 t-black">{data.explanation}</p>
            </div>
          </div>
        </Row>
      ) : (
        // Loading indicator
        "Loading.. . ."
      )}
    </>
  );
}

export default APODComponet;
