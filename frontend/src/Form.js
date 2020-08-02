import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import List from "@material-ui/core/List";

import { questions, questionsWithBlankAnswers } from "./formQuestions";
import { formatData } from "./utils/formUtils";
import Question from "./Question";

import "./Form.css";

export default function Form() {
  const { register, handleSubmit, setValue, errors } = useForm();
  const [formData, setFormData] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  async function postData(url = "", data = {}) {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    return response.json();
  }

  const onSubmit = (data, e) => {
    e.preventDefault();
    const formattedData = formatData(data, questions);
    postData("/api/v1/airtable/", formattedData).then((data) => {
      if (data.updated) {
        setSubmitted(true);
      }
    });
  };

  useEffect(() => {
    fetch("/api/v1/airtable/")
      .then((res) => res.json())
      .then((result) => {
        const prefilledData = questionsWithBlankAnswers();
        for (let field in result.fields) {
          if (prefilledData[field] === "" || prefilledData[field]) {
            prefilledData[field] = result.fields[field];
          }
        }
        setFormData(prefilledData);
      });
  }, []);

  const formQuestions = questions.map((question, idx) => {
    return (
      <Question
        key={idx}
        question={question}
        idx={idx}
        formData={formData}
        setValue={setValue}
        register={register}
        errors={errors}
      />
    );
  });

  if (submitted) {
    return <p>Your info has been updated</p>;
  } else if (formData) {
    return (
      <div className="form-container">
        <div className="form">
          <List id="form-list">{formQuestions}</List>
          <button onClick={handleSubmit(onSubmit)}>Submit</button>
        </div>
      </div>
    );
  } else {
    return <p>Loading...</p>;
  }
}
