import { Avatar } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { userSelect } from "../../app/store";

const HeaderOption = ({ avatarImg, Icon, title }) => {
  const user = useSelector(userSelect);
  return (
    <div className="headerOption">
      {avatarImg && <Avatar src={user?.photoUrl}> {user?.email[0]} </Avatar>}
      {/*{Icon && <Icon className="headerOption-icon" />}*/}
      <h3 className=""> {title} </h3>
    </div>
  );
};

export default HeaderOption;
