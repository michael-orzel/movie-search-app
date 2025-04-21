import { useState } from "react";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const apiKey = import.meta.env.VITE_API_KEY;
  const apiUrl = import.meta.env.VITE_API_URL;

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery) return;

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${apiUrl}?s=${searchQuery}&apikey=${apiKey}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();

      if (data.Response === "True") {
        setMovies(data.Search);
      } else {
        setError(data.Error);
        setMovies([]);
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
      setMovies([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#1C2526] flex flex-col items-center p-8 px-12">
      <h1 className="text-3xl text-[#FFFFE0] font-bold mb-6">Movie Search App</h1>

      <form onSubmit={handleSearch} className="w-55 sm:w-full max-w-md mb-8">
        <div className="flex gap-2">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for a movie..."
            className="flex-1 p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FFF099]"
          />
          <button
            type="submit"
            className="text-[#1C2526] bg-[#FFF099] px-4 py-2 rounded-lg hover:bg-[#FFF9CC] transition"
            disabled={loading}
          >
            {loading ? "Searching..." : "Search"}
          </button>
        </div>
      </form>

      {error && <p className="text-[#FFECEC] mb-4">{error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-5xl">
        {movies.map((movie) => (
          <div
            key={movie.imdbID}
            className="bg-[#FFFFF0] p-4 rounded-lg shadow-md hover:shadow-lg transition"
          >
            <img
              src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/150"}
              alt={movie.Title}
              className="w-full h-64 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold text-[#1C1C14]">{movie.Title}</h2>
            <p className="text-[#24241C]">{movie.Year}</p>
          </div>
        ))}
      </div>

      {movies.length === 0 && !loading && !error && (
        <p className="text-[#E8EBE0]">No movies found. Start searching!</p>
      )}
    </div>
  );
}

export default App;
