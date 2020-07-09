import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Checkbox from "@material-ui/core/Checkbox";
import Chip from "@material-ui/core/Chip";
import MultipleSelectDropdown from "./MultipleSelectDropdown";

import './MultipleSelect.css';

export default function MultipleSelect(props) {
  const { values, showAs } = props;

  let display;

  if (showAs === "Dropdown") {
    display = <MultipleSelectDropdown options={values} />;
  }

  if (showAs === "List") {
    let options = values.map(value => {
      return (
        <ListItem className="multi-select-item" key={value}>
          <Checkbox />
          <Chip size="small" label={value} />
        </ListItem>
      );
    });
    display = <List>{options}</List>;
  }

  return display;
}
