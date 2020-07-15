import React from "react";
import TextField from '@material-ui/core/TextField';

import SingleSelect from "./SingleSelect";
import MultipleSelect from "./MultipleSelect";

export default function AnswerChoices({
    answers,
    fieldType,
    possibleValues, 
    showAs, 
    setValue,
    questionIdx,
    register
  }) {
    switch (fieldType){
      case "Single select":
        return (
          <SingleSelect
            answers={answers}
            possibleValues={possibleValues}
            showAs={showAs}
            setValue={setValue}
            questionIdx={questionIdx}
            register={register}
          />
        )
      case "Multiple select":
        return (
          <MultipleSelect
            answers={answers}
            possibleValues={possibleValues}
            showAs={showAs}
            setValue={setValue}
            questionIdx={questionIdx}
            register={register}
          />
        );
      case "Single line text":
        return (
          <TextField
            defaultValue={answers}
            className="text-field"
            variant="outlined"
            size="small"
            inputRef={register}
            name={`${questionIdx}`}
          />
        );
      case "Phone number": 
        return (
          <TextField
            defaultValue={answers}
            className="text-field"
            variant="outlined"
            size="small"
            inputRef={register}
            name={`${questionIdx}`}
          />
        );
      default:
        return null;
    }
}
