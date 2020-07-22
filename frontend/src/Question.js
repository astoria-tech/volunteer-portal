import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import AnswerChoices from "./AnswerChoices";

export default function Question(props) {
  const {
    question, 
    idx, 
    formData,
    setValue,
    register 
  } = props;

  const {
    title,
    fieldName,
    description,
    required,
    possibleValues,
    fieldType
  } = question;

  const answers = formData ? formData[fieldName] : null;
  if (formData) {
    return (
      <ListItem key={idx} className="list-item">
        <ListItemText
          className={required ? "required-list-item" : ""}
          primary={title}
          secondary={description ? description : null}
        />
        <AnswerChoices
          answers={answers}
          questionIdx={idx}
          fieldType={fieldType.type}
          possibleValues={possibleValues}
          showAs={fieldType.showAs}
          setValue={setValue}
          register={register}
        />
      </ListItem>
    );
  } else {
    return null;
  }
}