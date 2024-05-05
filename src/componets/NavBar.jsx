// Importing necessary modules and components
import { Link, useNavigate } from "react-router-dom"; // Importing Link component from react-router-dom
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap"; // Importing Navbar, NavbarBrand, Nav, NavItem, and NavLink components from Reactstrap
import Logo from "../assets/img/logo.png"; // Importing logo image
import { useEffect, useState } from "react"; // Importing useEffect and useState hooks from React
import { ClearSession } from "../service/AuthService";

// Component for the navigation bar
const NavBar = () => {
  // State variable to track scrolling
  const [isScorll, setIsScorll] = useState(false);

  const navigate = useNavigate();

  // Effect hook to handle scrolling
  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      const currentPosition = window.pageYOffset; // Get current scroll position
      // Change the color based on the scroll position
      if (currentPosition > 100) {
        setIsScorll(true); // Change to your desired color when scrolled
      } else {
        setIsScorll(false); // Change to your default color when not scrolled
      }
    };

    const status = localStorage.getItem("status");
    if (status !== "success") {
      handleLogOut();
    }

    // Event listener for scroll
    window.addEventListener("scroll", handleScroll);
    // Cleanup function to remove event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLogOut = () => {
    ClearSession();
    navigate("/login");
  };

  // JSX content
  return (
    <Navbar dark expand="md" className="fixed-top mt-3 mx-auto">
      {/* Navbar brand with logo */}
      <NavbarBrand
        style={{
          borderRadius: "100%",
          backgroundColor: isScorll ? "rgba(7, 7, 7, 0.685)" : "", // Dynamic background color based on scroll position
        }}
        href="/"
      >
        <img className="logo-img" src={Logo} alt="logo" />
      </NavbarBrand>
      {/* Navigation links */}
      <Nav
        className="w-nav-100 mx-sm-0 mx-4 rounded-4"
        style={
          isScorll
            ? {
                backgroundColor: "rgba(140, 54, 238, 1)", // Background color when scrolled
              }
            : {
                backgroundColor: "rgba(0, 204, 255, 0.76)", // Default background color
              }
        }
        navbar
      >
        <div className="d-flex mx-auto">
          {/* Home link */}
          <NavItem>
            <NavLink className="fs-4 fw-bold" tag={Link} to="/">
              Home
            </NavLink>
          </NavItem>
          {/* About Us link */}
          <NavItem>
            <NavLink className="fs-4 fw-bold" tag={Link} to="/about">
              About Us
            </NavLink>
          </NavItem>
        </div>
        <span
          onClick={handleLogOut}
          className="cursor-pointer text-danger d-flex align-items-center justify-content-end fs-5 fw-bold me-3 px-3 rounded-3"
        >
          LogOut
        </span>
      </Nav>
    </Navbar>
  );
};

export default NavBar; // Exporting NavBar component
