import {IconButton} from "@mui/material";
import {useState} from "react";

interface componentProps {
  toggleDrawer: () => void;
  isToggled: boolean;
}

const MenuButton = ({toggleDrawer, isToggled}: componentProps) => {
  return (
    <IconButton onClick={toggleDrawer}>
      <div
        className={`menu-button-container ${isToggled && "menu-is-toggled"}`}
      >
        <div className="line line1"></div>
        <div className="line line2"></div>
        <div className="line line3"></div>
      </div>
    </IconButton>
  );
};

export default MenuButton;
