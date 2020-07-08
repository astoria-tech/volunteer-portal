import React from "react";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";

export default function SingleSelect(props) {
  const { values, showAs } = props;

  let options = "Dropdown";
  if (showAs === "List") {
    options = values.map((value, idx) => {
      return (
        <FormControlLabel
          key={idx}
          value={value}
          control={<Radio />}
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
