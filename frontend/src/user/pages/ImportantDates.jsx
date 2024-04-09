// import React from 'react';
import React, { useEffect, useRef } from 'react';
import Header from './Header';
import Footer from './Footer';
import "./ImportantDates.css"
const ImportantDates = () => {
  // Assuming you have data for the 10 rows
  const datesData = [
    { serialNo: 1, activity: 'Online registration & Confirmation of Application Form on website', startDate: '2024-01-01', endDate: '2024-01-05' },
    { serialNo: 2, activity: 'Online registration & Confirmation of Application Form on website (with additional Late Fee of Rs. 500/- for all categories)', startDate: '2024-01-06', endDate: '2024-01-10' },
    { serialNo: 3, activity: 'Payment – Only through Online mode', startDate: '2024-01-06', endDate: '2024-01-10' },
    { serialNo: 4, activity: 'PCM CET Examination Schedule', startDate: '2024-01-06', endDate: '2024-01-10' },
    { serialNo: 5, activity: 'PCB CET Examination Schedule', startDate: '2024-01-06', endDate: '2024-01-10' },
    // Add more data for the rest of the rows
  ];
  
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  // Get a random background color
  const dynamicBackgroundColor = getRandomColor();

  return (
    <div>
      <Header />
      
      <table>
        <thead>
          <tr>
            <th>Serial No.</th>
            <th>Activity</th>
            <th>Start Date</th>
            <th>End Date</th>
          </tr>
        </thead>
        <tbody>
          {datesData.map((date, index) => (
            <tr key={index}>
              <td>{date.serialNo}</td>
              <td>{date.activity}</td>
              <td>{date.startDate}</td>
              <td>{date.endDate}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <Footer />
    </div>
  );
};

export default ImportantDates;

