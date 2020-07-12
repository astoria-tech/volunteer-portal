import React from "react";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";

import './SingleSelect.css';

export default function SingleSelect({
  possibleValues,
  showAs,
  register,
  questionIdx
}) {
  let options;
  if (showAs === "List") {
    options = possibleValues.map((value, idx) => {
      return (
        <FormControlLabel
          key={idx}
          value={value}
          control={<Radio inputRef={register} name={`${questionIdx}`}/>}
          label={value}
        />
      );
    });
  }
  return (
    <FormControl>
      <RadioGroup>{options}</RadioGroup>
    </FormControl>
  );
}
