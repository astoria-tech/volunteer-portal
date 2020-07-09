import React from "react";
import "./Form.css";

import { questions } from "./formQuestions";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import TextField from '@material-ui/core/TextField';

import SingleSelect from "./SingleSelect";
import MultipleSelect from "./MultipleSelect";

export default function Form() {
  const formQuestions = questions.map((question, idx) => {
    const {
      title,
      description,
      required,
      possibleValues,
      fieldType
    } = question;

    let options;
    if (fieldType.type === "Single select") {
      options = (
        <SingleSelect values={possibleValues} showAs={fieldType.showAs} />
      );
    }

    if (fieldType.type === "Multiple select") {
      options = (
        <MultipleSelect values={possibleValues} showAs={fieldType.showAs} />
      );
    }

    if (fieldType.type === "Single line text" || fieldType.type === "Phone number") {
      options = (
        <TextField className="text-field" variant="outlined" size="small" />
      );
    }

    return (
      <ListItem key={idx} className="list-item">
        <ListItemText
          className={required ? "required-list-item" : ""}
          primary={title}
          secondary={description ? description : null}
        />
        {options}
      </ListItem>
    );
  });
  return (
    <div className="form">
      <h2>Astoria Mutual Aid Network • Volunteer Form •</h2>
      <List id="form-list">{formQuestions}</List>
    </div>
  );
}
