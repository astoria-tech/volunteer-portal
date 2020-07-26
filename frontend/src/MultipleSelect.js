import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Checkbox from "@material-ui/core/Checkbox";
import Chip from "@material-ui/core/Chip";
import MultipleSelectDropdown from "./MultipleSelectDropdown";

import './MultipleSelect.css';

export default function MultipleSelect({
  answers,
  possibleValues,
  showAs,
  questionIdx,
  register,
  setValue
}) {
  const [state, setState] = React.useState(answers);
  let display;
  const handleChange = (event) => {
    let newState;
    if (event.target.checked) {
      newState = [...state, event.target.value];
    } else {
      newState = state.filter(option => option !== event.target.value);
    }
    setState(newState);
  }

  if (showAs === "Dropdown") {
    const menuOptions = possibleValues.filter(value => !answers.includes(value));

    display = <MultipleSelectDropdown
      possibleValues={possibleValues}
      answers={answers}
      options={menuOptions}
      setValue={setValue}
      questionIdx={questionIdx}
    />;
  }

  if (showAs === "List") {
    let options = possibleValues.map((value, idx) => {
      return (
        <ListItem className="multi-select-item" key={value}>
          <Checkbox
            inputRef={register}
            onChange={handleChange}
            name={`${questionIdx}-${idx}`}
            checked={state.includes(value)}
            value={value}
          />
          <Chip size="small" label={value} />
        </ListItem>
      );
    });
    display = <List>{options}</List>;
  }

  return display;
}
