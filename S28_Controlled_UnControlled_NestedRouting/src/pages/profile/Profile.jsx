import React from "react";
import "./Profile.css";
import { Link, Outlet } from "react-router-dom";
function Profile() {
  return (
    <div className="profileContainer">
      <div className="row1">
        <div className="col1">
          <Link to="personal">Personal Details</Link>
        </div>
        <div className="col2">
          <Link to="professional">Professional Details</Link>
        </div>
        <div className="col3">
          <Link to="educational">Educational Details</Link>
        </div>
      </div>
      <div className="row2">
        <Outlet />
      </div>
    </div>
  );
}

export default Profile;
