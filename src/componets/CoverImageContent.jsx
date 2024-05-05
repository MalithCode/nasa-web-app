// Importing necessary assets and components
import CoverImg from "../assets/img/cover.jpg"; // Importing cover image
import NavBar from "./NavBar"; // Importing NavBar component

// Component for the cover image and content
function CoverImageContent() {
  return (
    <>
      {/* Cover image */}
      <img src={CoverImg} className="cover-img" alt="cover" />

      {/* Navigation bar */}
      <NavBar />

      {/* Content */}
      <div className="position-absolute top-50 text-center w-100 text-white">
        {/* Title */}
        <h1 className="">
          Embark on a Cosmic Journey with{" "}
          {/* Highlighted text with blinking pipe symbol */}
          <span
            style={{
              color: "rgba(0, 204, 255, 0.76)",
            }}
          >
            GalaxySTD..
            <span style={{ animation: "blinkingText 1s infinite" }}>|</span>
          </span>
        </h1>

        {/* Subtitle */}
        <div className="w-75 text-center mx-auto">
          <h3>
            Discover the Wonders of the {/* Highlighted text */}
            <span
              style={{
                color: "rgba(73, 197, 228, 0.76)",
              }}
            >
              Universe
            </span>
            , Engage with Fellow {/* Highlighted text */}
            <span
              style={{
                color: "rgba(0, 204, 255, 0.76)",
              }}
            >
              Space Enthusiasts
            </span>
            , and Stay Updated on the Latest Celestial Adventures.
          </h3>
        </div>
      </div>
    </>
  );
}

export default CoverImageContent;
