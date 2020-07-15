import React, {useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import { questions, questionsWithBlankAnswers } from "./formQuestions";
import { formatData } from "./utils/formUtils";
import AnswerChoices from "./AnswerChoices";

import "./Form.css";

export default function Form() {
  const { register, handleSubmit, setValue } = useForm();
  const [formData, setFormData] = useState(questionsWithBlankAnswers());

  const onSubmit = data => {
    const formattedData = formatData(data, questions)
    console.log('formatted data', formattedData);
  }

  useEffect(() => {
    fetch("/api/v1/airtable/")
      .then((res) => res.json())
      .then((result) => {
        const prefilledData = { ...formData };
        for (let field in result.fields) {
          if (prefilledData[field] === "" || prefilledData[field]) {
            prefilledData[field] = result.fields[field];
          }
        }
        setFormData(prefilledData)
      });
  }, [])

  const formQuestions = questions.map((question, idx) => {
    const {
      title,
      fieldName,
      description,
      required,
      possibleValues,
      fieldType
    } = question;

    const answers = formData[fieldName];

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
  });

  return (
    <div className="form">
      <h2>Astoria Mutual Aid Network • Volunteer Form •</h2>
      <List id="form-list">{formQuestions}</List>
      <button onClick={handleSubmit(onSubmit)}>Submit</button>
    </div>
  );
}
