import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Checkbox from "@material-ui/core/Checkbox";
import Chip from "@material-ui/core/Chip";
import MultipleSelectDropdown from "./MultipleSelectDropdown";

import './MultipleSelect.css';

export default function MultipleSelect({
  answers,
  required,
  errors,
  possibleValues,
  showAs,
  questionIdx,
  register,
  setValue
}) {
  const [state, setState] = React.useState(answers);

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

    return (
      <MultipleSelectDropdown
        possibleValues={possibleValues}
        answers={answers}
        options={menuOptions}
        setValue={setValue}
        questionIdx={questionIdx}
      />
    );
  }

  if (showAs === "List") {
    let options = possibleValues.map((value) => {
      return (
        <ListItem className="multi-select-item" key={value}>
          <Checkbox
            inputRef={required ? register({required: true}) : register}
            onChange={handleChange}
            name={`${questionIdx}`}
            checked={state.includes(value)}
            value={value}
          />
          <Chip size="small" label={value} />
        </ListItem>
      );
    });
    return (
      <>
        <List>{options}</List>
        {errors[`${questionIdx}`] && <p className="error">Please select at least 1 option</p>}
      </>
    );
  }
}
