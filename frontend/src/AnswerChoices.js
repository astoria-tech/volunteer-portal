import React from "react";
import TextField from '@material-ui/core/TextField';

import SingleSelect from "./SingleSelect";
import MultipleSelect from "./MultipleSelect";

export default function AnswerChoices({ 
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
