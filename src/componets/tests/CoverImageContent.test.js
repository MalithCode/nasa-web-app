import React from "react";
import { render, screen } from "@testing-library/react";
import CoverImageContent from "../CoverImageContent";

// Importing testing functions from Jest and React Testing Library
import { describe, test, expect } from "@jest/globals";

describe("CoverImageContent", () => {
  test("renders cover image", () => {
    render(<CoverImageContent />);
    const coverImg = screen.getByAltText("cover");
    expect(coverImg).toBeInTheDocument();
    expect(coverImg).toHaveAttribute("src", "../assets/img/cover.jpg");
  });

  test("renders title correctly", () => {
    render(<CoverImageContent />);
    const title = screen.getByText(/Embark on a Cosmic Journey with/);
    expect(title).toBeInTheDocument();
  });

  test("renders subtitle correctly", () => {
    render(<CoverImageContent />);
    const subtitle = screen.getByText(/Discover the Wonders of the Universe/);
    expect(subtitle).toBeInTheDocument();
  });
});
