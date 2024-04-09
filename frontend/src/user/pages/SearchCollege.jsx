import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SearchCollege.css";

const SearchCollege = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("name");
  const [searchResults, setSearchResults] = useState([]);

  const fetchData = async () => {
    try {
      if (filter === "name") {
        const response = await fetch(
          `/api/college/getCollageDataByName?name=${searchQuery}`
        );
        const data = await response.json();
        setSearchResults(data.collages); // Assuming collages is an array in the API response
      } else if (filter === "code") {
        const response = await fetch(
          `/api/college/getCollageDataByCode?code=${searchQuery}`
        );
        const data = await response.json();
        setSearchResults(data.collages); // Assuming collages is an array in the API response
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleFilterChange = (e) => {
     setFilter(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };

  return (
    <div className="container">
      <header className="header">
        <h1>Search Colleges</h1>
      </header>

      <form onSubmit={handleSubmit} className="search-container">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchInputChange}
          className="search-input"
        />
        <select
          value={filter}
          onChange={handleFilterChange}
          className="filter-select"
        >
          <option value="name">Name</option>
          <option value="code">Code</option>
        </select>
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      <div className="result-container">
        {searchResults.length > 0 ? (
          <table className="search-results-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Code</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {searchResults.map((result, index) => (
                <tr key={index}>
                  <td>{result.basicInfo.institution}</td>
                  <td>{result.basicInfo.CollageCode}</td>
                  <td>
                    <Link to={`/college_details/${result._id}`}>
                      <button className="details-button">Details</button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="no-results-message">No results found.</p>
        )}
      </div>
    </div>
  );
};

export default SearchCollege;
