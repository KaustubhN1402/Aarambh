// AdminDates.jsx

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AdminDates.css";

const AdminDates = () => {
  const [dates, setDates] = useState([]);
  const [newDate, setNewDate] = useState({
    activity: "",
    startDate: "",
    endDate: "",
  });

  useEffect(() => {
    fetchDates();
  }, []);

  const fetchDates = async () => {
    try {
      const response = await axios.get("/api/date");
      setDates(response.data.dates);
    } catch (error) {
      console.error("Error fetching dates:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewDate((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/date", newDate);
      setNewDate({ activity: "", startDate: "", endDate: "" });
      fetchDates();
    } catch (error) {
      console.error("Error adding date:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/date/${id}`);
      fetchDates();
    } catch (error) {
      console.error("Error deleting date:", error);
    }
  };

  return (
    <div className="admin-dates-container">
      <div className="header">
        <h1>Important Dates</h1>
      </div>

      <form onSubmit={handleSubmit} className="date-form">
        <input
          type="text"
          name="activity"
          value={newDate.activity}
          onChange={handleInputChange}
          placeholder="Activity"
          className="input-field"
        />
        <input
          type="date"
          name="startDate"
          value={newDate.startDate}
          onChange={handleInputChange}
          placeholder="Start Date"
          className="input-field"
        />
        <input
          type="date"
          name="endDate"
          value={newDate.endDate}
          onChange={handleInputChange}
          placeholder="End Date"
          className="input-field"
        />
        <button type="submit" className="add-button">
          Add Date
        </button>
      </form>
      <table className="date-table">
        <thead>
          <tr>
            <th>Activity</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {dates.map((date) => (
            <tr key={date._id}>
              <td>{date.activity}</td>
              <td>{new Date(date.startDate).toLocaleDateString()}</td>
              <td>{new Date(date.endDate).toLocaleDateString()}</td>
              <td>
                <button onClick={() => handleDelete(date._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDates;
