import { Avatar } from "@mui/material";
import React from "react";

const Sidebar = () => {
  return (
    <div className="sidebar sticky top-16">
      <div className="sidebar-top">
        <Avatar />
        <h2>Amine Chaker</h2>
        <h4>ENSSEA</h4>
      </div>
      <div className="sidebar-stats">
        <div className="sidebar-stat">
          <p>Activity Points</p>
          <p className="sidebar-statnumber">2.500</p>
        </div>
        <div className="sidebar-stat">
          <p>Reward Points</p>
          <p className="sidebar-statnumber">1.500</p>
        </div>
        <div className="sidebar-stat">
          <p>Downloads</p>
          <p className="sidebar-statnumber">150</p>
        </div>
      </div>
      <div className="sidebar-bottom">
        <p>Visit your Profile</p>
      </div>
    </div>
  );
};

export default Sidebar;
