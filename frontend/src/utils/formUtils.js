export const formatData = (data, questions) => {
  const formattedData = {};
  for (let idx of Object.keys(data)) {
    const question = questions[idx];
    if (question) {
      formattedData[question.fieldName] = data[idx];
    } else {
      const [questionIdx, choiceIdx] = idx.split("-");
      const { fieldName, possibleValues } = questions[questionIdx];
      const answer = possibleValues[choiceIdx];
      if (!formattedData[fieldName]) {
        formattedData[fieldName] = [];
      }
      if (data[idx]) {
        const newValue = formattedData[fieldName].concat([answer]);
        formattedData[fieldName] = newValue;
      }
    }
  };
  return formattedData;
}
