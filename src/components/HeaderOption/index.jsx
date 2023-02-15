import { Avatar } from "@mui/material";
import React from "react";

const HeaderOption = ({ avatarImg, Icon, title }) => {
  return (
    <div className="headerOption">
      {avatarImg && <Avatar src={avatarImg} />}
      {/*{Icon && <Icon className="headerOption-icon" />}*/}
      <h3 className=""> {title} </h3>
    </div>
  );
};

export default HeaderOption;
