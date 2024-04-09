import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const CollegeDetails = () => {
  const { id } = useParams();
  const [collegeDetails, setCollegeDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCollegeDetails = async () => {
      try {
        // Fetch college details from the API using the provided ID
        const response = await fetch(`/api/college/getCollageData/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch college details");
        }
        const data = await response.json();
        console.log(data)
        setCollegeDetails(data.collage);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching college details:", error);
        setError("Failed to fetch college details. Please try again later.");
        setLoading(false);
      }
    };

    fetchCollegeDetails();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!collegeDetails) {
    return <p>College details not found.</p>;
  }

  return (
    <div className="container">
      <h2>College Details</h2>
      <h3>Basic Information</h3>
      <p>Institution: {collegeDetails.basicInfo.institution}</p>
      <p>Principal: {collegeDetails.basicInfo.principal}</p>
      <p>College Code: {collegeDetails.basicInfo.CollageCode}</p>
      <p>Autonomous: {collegeDetails.basicInfo.autonomous ? "Yes" : "No"}</p>
      <p>Address: {collegeDetails.basicInfo.address}</p>
      <p>Email: {collegeDetails.basicInfo.contact.email}</p>
      <p>Phone No: {collegeDetails.basicInfo.contact.phoneno}</p>
      <p>
        NBA Accreditation:{" "}
        {collegeDetails.basicInfo.accreditation.NBA ? "Yes" : "No"}
      </p>
      <p>
        NAAC Accreditation:{" "}
        {collegeDetails.basicInfo.accreditation.NAAC ? "Yes" : "No"}
      </p>

      <h3>Facilities</h3>
      <p>
        Hostel for Boys: {collegeDetails.facility.Hostel.boys ? "Yes" : "No"}
      </p>
      <p>
        Hostel for Girls: {collegeDetails.facility.Hostel.girls ? "Yes" : "No"}
      </p>
          <p>Other Facilities: {collegeDetails.facility.others.join(", ")}</p>
          
      <h3>Fees</h3>
      <p>Tuition Fee: {collegeDetails.fees.TuitionFee}</p>
      <p>Development Fee: {collegeDetails.fees.DevelopmentFee}</p>
      <p>Total Fee: {collegeDetails.fees.TotalFee}</p>
    </div>
  );
};

export default CollegeDetails;
