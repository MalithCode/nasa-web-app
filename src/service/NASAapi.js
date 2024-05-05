// Importing NASA API key from ConstVaribles file
import NASA_KEY from "../assets/ConstVaribles";

// Function to fetch Mars Rover photos from NASA API
const GetMarsRover = async (currentPage, perPage) => {
  console.log(NASA_KEY); // Logging NASA API key to console for debugging
  // Fetching Mars Rover photos from NASA API
  return await fetch(
    `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=${currentPage}&per_page=${perPage}&api_key=${NASA_KEY}`
  );
};

// Function to fetch Astronomy Picture of the Day (APOD) from NASA API
export const GetAPOD = async () => {
  console.log(NASA_KEY); // Logging NASA API key to console for debugging
  // Fetching APOD from NASA API
  return await fetch(`https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}`);
};

export default GetMarsRover; // Exporting GetMarsRover function
