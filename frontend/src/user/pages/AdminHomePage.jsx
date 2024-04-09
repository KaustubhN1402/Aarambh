import React, { useState, useEffect } from "react";
import { Link ,useParams } from "react-router-dom";
import "./Homepage.css"
const CollegeList = () => {
  const [colleges, setColleges] = useState([]);
  const [filteredColleges, setFilteredColleges] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchBasis, setSearchBasis] = useState("name"); // Default search basis
  const { id } = useParams();
   const handleLogout = async () => {
     try {
       console.log("Button Clicked");
       const response = await fetch("/api/user/logout", {
         method: "POST",
         headers: {
           "Content-Type": "application/json",
         },
       });

       if (response.ok) {
         // If logout successful, clear token from local storage and redirect
         localStorage.removeItem("token");
         window.location.href = "/login"; // Redirect to login page
       } else {
         // Handle logout failure
         console.error("Logout failed");
       }
     } catch (error) {
       // Handle error
       console.error("Error occurred during logout:", error);
     }
   };
  useEffect(() => {
    const fetchColleges = async () => {
      try {
        // Fetch all colleges from the API
        const response = await fetch("/api/college/getAllColleges");
        if (!response.ok) {
          throw new Error("Failed to fetch colleges");
        }
        const data = await response.json();
        setColleges(data.collages);
      } catch (error) {
        console.error("Error fetching colleges:", error);
      }
    };

    fetchColleges();
  }, []);

  useEffect(() => {
    // Filter colleges based on search query and basis
    const filtered = colleges.filter((college) => {
      if (searchBasis === "name") {
        return college.basicInfo.institution
          .toLowerCase()
          .includes(searchQuery.toLowerCase());
      } else if (searchBasis === "code") {
        return college.basicInfo.CollageCode
          .toLowerCase()
          .includes(searchQuery.toLowerCase());
      }
      return true; // Default to showing all colleges if search basis is not selected
    });
    setFilteredColleges(filtered);
  }, [colleges, searchQuery, searchBasis]);

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchBasisChange = (e) => {
    setSearchBasis(e.target.value);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this college?")) {
      try {
        const response = await fetch(`/api/college/delete/${id}`, {
          method: "DELETE",
        });
        if (!response.ok) {
          throw new Error("Failed to delete college");
        }
        // Remove the deleted college from the filtered list
        setFilteredColleges(
          filteredColleges.filter((college) => college.id !== id)
        );
      } catch (error) {
        console.error("Error deleting college:", error);
      }
    }
  };

  return (
    <div>
      <header className="header">
        <img src="./images/logo.jpg" alt=" " className="logo" />
        <nav className="navigation">
          <ul>
            <li>
              <Link to={`/admin/${id}/dates`}>Important Dates</Link>
            </li>
            <li>
              <Link to="/add-college">Add College</Link>
            </li>
            <li>
              <button onClick={handleLogout}>Logout</button>{" "}
              {/* Use button element */}
            </li>
          </ul>
        </nav>
      </header>
      <h2>Colleges</h2>
      <div>
        <label>
          Search by:
          <select value={searchBasis} onChange={handleSearchBasisChange}>
            <option value="name">Name</option>
            <option value="code">Code</option>
          </select>
        </label>
      </div>
      <input
        type="text"
        placeholder={`Search by ${searchBasis === "name" ? "name" : "code"}`}
        value={searchQuery}
        onChange={handleSearchInputChange}
      />
      <ul>
        {filteredColleges.map((college) => (
          <li key={college.id}>
            <p>Name: {college.basicInfo.institution}</p>
            <p>Code: {college.basicInfo.CollageCode}</p>
            <Link to={`/edit/${college.id}`}>
              <button>Edit</button>
            </Link>
            <button onClick={() => handleDelete(college.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CollegeList;
