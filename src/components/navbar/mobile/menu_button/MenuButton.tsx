import {IconButton} from "@mui/material";
import {useState} from "react";

const MenuButton = () => {
  const [isToggled, setIsToggled] = useState(false);

  const toggleIsToggled = () => {
    setIsToggled(prev => !prev);
  };
  return (
    <IconButton onClick={toggleIsToggled}>
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
