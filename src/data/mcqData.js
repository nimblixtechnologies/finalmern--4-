const mcqData = {
  javascript: [
    {
      id: 1,
      question: "Which is a JavaScript framework?",
      optionA: "Laravel",
      optionB: "Django",
      optionC: "React",
      optionD: "Spring",
      correctAnswer: "C",
    },
    {
      id: 2,
      question: "Which method is used to send data to a server?",
      optionA: "GET",
      optionB: "POST",
      optionC: "FETCH",
      optionD: "READ",
      correctAnswer: "B",
    },
  ],

  java: [
    {
      id: 1,
      question: "Which keyword is used to inherit a class in Java?",
      optionA: "extends",
      optionB: "implements",
      optionC: "inherits",
      optionD: "interface",
      correctAnswer: "A",
    },
    {
      id: 2,
      question: "Which method is the entry point of a Java program?",
      optionA: "start()",
      optionB: "main()",
      optionC: "run()",
      optionD: "init()",
      correctAnswer: "B",
    },
  ],

  python: [
    {
      id: 1,
      question: "Which of these is a mutable data type in Python?",
      optionA: "tuple",
      optionB: "list",
      optionC: "str",
      optionD: "int",
      correctAnswer: "B",
    },
    {
      id: 2,
      question: "Which keyword is used for function in Python?",
      optionA: "def",
      optionB: "function",
      optionC: "func",
      optionD: "define",
      correctAnswer: "A",
    },
  ],

  mern: [
    {
      id: 1,
      question: "What does MERN stand for?",
      optionA: "MongoDB, Express, React, Node",
      optionB: "MySQL, Express, React, Node",
      optionC: "MongoDB, Ember, React, Node",
      optionD: "MongoDB, Express, Redux, Node",
      correctAnswer: "A",
    },
    {
      id: 2,
      question: "Which database is used in MERN stack?",
      optionA: "MySQL",
      optionB: "PostgreSQL",
      optionC: "MongoDB",
      optionD: "Oracle",
      correctAnswer: "C",
    },
    {
      id: 3,
      question: "Which framework is used to build backend in MERN?",
      optionA: "React",
      optionB: "Express",
      optionC: "Angular",
      optionD: "Vue",
      correctAnswer: "B",
    },
    {
      id: 4,
      question: "React is mainly used for?",
      optionA: "Database",
      optionB: "Backend logic",
      optionC: "UI development",
      optionD: "Server management",
      correctAnswer: "C",
    },
    {
      id: 5,
      question: "Node.js is built on which engine?",
      optionA: "Java Engine",
      optionB: "Python Engine",
      optionC: "V8 Engine",
      optionD: "SpiderMonkey",
      correctAnswer: "C",
    },
    {
      id: 6,
      question: "Which hook is used for state management in React?",
      optionA: "useFetch",
      optionB: "useEffect",
      optionC: "useState",
      optionD: "useRef",
      correctAnswer: "C",
    },
    {
      id: 7,
      question: "Which HTTP method is used to update data?",
      optionA: "GET",
      optionB: "POST",
      optionC: "PUT",
      optionD: "DELETE",
      correctAnswer: "C",
    },
    {
      id: 8,
      question: "Which library is commonly used for routing in React?",
      optionA: "Axios",
      optionB: "Redux",
      optionC: "React Router",
      optionD: "Mongoose",
      correctAnswer: "C",
    },
    {
      id: 9,
      question: "Mongoose is used with which database?",
      optionA: "MySQL",
      optionB: "MongoDB",
      optionC: "Firebase",
      optionD: "SQLite",
      correctAnswer: "B",
    },
    {
      id: 10,
      question: "Which command is used to start a React app?",
      optionA: "npm start",
      optionB: "npm run dev",
      optionC: "node index.js",
      optionD: "react start",
      correctAnswer: "A",
    },
  ],

  TechnicalInterview: [
    {
      id: 1,
      question: "Find the Second Largest Element in an Array",
      description: `Given an array of positive integers arr[] of size n, the task is to find second largest distinct element in the array.
      Note: If the second largest element does not exist, return -1.`,
      examples: [
        {
          input: "[12, 35, 1, 10, 34, 1]",
          output: "34",
        },
        {
          input: "[10, 5, 10]",
          output: "5",
        },
        {
          input: "[10, 10, 10]",
          output: "-1",
        },
      ],
    },
    {
      id: 2,
      question: "Find Missing and Repeating Numbers in an Array",
      description: `Given an unsorted array arr[] of size n, containing elements from the range 1 to n, find the missing number and the duplicate number.`,
      examples: [
        {
          input: "[3, 1, 3]",
          output: "[3, 2]",
        },
        {
          input: "[4, 3, 6, 2, 1, 1]",
          output: "[1, 5]",
        },
      ],
    },
  ],
};

export default mcqData;
