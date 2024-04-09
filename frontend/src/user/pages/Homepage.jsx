import "./Homepage.css";

import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Link, animateScroll as scroll } from "react-scroll";
import SignUp from "./SignUp";
import {useParams} from "react-router-dom"
const Homepage = () => {
  const [showCollegeList, setShowCollegeList] = useState(false);
const { id } = useParams();
  const handlePredictButtonClick = () => {
    // Update the state to show the college list
    setShowCollegeList(true);
  };

  const AnnouncementBar = () => {
    return (
      <div className="announcement-container">
        <button className="announcement-button">Announcement</button>
        <div className="announcement-bar">
          <marquee behavior="scroll" direction="left" scrollamount="10">
            IMP: Cap rounds will start from 22th June 2024.
          </marquee>
        </div>
      </div>
    );
  };

  const handleDetailsClick = () => {
    // Handle click event for "Details" button
    console.log("Details clicked");
    // Perform navigation or other actions as needed
  };

 

  return (
    <div className="homepage">
      {/* Existing code for header, search bar, main content, latest news, and prediction form */}
      <Header />
      <AnnouncementBar />

      <div className="main-content">
        <h2 className="title">MHT-CET College Predictor</h2>
        <p className="subtitle">
          Predict yours college based on percentile, rank, category, Gender
        </p>
        <p className="subtitle">
          and preferred branch.Get counseling session as well.
        </p>
      </div>
      {/* Two rectangular containers in a row */}
      <div className="row">
        {/* Left container with college students picture */}
        <div className="container left-container">
          {/* Random image */}
          <img src="./images/Students.jpg" alt=" " />
        </div>

        {/* Right container with buttons */}
        <div className="container right-container">
          {/* Predict College button */}
          <div className="button">
            <img src="./images/clg.jpeg" alt="Predict College" />
            {/* <span>Predict College</span> */}
            <Link
              href="/predict_college"
              activeClass="active"
              to="prediction-form-container"
              spy={true}
              smooth={true}
              offset={-70} // adjust this value to fit your layout
              duration={500}
            >
              Predict College
            </Link>
          </div>
          {/* Search College button */}
          <div className="button">
            <img src="./images/searchh.png" alt="Search College" />
            <a href={`/${id}/search_college`}>Search College</a>
          </div>
          {/* Exams Information button */}
          <div className="button">
            <img src="./images/exams.jpg" alt="Exams Information" />
            <span>
              <a href={`/${id}/exam_info`}>Exam Information</a>
            </span>
          </div>
          {/* </div> */}

          {/* Cap rounds button */}
          <div className="button">
            <img src="./images/cap.jpg" alt="Cap Rounds" />
            <span>
              <a href={`/${id}/cap_rounds`}>Cap Rounds</a>
            </span>
          </div>
        </div>
      </div>

      {/* ------------------------------------- */}

      <div className="prediction-form-container">
        <div className="prediction-form-box">
          <h3>College Prediction Form</h3>
          <form className="prediction-form">
            <div className="form-group">
              <div className="left">
                <div className="select-wrapper">
                  <label htmlFor="exam">Exam:</label>
                  <select id="exam" name="exam" required>
                    <option value="">Select Exam</option>
                    <option value="MHT-CET">MHT-CET</option>
                    <option value="JEE-Mains">JEE-Mains</option>
                  </select>
                </div>

                <label htmlFor="percentile">Percentile:</label>
                <input
                  type="number"
                  id="percentile"
                  name="percentile"
                  min="0"
                  max="100"
                  step="0.01"
                  required
                />

                <label htmlFor="rank">Rank:</label>
                <input type="text" id="rank" name="rank" required />
              </div>

              <div className="right">
                <div className="select-wrapper">
                  <label htmlFor="branch">Branch:</label>
                  <select id="branch" name="branch" required>
                    <option value="">Select branch</option>
                    <option value="Computer Science">Computer Science</option>
                    <option value="Information Technology">
                      Information Technology
                    </option>
                    <option value="Electrical">Electrical</option>
                    <option value="Mechanical">Mechanical</option>
                    <option value="Civil">Civil</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Electronics and Telecommunication">
                      Electronics and Telecommunication
                    </option>
                    <option value="Artificial Intelligence and Data science">
                      Artificial Intelligence and Data science
                    </option>
                  </select>
                </div>

                <div className="select-wrapper">
                  <label htmlFor="gender">Gender:</label>
                  <select id="gender" name="gender" required>
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="select-wrapper">
                  <label htmlFor="category">Category:</label>
                  <select id="category" name="category" required>
                    <option value="">Select Category</option>
                    <option value="OBC (Other Backward Class)">
                      OBC (Other Backward Class)
                    </option>
                    <option value="General">General</option>
                    <option value="ST (Scheduled Tribe)">
                      ST (Scheduled Tribe)
                    </option>
                    <option value="SC (Scheduled Caste)">
                      SC (Scheduled Caste)
                    </option>
                    <option value="VJNT (Vimukta Jati Nomadic Tribes)">
                      VJNT (Vimukta Jati Nomadic Tribes)
                    </option>
                    <option value="SEBC (State Economically Backward Class)">
                      SEBC (State Economically Backward Class)
                    </option>
                  </select>
                </div>
              </div>
            </div>
            <button type="button" onClick={handlePredictButtonClick}>
              Predict
            </button>
          </form>
        </div>
      </div>

      {showCollegeList && (
        <div className="college-list">
          <h3>College List</h3>
          <table>
            <thead>
              <tr>
                <th>Serial Number</th>
                <th>College Name</th>
                <th>College ID</th>
                <th>More Details</th>
              </tr>
            </thead>
            <tbody>
              {/* Populate college list here */}
              <tr>
                <td>1</td>
                <td>College A</td>
                <td>ID-A</td>
                <td>
                  <button onClick={handleDetailsClick}>Details</button>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>College B</td>
                <td>ID-B</td>
                <td>
                  <button onClick={handleDetailsClick}>Details</button>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>College C</td>
                <td>ID-C</td>
                <td>
                  <button onClick={handleDetailsClick}>Details</button>
                </td>
              </tr>
              {/* Repeat the above row structure for additional colleges */}
            </tbody>
          </table>
          <div className="pagination">
            <button>Previous</button>
            <button>Next</button>
          </div>
        </div>
      )}
<Footer/>
      {/* Show the prediction form only if college list is not shown */}
    </div>
  );
};

export default Homepage;
