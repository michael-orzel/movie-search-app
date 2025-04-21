/* import React from 'react';
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import App from "../App";

// Mock the fetch API
global.fetch = jest.fn();

describe("App Unit Tests", () => {

  beforeEach(() => {
    // Reset fetch mock before each test
    fetch.mockClear();

    // Mock Vite's import.meta.env
    import.meta.env = {
      VITE_API_KEY: "4b48b85a",
      VITE_API_URL: "http://www.omdbapi.com/",
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('accesses VITE_API_KEY from import.meta.env', () => {
    const apiKey = import.meta.env.VITE_API_KEY;

    console.log('jest.setup.js is running');

    expect(apiKey).toBeDefined();
    expect(apiKey).toMatch(/^(abc123|test-api-key)$/); // Matches .env or fallback
  });
  
  it('applies Tailwind CSS to the button', () => {
    render(<App />);

    const button = screen.getByText("Search");

    expect(button).toHaveClass("bg-[#FFF099]");
    expect(button).toHaveClass("text-[#1C2526]");
  });

  test("renders the app title", () => {
    render(<App />);

    const heading = screen.getByText("Movie Search App");
    expect(heading).toBeInTheDocument();
  });

  test("renders search input and button", () => {
    render(<App />);
    
    const input = screen.getByPlaceholderText("Search for a movie...");
    const button = screen.getByRole("button", { name: "Search" });

    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  test("displays loading state when searching", async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve({ Response: "True", Search: [] }),
    });

    render(<App />);
    const input = screen.getByPlaceholderText("Search for a movie...");
    const button = screen.getByRole("button", { name: "Search" });

    fireEvent.change(input, { target: { value: "Batman" } });
    fireEvent.click(button);

    expect(screen.getByText("Searching...")).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.queryByText("Searching...")).not.toBeInTheDocument();
    });
  });

  test("displays movies when search is successful", async () => {
    const mockMovies = [
      { imdbID: "tt123", Title: "Batman Begins", Year: "2005", Poster: "poster_url" },
      { imdbID: "tt456", Title: "The Dark Knight", Year: "2008", Poster: "poster_url" },
    ];
    fetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve({ Response: "True", Search: mockMovies }),
    });

    render(<App />);
    const input = screen.getByPlaceholderText("Search for a movie...");
    const button = screen.getByRole("button", { name: "Search" });

    fireEvent.change(input, { target: { value: "Batman" } });
    fireEvent.click(button);

    await waitFor(() => {
      expect(screen.getByText("Batman Begins")).toBeInTheDocument();
      expect(screen.getByText("The Dark Knight")).toBeInTheDocument();
      expect(screen.getByText("2005")).toBeInTheDocument();
      expect(screen.getByText("2008")).toBeInTheDocument();
    });
  });

  test("displays error when API returns an error", async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve({ Response: "False", Error: "Movie not found!" }),
    });

    render(<App />);
    const input = screen.getByPlaceholderText("Search for a movie...");
    const button = screen.getByRole("button", { name: "Search" });

    fireEvent.change(input, { target: { value: "InvalidMovie" } });
    fireEvent.click(button);

    await waitFor(() => {
      expect(screen.getByText("Movie not found!")).toBeInTheDocument();
    });
  });

  test("displays error on network failure", async () => {
    fetch.mockRejectedValueOnce(new Error("Network error"));

    render(<App />);
    const input = screen.getByPlaceholderText("Search for a movie...");
    const button = screen.getByRole("button", { name: "Search" });

    fireEvent.change(input, { target: { value: "Batman" } });
    fireEvent.click(button);

    await waitFor(() => {
      expect(screen.getByText("Something went wrong. Please try again.")).toBeInTheDocument();
    });
  });

  test("does not fetch if search query is empty", async () => {
    render(<App />);
    const button = screen.getByRole("button", { name: "Search" });

    fireEvent.click(button);

    expect(fetch).not.toHaveBeenCalled();
  });

  test("displays placeholder text when no movies are found initially", () => {
    render(<App />);

    const placeholderNotification = screen.getByText("No movies found. Start searching!");
    expect(placeholderNotification).toBeInTheDocument();
  });
}); */
