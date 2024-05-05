import { GetMarsRover, GetAPOD } from "../NASAapi";
/* eslint-disable */

// Importing testing functions from Jest and React Testing Library
import { describe, test, expect } from "@jest/globals";

// Mocking fetch function
global.fetch = jest.fn();

describe("GetMarsRover", () => {
  test("fetches Mars Rover photos correctly", async () => {
    // Mock API response data
    const mockResponse = { photos: [{ id: 1, img_src: "image.jpg" }] };
    global.fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(mockResponse),
    });

    // Call the function with test parameters
    const result = await GetMarsRover(1, 10);

    // Assert fetch was called with correct URL
    expect(fetch).toHaveBeenCalledWith(
      "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=1&per_page=10&api_key=your_api_key"
    );

    // Assert result matches expected data
    expect(result).toEqual(mockResponse);
  });
});

describe("GetAPOD", () => {
  test("fetches Astronomy Picture of the Day correctly", async () => {
    // Mock API response data
    const mockResponse = {
      url: "apod_image.jpg",
      title: "APOD Title",
      explanation: "APOD Explanation",
    };
    global.fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(mockResponse),
    });

    // Call the function
    const result = await GetAPOD();

    // Assert fetch was called with correct URL
    expect(fetch).toHaveBeenCalledWith(
      "https://api.nasa.gov/planetary/apod?api_key=your_api_key"
    );

    // Assert result matches expected data
    expect(result).toEqual(mockResponse);
  });
});
