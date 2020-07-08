import React from "react";
import "./Form.css";

import { questions } from "./formQuestions";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

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
    return (
      <ListItem key={idx} className="list-item">
        <ListItemText
          primary={title}
          secondary={description ? description : null}
        />
        {options}
      </ListItem>
    );
  });
  return <List id="form-list">{formQuestions}</List>;
}
