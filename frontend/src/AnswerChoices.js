import React from "react";
import { parsePhoneNumberFromString } from "libphonenumber-js";
import TextField from '@material-ui/core/TextField';

import SingleSelect from "./SingleSelect";
import MultipleSelect from "./MultipleSelect";

import "./AnswerChoices.css"

export default function AnswerChoices({
    answers,
    required,
    fieldType,
    possibleValues, 
    showAs, 
    setValue,
    questionIdx,
    register,
    errors
  }) {
    switch (fieldType){
      case "Single select":
        return (
          <SingleSelect
            answers={answers}
            required={required}
            errors={errors}
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
            required={required}
            errors={errors}
            possibleValues={possibleValues}
            showAs={showAs}
            setValue={setValue}
            questionIdx={questionIdx}
            register={register}
          />
        );
      case "Single line text":
        return (
          <>
            <TextField
              defaultValue={answers}
              className="text-field"
              variant="outlined"
              size="small"
              inputRef={required ? register({ required: true }) : register}
              name={`${questionIdx}`}
            />
            {errors[`${questionIdx}`] && <p className="error">This field is required</p>}
          </>
        );
      case "Phone number":
        return (
          <>
            <TextField
              defaultValue={answers}
              className="text-field"
              variant="outlined"
              size="small"
              inputRef={register({
                validate: {
                  isPhoneNumber: (value) => {
                    const phoneNumber = parsePhoneNumberFromString(value, "US");
                    return phoneNumber ? phoneNumber.isValid() : false;
                  },
                },
              })}
              name={`${questionIdx}`}
            />
            {errors[`${questionIdx}`] && <p className="error">Please enter a valid phone number</p>}
          </>
        );
      default:
        return null;
    }
}
