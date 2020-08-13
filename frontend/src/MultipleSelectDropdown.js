import React, { useState, useRef, useEffect } from "react";
import "./MultipleSelectDropdown.css";
import "./colors.css";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Chip from "@material-ui/core/Chip";

import { formatAnswerText, bgClassNames } from './utils/formUtils';

export default function MultiSelectDropdown({
  possibleValues,
  answers,
  options,
  setValue,
  questionIdx,
  isMobile,
}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuOptions, _setMenuOptions] = useState(options);
  const [loadedAnswers, setLoadedAnswers] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState(answers);

  useEffect(() => {
    if (!loadedAnswers) {
      answers.forEach(answer => {
        const optionIdx = possibleValues.indexOf(answer);
        setValue(`${questionIdx}-${optionIdx}`, answer);
        setLoadedAnswers(true);
      });
    }
  })

  const menuRef = useRef(menuOptions);

  const setMenuOptions = data => {
    menuRef.current = data;
    _setMenuOptions(data);
  };

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleOptionClick = option => {
    const newData = menuOptions.filter(opt => opt !== option);
    setMenuOptions(newData);
    const newOptions = selectedOptions.concat([option]);
    setSelectedOptions(newOptions);
    const optionIdx = possibleValues.indexOf(option);
    setValue(`${questionIdx}-${optionIdx}`, option);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDelete = option => {
    const newMenuOptions = menuOptions.concat([option]).sort();
    setMenuOptions(newMenuOptions);
    const newSelectedOptions = selectedOptions
      .filter(opt => opt !== option);
    const optionIdx = possibleValues.indexOf(option);
    setValue(`${questionIdx}-${optionIdx}`, false);
    setSelectedOptions(newSelectedOptions);
  };

  return (
    <div className="multiselect-dropdown">
      <Button className="multiselect-button"
        aria-controls="simple-menu"
        aria-haspopup="true"
        variant="outlined"
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
        {menuOptions.map((opt) => {
          const idx = possibleValues.indexOf(opt);
          const style = bgClassNames[idx % bgClassNames.length].includes("Bright")
            ? `${bgClassNames[idx % bgClassNames.length]} white-text`
            : `${bgClassNames[idx % bgClassNames.length]}`;
          return (
            <MenuItem
              key={opt}
              className="menu-item"
              onClick={() => handleOptionClick(opt)}
            >
              <Chip key={opt} className={`menu-chip ${style}`} label={isMobile ? formatAnswerText(opt, 40) : opt} size="small" />
            </MenuItem>
          );
        })}
      </Menu>
      <div>
        {selectedOptions.map((option) => {
          const idx = possibleValues.indexOf(option);
          const style = bgClassNames[idx % bgClassNames.length].includes("Bright")
          ? `${bgClassNames[idx % bgClassNames.length]} white-text`
          : `${bgClassNames[idx % bgClassNames.length]}`;
          return (
            <Chip
              key={option}
              className={isMobile && option.length > 40 ? `selectedChip mobile ${style}` : `selectedChip ${style}`}
              label={isMobile ? formatAnswerText(option, 40) : option}
              size="small"
              onDelete={() => handleDelete(option)}
            />
          );
        })}
      </div>
    </div>
  );
}
