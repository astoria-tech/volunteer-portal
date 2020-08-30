const questions = [
  {
    "title": "First Name",
    "fieldName": "First Name",
    "description": null,
    "fieldType": {
      "type": "Single line text",
      "showAs": null
    },
    "possibleValues": null,
    "required": true,
    "answer": ""
  },
  {
    "title": "Last Name",
    "fieldName": "Last Name",
    "description": null,
    "fieldType": {
      "type": "Single line text",
      "showAs": null
    },
    "possibleValues": null,
    "required": false,
    "answer": ""
  },
  {
    "title": "Preferred Pronouns",
    "fieldName": "Preferred Pronouns",
    "description": null,
    "fieldType": {
      "type": "Single line text",
      "showAs": null
    },
    "possibleValues": null,
    "required": true,
    "answer": ""
  },
  {
    "title": "Email Address",
    "fieldName": "Email Address",
    "description": null,
    "fieldType": {
      "type": "Single line text",
      "showAs": null
    },
    "possibleValues": null,
    "required": true,
    "answer": ""
  },
  {
    "title": "Please provide your contact phone number:",
    "fieldName": "Please provide your contact phone number:",
    "description": null,
    "fieldType": {
      "type": "Phone number",
      "showAs": null
    },
    "possibleValues": null,
    "required": true,
    "answer": ""
  },
  {
    "title": "Do you affirm that you agree to all the Health Guidelines outlined below as a volunteer?",
    "fieldName": "Do you affirm that you agree to all the Health Guidelines outlined above as a volunteer?",
    "description": [
      {
        "type": "text",
        "content": "Not every COVID-19 carrier is symptomatic, and we cannot completely eliminate risk. With that in mind, we have implemented the following safety guidelines to minimize any potential transmission of the novel coronavirus.  \n\nDo you affirm as a volunteer that you:\n\n- Have not traveled out of the country in the last 14 days\n- Are not exhibiting any signs of compromised health (e.g. runny nose, cough, fever, etc.)\n- Have not come in contact with someone who has tested positive for COVID-19 in the last 14 days \n- Have been practicing social distancing"
      }
    ],
    "fieldType": {
      "type": "Single select",
      "showAs": "List"
    },
    "possibleValues": [
      "Yes",
      "No"
    ],
    "required": true,
    "answer": ""
  },
  {
    "title": "Do you affirm that you will adhere to the safe handling guidelines listed below as a volunteer?",
    "fieldName": "Do you affirm that you will adhere to the safe handling guidelines listed above as a volunteer?",
    "description": [
      {
        "type": "text",
        "content": "If possible, please wear latex/rubber gloves during deliveries. We also recommend that volunteers avoid touching unnecessary items and utilize a self-checkout option if available. \n\nVolunteers are additionally requested to take every CDC-approved safety precaution, including:\n- Washing hands frequently with soap and water for a minimum of 20 seconds or using hand sanitizer\n- Refraining from touching their face after having been outside\n- Sneezing or coughing into their elbow\n- Practicing “social distancing” -- staying indoors, avoiding crowds, staying 6 feet away from other people if you have to go outside"
      }
    ],
    "fieldType": {
      "type": "Single select",
      "showAs": "List"
    },
    "possibleValues": [
      "Yes",
      "No"
    ],
    "required": true,
    "answer": ""
  },
  {
    "title": "Do you affirm that you will adhere to the delivery protocols listed below as a volunteer?",
    "fieldName": "Do you affirm that you will adhere to the delivery protocols listed above as a volunteer?",
    "description": [
      {
        "type": "text",
        "content": "Volunteers make as minimal contact with the recipient as possible upon delivery:\n- They will place items at the door and knock/ring the doorbell and/or call the recipient to inform them that their order has been delivered.\n- If items have not already been paid for, payment to the volunteer will be exchanged either via cash, check, or Paypal/Venmo/Cash App/Zelle."
      }
    ],
    "fieldType": {
      "type": "Single select",
      "showAs": "List"
    },
    "possibleValues": [
      "Yes",
      "No"
    ],
    "required": true,
    "answer": ""
  },
  {
    "title": "Do you agree to uphold and abide by the Astoria Mutual Aid Network Community Agreements throughout your interactions as a member of our community?",
    "fieldName": "Do you agree to uphold and abide by the Astoria Mutual Aid Network Community Agreements throughout your interactions as a member of our community?",
    "description": [
      {
        "type": "text",
        "content": "You can see the Community Agreements here: "
      },
      {
        "type": "a",
        "href": "https://docs.google.com/document/d/1GDPZ0d_UEmXKICwNSUnnp78mNZzQNFFbnmz7F-UDhsM/edit?usp=sharing"
      }
    ],
    "fieldType": {
      "type": "Single select",
      "showAs": "List"
    },
    "possibleValues": [
      "Yes",
      "No"
    ],
    "required": true,
    "answer": ""
  },
  {
    "title": "Preferred Method of Contact",
    "fieldName": "Preferred Method of Contact",
    "description": null,
    "fieldType": {
      "type": "Multiple select",
      "showAs": "List"
    },
    "possibleValues": [
      "Text Message",
      "Email",
      "Phone Call"
    ],
    "required": false,
    "answer": []
  },
  {
    "title": "Full Street address (You can leave out your apartment/unit.)",
    "fieldName": "Full Street address (You can leave out your apartment/unit.)",
    "description": [
      {
        "type": "text",
        "content": "We work on a geo-location basis connecting neighbors as close together as possible. \n\nThis will help us map our support across this network and connect volunteers to hyper local needs. This information will only be used in connecting you to local volunteer opportunities. We will not use/sell/exploit this information in any way! "
      }
    ],
    "fieldType": {
      "type": "Single line text",
      "showAs": null
    },
    "possibleValues": null,
    "required": true,
    "answer": ""
  },
  {
    "title": "Do you have a private mode of transportation with valid license/insurance?",
    "fieldName": "Do you have a private mode of transportation with valid license/insurance?",
    "description": null,
    "fieldType": {
      "type": "Multiple select",
      "showAs": "List"
    },
    "possibleValues": [
      "Yes, I have a car",
      "Yes, I have a bike (can transport SMALL packages)",
      "Yes, I have a bike (can transport LARGE packages)",
      "No, I do not have private tranpsortation"
    ],
    "required": false,
    "answer": []
  },
  {
    "title": "I can provide the following ad hoc support (non-binding)",
    "fieldName": "I can provide the following support (non-binding)",
    "description": [
      {
        "type": "text",
        "content": "If you're able to pick up groceries, please ALSO register as a volunteer with Invisible Hands Deliver at this link: "
      },
      {
        "type": "a",
        "href": "https://www.invisiblehandsdeliver.com/volunteer"
      }
    ],
    "fieldType": {
      "type": "Multiple select",
      "showAs": "List"
    },
    "possibleValues": [
      "Meal prep",
      "Meal delivery",
      "Scheduling appointments",
      "Picking up groceries/medications",
      "Navigating the health care/insurance websites",
      "Check-in on folks throughout the day (in-person or phone call)",
      "Pet-sitting/walking/feeding",
      "Translation",
      "Monetary donation",
      "Donation of other kind"
    ],
    "required": false,
    "answer": []
  },
  {
    "title": "Beyond support on a case-by-case basis, are you interested in joining:",
    "fieldName": "Beyond support on a case by case basis, are you interested in joining:",
    "description": null,
    "fieldType": {
      "type": "Multiple select",
      "showAs": "List"
    },
    "possibleValues": [
      "A “care pod” to support a local neighbor on a weekly basis",
      "One of our administrative teams (community, fundraising, operations, etc.)",
      "Our communications team (social media, PR, newsletters, etc.)",
      "Our civic engagement team (voter registration, census outreach, etc.)",
      "Our dispatching team to field calls & requests from neighbors (with weekly shifts)",
      "Subject-specific working groups (housing assistance, disability rights, distance learning, etc.)"
    ],
    "required": false,
    "answer": []
  },
  {
    "title": "Please select any language(s) you have verbal fluency with:",
    "fieldName": "Please select any language you have verbal fluency with:",
    "description": null,
    "fieldType": {
      "type": "Multiple select",
      "showAs": "Dropdown"
    },
    "possibleValues": [
      "Albanian",
      "American Sign Language (ASL)",
      "Arabic",
      "Bengali",
      "Bosnian/Croatian/Serbian",
      "Bulgarian",
      "Cantonese",
      "Creole Latin",
      "Dutch",
      "Farsi",
      "Finnish",
      "French",
      "German",
      "Greek",
      "Hebrew",
      "Hindi",
      "Indonesian",
      "Italian",
      "Japanese",
      "Korean",
      "Mandarin",
      "Other",
      "Polish",
      "Portugese",
      "Punjabi",
      "Russian",
      "Spanish",
      "Swedish",
      "Tagalog",
      "Turkish",
      "Urdu",
      "Vietnamese"
    ],
    "required": false,
    "answer": []
  },
  {
    "title": "// TODO: FIX TITLE // Please list what other languages you speak, if any, and level of fluency.",
    "fieldName": "Please list what other languages you speak, if any, and level of fluency.",
    "description": null,
    "fieldType": {
      "type": "Single line text",
      "showAs": null
    },
    "possibleValues": null,
    "required": false,
    "answer": ""
  },
  {
    "title": "What specialized skills do you have that you might want to share with the community?",
    "fieldName": "Specialized Skills",
    "description": null,
    "fieldType": {
      "type": "Multiple select",
      "showAs": "Dropdown"
    },
    "possibleValues": [
      "Benefits Applications (SNAP, etc.)",
      "Childcare",
      "Communications (Writing, Editing, Database Management)",
      "Community Organizing",
      "Creative + Design",
      "Data Analytics",
      "Disability Rights + Resources",
      "Education",
      "Elderly Care",
      "Fundraising",
      "Grantmaking + Grantwriting",
      "Horticulture + Homesteading",
      "Housing Assistance",
      "Job Application Support",
      "Legal Assistance",
      "LGBTQ+ Rights + Resources",
      "Licensed Food Handler",
      "Licensed Therapist",
      "Medical Assistance",
      "Operations + Logistics",
      "Pet Care + Animal Assistance",
      "Public Relations + Media Response",
      "Sewing",
      "Social Work",
      "Tax Assistance + Accounting",
      "Tech + Engineering",
      "Undocumented Community Rights + Resources",
      "Unemployment Insurance Assistance",
      "Handyman",
    ],
    "required": false,
    "answer": []
  },
  {
    "title": "// TODO: Needed? // Any other resources, skills, interests, certifications, or knowledge do you hold that you would be open to sharing with the neighborhood?",
    "fieldName": "What other resources, skills, interests, certifications, or knowledge do you hold that you would be open to sharing with the neighborhood?",
    "description": null,
    "fieldType": {
      "type": "Single line text",
      "showAs": null
    },
    "possibleValues": null,
    "required": false,
    "answer": ""
  },
  {
    "title": "Do you have access to personal protective equipment (PPE)?",
    "fieldName": "Do you have access to personal protective equipment (PPE)?",
    "description": null,
    "fieldType": {
      "type": "Single select",
      "showAs": "List"
    },
    "possibleValues": [
      "Yes",
      "No"
    ],
    "required": false,
    "answer": ""
  },
  {
    "title": "// TODO: Needed? // We are looking to identify other community/neighborhood institutions that might need support. Please list any such organizations you have contact with.",
    "fieldName": "We are looking to identify other community/neighborhood institutions that might need support. Please list any such organizations you have contact with.",
    "description": null,
    "fieldType": {
      "type": "Single line text",
      "showAs": null
    },
    "possibleValues": null,
    "required": false,
    "answer": ""
  },
  {
    "title": "// TODO: Needed? // Anything else you would like to add?",
    "fieldName": "Anything else you would like to add?",
    "description": null,
    "fieldType": {
      "type": "Single line text",
      "showAs": null
    },
    "possibleValues": null,
    "required": false,
    "answer": ""
  }
]

const questionsWithBlankAnswers = () => {
  const questionObject = {};
  questions.forEach(question => {
    questionObject[question.fieldName] = question.answer;
  })
  return questionObject;
}

export { questions, questionsWithBlankAnswers };
