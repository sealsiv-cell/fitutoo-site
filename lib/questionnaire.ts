// FitU Apex founding cohort questionnaire.
// Edit questions and options here; the page and the server check both use this file.

export type Choice = { key: string; label: string; options: string[] };

export const cohortQuestions: Choice[] = [
  {
    key: "job",
    label: "What best describes your current job?",
    options: [
      "Business owner or entrepreneur",
      "Executive or senior manager",
      "Office or corporate professional",
      "Healthcare",
      "Education",
      "First responder or military",
      "Trades, construction or manual labor",
      "Service, hospitality or retail",
      "Student",
      "Stay-at-home parent or caregiver",
      "Retired",
      "Between jobs",
    ],
  },
  {
    key: "goal",
    label: "What is your main goal for the next 90 days?",
    options: [
      "Lose body fat",
      "Build muscle and strength",
      "Have more energy",
      "Improve my health numbers (blood pressure, blood sugar, cholesterol)",
      "Build habits I can stick with",
      "Improve athletic performance",
      "Reduce stress and feel better mentally",
    ],
  },
  {
    key: "why",
    label: "Why should you be part of the founding cohort?",
    options: [
      "I'm ready to commit and show up every week",
      "I'll give honest feedback to help shape the app",
      "I need accountability and a community to keep me going",
      "I'm starting over and want structure",
      "I want to inspire the people around me",
    ],
  },
  {
    key: "time",
    label: "How much time can you dedicate each week?",
    options: ["Less than 2 hours", "2 to 3 hours", "4 to 5 hours", "6 or more hours"],
  },
  {
    key: "days",
    label: "How many days a week can you train?",
    options: ["1 to 2 days", "3 days", "4 days", "5 or more days"],
  },
  {
    key: "activity",
    label: "How active are you right now?",
    options: [
      "Just getting started",
      "Active now and then",
      "Working out 1 to 2 times a week",
      "Working out 3 or more times a week",
    ],
  },
];

export const US_STATES = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware",
  "District of Columbia", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas",
  "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi",
  "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York",
  "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island",
  "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington",
  "West Virginia", "Wisconsin", "Wyoming", "Puerto Rico", "Outside the US",
];
