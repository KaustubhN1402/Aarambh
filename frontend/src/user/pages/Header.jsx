import React from "react";
import { Link, useParams } from "react-router-dom";
import "./Homepage.css";

export default function Header() {
  const { id } = useParams();

  const handleLogout = async () => {
      try {
        console.log("BUtton Cicked")
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

  return (
    <div>
      <header className="header">
        <img src="./images/logo.jpg" alt=" " className="logo" />
        <nav className="navigation">
          <ul>
            <li>
              <Link to={`/${id}`}>Home</Link>
            </li>
            <li>
              <Link to={`/${id}/important`}>Important Dates</Link>
            </li>
            <li>
              <Link to={`/${id}/about`}>About Us</Link>
            </li>
            <li>
              <button onClick={handleLogout}>Logout</button>{" "}
              {/* Use button element */}
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
