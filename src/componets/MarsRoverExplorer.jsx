// Importing necessary modules and components
import { useState, useEffect } from "react"; // Importing useState and useEffect hooks from React
import GetMarsRover from "../service/NASAapi"; // Importing Mars Rover API service
import { Card, CardBody, Col, Row } from "reactstrap"; // Importing Card, CardBody, Col, and Row components from Reactstrap
import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io"; // Importing arrow icons from React Icons

// Component for displaying Mars Rover images and information
const MarsRoverExplorer = () => {
  // State variables
  const [roverData, setRoverData] = useState([]); // State to store Mars Rover data
  const [currentPage, setCurrentPage] = useState(1); // State to store current page number

  // Fetch data from Mars Rover API when component mounts or currentPage changes
  useEffect(() => {
    // Function to fetch data
    const fetchData = async () => {
      const response = await GetMarsRover(currentPage, 2); // Pass currentPage to API function
      const data = await response.json(); // Convert response to JSON format
      console.log(data); // Log fetched data to console
      setRoverData(data.photos); // Update state with fetched rover data
    };

    fetchData(); // Call fetchData function
  }, [currentPage]); // Run effect when currentPage changes

  // Function to handle next page navigation
  const handleNextPage = () => {
    setCurrentPage(currentPage + 1); // Increment currentPage
  };

  // Function to handle previous page navigation
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1); // Decrement currentPage if it's greater than 1
    }
  };

  // JSX content
  return (
    <div>
      {/* Title */}
      <h1 className="my-5 ms-5 f-pink">Welcome to Mars Exploration!</h1>

      {/* Displaying rover data */}
      <Row>
        {/* Mapping over roverData and displaying rover information */}
        {roverData && roverData.length > 0 ? (
          roverData.map((rover, key) => (
            <Row className="my-3" key={key}>
              <Card className="mx-auto w-75 rounded-5 shadow-lg bg-dark text-white">
                <CardBody>
                  <Row className="w-100">
                    {/* Displaying rover image */}
                    <Col className="p-2" lg={6}>
                      <img
                        className="w-100 rounded-5"
                        src={rover.img_src}
                        alt="Mars Rover Image"
                      />
                    </Col>
                    {/* Displaying rover information */}
                    <Col lg={6}>
                      <h2 className="mt-4 f-blue ">
                        Meet the Martian Rover: {rover.rover.name}
                      </h2>
                      {/* Rover information */}
                      {/* eslint-disable */}
                      <p className="fs-4">
                        Curious about Mars? You're in luck! Rovers are like
                        remote-controlled vehicles that explore the surface of
                        the Red Planet, sending back images and information to
                        help scientists learn more about Mars. Today, we'll be
                        exploring an image captured by the {rover.rover.name}{" "}
                        rover.
                      </p>

                      {/* Mars sol information */}
                      <h2 className="mt-4 f-perpal">
                        Interesting Details from Mars Sol {rover.sol}
                      </h2>
                      {/* Rover details */}
                      <ul className="fs-4">
                        <li>Image ID: {rover.id}</li>
                        <li>Camera: {rover.camera.full_name}</li>
                        <li>
                          Martian Day (Sol): {rover.sol} (A Martian day, or sol,
                          is slightly longer than an Earth day.)
                        </li>
                        <li>Earth Date: {rover.earth_date}</li>
                        <li>
                          This rover, {rover.rover.name}, has been exploring
                          Mars since {rover.rover.landing_date}. It has captured
                          a whopping {rover.rover.total_photos} images so far!
                        </li>
                      </ul>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Row>
          ))
        ) : (
          // Displaying loading message if roverData is empty
          <p>Loading data from Mars...</p>
        )}
      </Row>

      {/* Pagination controls */}
      {/* Displaying next and previous page buttons */}
      <div className="d-flex justify-content-center align-items-center hp-80">
        <IoIosArrowDropleft className="icon-button" onClick={handlePrevPage} />{" "}
        {/* Previous page button */}
        <IoIosArrowDropright
          className="icon-button"
          onClick={handleNextPage}
        />{" "}
        {/* Next page button */}
      </div>
    </div>
  );
};

export default MarsRoverExplorer; // Exporting MarsRoverExplorer component
