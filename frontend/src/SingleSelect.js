import React, { useState } from "react";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";

import { bgClassNames } from './utils/formUtils';

import './SingleSelect.css';
import "./colors.css";

export default function SingleSelect({
  answers,
  required,
  errors,
  possibleValues,
  showAs,
  register,
  questionIdx
}) {
  const [value, setValue] = useState(answers);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const defaultValue = required ? "Yes" : "No";
  let options;

  if (showAs === "List") {
    options = possibleValues.map((value, idx) => {
      const style = bgClassNames[idx % bgClassNames.length].includes("Bright") ? `${bgClassNames[idx % bgClassNames.length]} white-text` : `${bgClassNames[idx % bgClassNames.length]}`;
      return (
        <FormControlLabel
          key={idx}
          value={value}
          control={<Radio className="radio" inputRef={required ? register({required: true}) : register} name={`${questionIdx}`}/>}
          label={<div className={`single-select-chip ${style}`}>{value}</div>}
        />
      );
    });
  }

  return (
    <FormControl>
      <RadioGroup value={value || defaultValue} onChange={handleChange}>
        {options}
      </RadioGroup>
      {errors[`${questionIdx}`] && <p className="error">Please select an option</p>}
    </FormControl>
  );
}
