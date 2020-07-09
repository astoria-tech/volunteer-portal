import React from "react";
import "./MultipleSelectDropdown.css";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Chip from "@material-ui/core/Chip";

export default function MultiSelectDropdown(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [menuOptions, _setMenuOptions] = React.useState([...props.options]);
  const [selectedOptions, setSelectedOptions] = React.useState([]);

  const menuRef = React.useRef(menuOptions);

  const setMenuOptions = data => {
    menuRef.current = data;
    _setMenuOptions(data);
  };

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleSelection = option => {
    const newData = menuOptions.filter(opt => opt !== option);
    setMenuOptions(newData);
    const newOptions = selectedOptions.concat([option]);
    setSelectedOptions(newOptions);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDelete = option => {
    const newMenuOptions = menuOptions.concat([option]).sort();
    setMenuOptions(newMenuOptions);
    const newSelectedOptions = selectedOptions
      .filter(opt => {
        return opt !== option;
      })
      .sort();
    setSelectedOptions(newSelectedOptions);
  };

  return (
    <div className="multiselect-dropdown">
      <Button className="multiselect-button"
        aria-controls="simple-menu"
        aria-haspopup="true"
        disableRipple
        onClick={handleClick}
      >
        Select an option
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {menuOptions.map(opt => {
          return (
            <MenuItem
              key={opt}
              className="menu-item"
              onClick={() => handleSelection(opt)}
            >
              <Chip key={opt} className="menu-chip" label={opt} size="small" />
            </MenuItem>
          );
        })}
      </Menu>
      <div>
        {selectedOptions.map(option => (
          <Chip
            key={option}
            className="selectedChip"
            label={option}
            size="small"
            onDelete={() => handleDelete(option)}
          />
        ))}
      </div>
    </div>
  );
}
