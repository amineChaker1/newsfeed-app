import { Avatar } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { userSelect } from "../../app/store";
import "./sidebar.css";

const Sidebar = () => {
  const user = useSelector(userSelect);
  return (
    <div className="sidebar rounded-sm text-center">
      <div className="sidebar-top pt-3 flex flex-wrap flex-col items-center border-2 border-gray-400 border-b-0 rounded-t-md bg-white pb-3">
        <Avatar src={user.photoUrl} className="mb-3">
          {user.email[0]}
        </Avatar>
        <h2 className="text-xl font-bold px-2"> {user.displayName} </h2>
        <h4 className="text-gray-600 text-sm "> {user.email} </h4>
      </div>
      <div className="sidebar-stats p-3 mb-3 bg-white rounded-b-md border-t-gray-200 border-2 border-gray-400">
        <div className="sidebar-stat mt-3 flex justify-between">
          <p className="text-gray-600 text-sm ">Activity Points</p>
          <p className="sidebar-statnumber text-sm font-bold text-blue-500 ">
            2.500
          </p>
        </div>
        <div className="sidebar-stat mt-3 flex justify-between">
          <p className=" text-gray-600 text-sm ">Reward Points</p>
          <p className="sidebar-statnumber  text-sm font-bold text-blue-500 ">
            1.500
          </p>
        </div>
        <div className="sidebar-stat mt-3 flex justify-between">
          <p className="text-gray-600 text-sm">Downloads</p>
          <p className="sidebar-statnumber  text-sm font-bold text-blue-500">
            150
          </p>
        </div>
      </div>
      <div className="sidebar-bottom flex justify-between text-left p-3 bg-white rounded-md border-2 border-gray-400 ">
        <p>My Profile</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
          />
        </svg>
      </div>
    </div>
  );
};

export default Sidebar;
