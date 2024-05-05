// test file for APODComponent
import React from "react";
import { render, screen } from "@testing-library/react";
import APODComponent from "../APODComponent";

// Importing testing functions from Jest and React Testing Library
import { describe, test, expect } from "@jest/globals";

describe("APODComponent", () => {
  test("renders title correctly", () => {
    render(<APODComponent />);
    expect(
      screen.getByText("Astronomy Picture of the Day")
    ).toBeInTheDocument();
  });

  test("fetches data and displays image", async () => {
    render(<APODComponent />);
    // Mocking API request here or using a library like MSW
    // Asserting that the image is displayed
    expect(await screen.findByAltText("cover")).toBeInTheDocument();
  });
});
