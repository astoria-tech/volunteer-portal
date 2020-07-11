import React from "react";
import TextField from '@material-ui/core/TextField';

import SingleSelect from "./SingleSelect";
import MultipleSelect from "./MultipleSelect";

export default function AnswerChoices({ 
    fieldType,
    possibleValues, 
    showAs, 
    setValue,
    questionIdx 
  }) {
    switch (fieldType){
      case "Single select":
        return (
          <SingleSelect
            possibleValues={possibleValues}
            showAs={showAs}
            setValue={setValue}
            questionIdx={questionIdx}
          />
        )
      case "Multiple select":
        return (
          <MultipleSelect 
            possibleValues={possibleValues}
            showAs={showAs}
            setValue={setValue}
            questionIdx={questionIdx}
          />
        )
      case "Single line text":
        return <TextField className="text-field" variant="outlined" size="small" />
      case "Phone number": 
        return <TextField className="text-field" variant="outlined" size="small" />
    }
}