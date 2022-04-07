const questions = [
  {
    question:
      "What is the maximum time limit for police to detain you without arrest?",
    answers: [
      { choice: 1, text: "36 hours", correct: false },
      { choice: 2, text: "No set limit", correct: false },
      { choice: 3, text: "24 hours", correct: true },
      {
        choice: 4,
        text: "You cannot be detained without an arrest",
        correct: false,
      },
    ],
    context:
      "Police are allowed to detain you for longer than 24 hours in specific circumstances including suspicion of terrorism, but 24 hours is the standard limit",
  },
  {
    question: "Do you have a right to make a phone call once arrested?",
    answers: [
      { choice: 5, text: "Yes", correct: false },
      { choice: 6, text: "No", correct: true },
    ],
    context:
      "You have the right for some one to be notified of your arrest, but this isn't necessarily a phone call you are allowed to make yourself",
  },
  {
    question: "Can the police enter your home without a warrant?",
    answers: [
      { choice: 7, text: "Yes", correct: true },
      { choice: 8, text: "No", correct: false },
    ],
    context:
      "In specific circumstances police can enter your house without a warrant, this includes to prevent loss of life or destruction of property.",
  },
  {
    question: "Do police need to provide a reason to search you?",
    answers: [
      { choice: 9, text: "Yes", correct: false },
      { choice: 10, text: "No", correct: true },
    ],
    context:
      "Usually police must provide a reason, however there are exceptions, in particular if there has been an act of violence or terrorism in the area in the last 48 hours",
  },
  {
    question:
      "Should I resist arrest if I believe I am being unlawfully charged?",
    answers: [
      { choice: 11, text: "Yes", correct: false },
      { choice: 12, text: "No", correct: true },
    ],
    context:
      "Resisting arrest is a crime within itself you can be charged with regardless of whether the arrest is lawful or not, so advice from solicitors is not to resist as it can damage any case you may make against the police force going forward",
  },
  {
    question: "If arrested, should I speak to police without a solicitor?",
    answers: [
      { choice: 13, text: "Yes", correct: false },
      { choice: 14, text: "No", correct: true },
    ],
    context:
      "You should never speak to a police officer without a solicitor present, even if they frame it as a casual chat it can still be used against you. Having a solicitor present is free and is your right",
  },
  {
    question:
      "Do I have the right to see a copy of the warrant being used for a search of my home?",
    answers: [
      { choice: 15, text: "Yes", correct: true },
      { choice: 16, text: "No", correct: false },
    ],
    context:
      "If asked the police must provide a copy of any warrants they may have obtained in order to enter your home",
  },
  {
    question:
      "Police do not have to provide any recording if I am stopped and searched",
    answers: [
      { choice: 17, text: "Yes", correct: true },
      { choice: 18, text: "No", correct: false },
    ],
    context:
      "When asked, police are legally obliglated to provide a written record if you are stopped and searched.",
  },
];

export default questions;
