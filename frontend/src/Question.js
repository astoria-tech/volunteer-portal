import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import AnswerChoices from "./AnswerChoices";

import "./Question.css"

export default function Question({
  question,
  idx,
  formData,
  setValue,
  register,
  errors
}) {
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
          required={required}
          questionIdx={idx}
          fieldType={fieldType.type}
          possibleValues={possibleValues}
          showAs={fieldType.showAs}
          setValue={setValue}
          register={register}
          errors={errors}
        />
      </ListItem>
    );
  } else {
    return null;
  }
}
