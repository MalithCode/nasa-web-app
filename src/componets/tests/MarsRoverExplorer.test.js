import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import MarsRoverExplorer from "../MarsRoverExplorer";
/* eslint-disable */
// Importing testing functions from Jest and React Testing Library
import { describe, test, expect } from "@jest/globals";

describe("MarsRoverExplorer", () => {
  test("renders title correctly", () => {
    render(<MarsRoverExplorer />);
    const title = screen.getByText("Welcome to Mars Exploration!");
    expect(title).toBeInTheDocument();
  });

  test("fetches and displays rover data", async () => {
    // Mocking the fetch function

    global.fetch = jest.fn().mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce({
        photos: [
          {
            id: 1,
            img_src: "https://example.com/image.jpg",
            rover: { name: "Curiosity" },
            sol: 1000,
            camera: { full_name: "Mastcam" },
            earth_date: "2024-05-01",
            rover: { landing_date: "2012-08-06", total_photos: 100000 },
          },
        ],
      }),
    });

    render(<MarsRoverExplorer />);

    // Check if loading message is initially displayed
    expect(screen.getByText("Loading data from Mars...")).toBeInTheDocument();

    // Wait for rover data to be loaded
    const roverImage = await screen.findByAltText("Mars Rover Image");
    expect(roverImage).toBeInTheDocument();

    // Check if rover information is displayed
    expect(
      screen.getByText(/Meet the Martian Rover: Curiosity/)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Interesting Details from Mars Sol 1000/)
    ).toBeInTheDocument();
    expect(screen.getByText(/Image ID: 1/)).toBeInTheDocument();
    expect(screen.getByText(/Camera: Mastcam/)).toBeInTheDocument();
    expect(screen.getByText(/Martian Day \(Sol\): 1000/)).toBeInTheDocument();
    expect(screen.getByText(/Earth Date: 2024-05-01/)).toBeInTheDocument();
    expect(
      screen.getByText(
        /This rover, Curiosity, has been exploring Mars since 2012-08-06. It has captured a whopping 100000 images so far!/
      )
    ).toBeInTheDocument();
  });

  test("handles next and previous page navigation", async () => {
    // Mocking the fetch function
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue({ photos: [] }),
    });

    render(<MarsRoverExplorer />);

    // Simulate clicking next page button
    fireEvent.click(screen.getByTestId("next-page"));

    // Check if currentPage is incremented
    expect(screen.getByText("Loading data from Mars...")).toBeInTheDocument();

    // Simulate clicking previous page button
    fireEvent.click(screen.getByTestId("prev-page"));

    // Check if currentPage is decremented
    expect(screen.getByText("Loading data from Mars...")).toBeInTheDocument();
  });
});
