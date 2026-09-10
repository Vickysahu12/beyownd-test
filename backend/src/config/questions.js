// 30 MCQs — C Programming (Basics to Operators)

export const mcqQuestions = [
  // =========================
  // EASY — Q1 to Q10
  // =========================

  {
    id: 1,
    question: "Which header file is required to use printf() in C?",
    options: ["<stdlib.h>", "<stdio.h>", "<string.h>", "<conio.h>"],
    correctAnswer: "<stdio.h>",
  },

  {
    id: 2,
    question: "Which of the following is a valid variable declaration in C?",
    options: ["int age;", "integer age;", "age int;", "declare int age;"],
    correctAnswer: "int age;",
  },

  {
    id: 3,
    question: "Which symbol is used to end a statement in C?",
    options: [":", ".", ";", ","],
    correctAnswer: ";",
  },

  {
    id: 4,
    question: "Which of the following is a valid identifier in C?",
    options: ["2value", "my-value", "_value", "float"],
    correctAnswer: "_value",
  },

  {
    id: 5,
    question: "Which data type is commonly used to store a single character?",
    options: ["char", "string", "character", "text"],
    correctAnswer: "char",
  },

  {
    id: 6,
    question: "Which format specifier is used to print an integer using printf()?",
    options: ["%c", "%f", "%d", "%s"],
    correctAnswer: "%d",
  },

  {
    id: 7,
    question: "Which of the following is a single-line comment in C?",
    options: ["// comment", "/* comment */", "# comment", "-- comment"],
    correctAnswer: "// comment",
  },

  {
    id: 8,
    question: "Which keyword is used to declare a constant variable in C?",
    options: ["constant", "const", "fixed", "define"],
    correctAnswer: "const",
  },

  {
    id: 9,
    question: "Which operator is used for assignment in C?",
    options: ["==", "=", ":=", "=>"],
    correctAnswer: "=",
  },

  {
    id: 10,
    question: "What is the correct way to declare a floating-point variable?",
    options: ["float price;", "decimal price;", "floating price;", "float = price;"],
    correctAnswer: "float price;",
  },


  // =========================
  // EASY → MODERATE — Q11 to Q20
  // =========================

  {
    id: 11,
    question: "What will be the value of x after this statement?\nint x = 10 + 5;",
    options: ["15", "105", "10", "5"],
    correctAnswer: "15",
  },

  {
    id: 12,
    question: "Which operator gives the remainder after integer division?",
    options: ["/", "%", "//", "%%"],
    correctAnswer: "%",
  },

  {
    id: 13,
    question: "What will be the output?\nint a = 10;\nprintf(\"%d\", a++);",
    options: ["9", "10", "11", "Compilation error"],
    correctAnswer: "10",
  },

  {
    id: 14,
    question: "What will be the value of x?\nint x = 5;\nx += 3;",
    options: ["2", "5", "8", "15"],
    correctAnswer: "8",
  },

  {
    id: 15,
    question: "Which operator has the highest priority among the following?",
    options: ["+", "*", "=", "=="],
    correctAnswer: "*",
  },

  {
    id: 16,
    question: "What will be the output?\nint a = 5, b = 2;\nprintf(\"%d\", a / b);",
    options: ["2.5", "2", "3", "2.0"],
    correctAnswer: "2",
  },

  {
    id: 17,
    question: "What will be the value of x?\nint x = 4;\nx *= 2 + 3;",
    options: ["11", "20", "14", "24"],
    correctAnswer: "20",
  },

  {
    id: 18,
    question: "Which expression correctly checks whether a == 10?",
    options: ["a = 10", "a == 10", "a === 10", "a := 10"],
    correctAnswer: "a == 10",
  },

  {
    id: 19,
    question: "What will be the output?\nint x = 10;\nprintf(\"%d\", ++x);",
    options: ["10", "11", "9", "Compilation error"],
    correctAnswer: "11",
  },

  {
    id: 20,
    question: "What will be the value of result?\nint result = 10 > 5;",
    options: ["10", "5", "1", "0"],
    correctAnswer: "1",
  },


  // =========================
  // MODERATE → HARD — Q21 to Q30
  // =========================

  {
    id: 21,
    question: "What will be the output?\nint a = 5;\nint b = 10;\nprintf(\"%d\", a < b && b > 5);",
    options: ["0", "1", "5", "10"],
    correctAnswer: "1",
  },

  {
    id: 22,
    question: "What will be the output?\nint a = 5;\nint b = 10;\nprintf(\"%d\", a > b || b == 10);",
    options: ["0", "1", "5", "10"],
    correctAnswer: "1",
  },

  {
    id: 23,
    question: "What will be the value of x?\nint x = 5 + 3 * 2;",
    options: ["16", "11", "13", "10"],
    correctAnswer: "11",
  },

  {
    id: 24,
    question: "What will be the output?\nint x = 10;\nprintf(\"%d\", x++ + 5);",
    options: ["15", "16", "10", "11"],
    correctAnswer: "15",
  },

  {
    id: 25,
    question: "What will be the output?\nint x = 10;\nprintf(\"%d\", ++x + 5);",
    options: ["15", "16", "11", "10"],
    correctAnswer: "16",
  },

  {
    id: 26,
    question: "What will be the output?\nint a = 10;\nint b = 3;\nprintf(\"%d\", a % b + b);",
    options: ["1", "3", "4", "10"],
    correctAnswer: "4",
  },

  {
    id: 27,
    question: "What will be the value of x?\nint x = 5;\nx = x + 2 * 3;",
    options: ["21", "11", "15", "10"],
    correctAnswer: "11",
  },

  {
    id: 28,
    question: "What will be the output?\nint a = 5;\nprintf(\"%d\", !a);",
    options: ["5", "1", "0", "-5"],
    correctAnswer: "0",
  },

  {
    id: 29,
    question: "What will be the output?\nint a = 0;\nprintf(\"%d\", !a);",
    options: ["0", "1", "-1", "Compilation error"],
    correctAnswer: "1",
  },

  {
    id: 30,
    question: "What will be the final value of x?\nint x = 5;\nx += 2 * 3 - 1;",
    options: ["10", "11", "12", "20"],
    correctAnswer: "10",
  },
];


// 5 Definition / Short Answer
export const definitionQuestions = [
  {
    id: 1,
    question: "What is a variable in C?",
  },
  {
    id: 2,
    question: "What is a data type in C? Give any three examples.",
  },
  {
    id: 3,
    question: "What is the difference between = and == operators in C?",
  },
  {
    id: 4,
    question: "What is the difference between ++x and x++?",
  },
  {
    id: 5,
    question: "What is operator precedence in C?",
  },
];


// 10 Yes / No
export const yesNoQuestions = [
  {
    id: 1,
    question: "The main() function is the starting point of a C program.",
    correctAnswer: "Yes",
  },
  {
    id: 2,
    question: "A variable declared as int can normally store decimal values.",
    correctAnswer: "No",
  },
  {
    id: 3,
    question: "The % operator gives the remainder of integer division.",
    correctAnswer: "Yes",
  },
  {
    id: 4,
    question: "The = operator is used to compare two values in C.",
    correctAnswer: "No",
  },
  {
    id: 5,
    question: "The == operator is used to compare two values.",
    correctAnswer: "Yes",
  },
  {
    id: 6,
    question: "The expression 5 / 2 produces 2.5 when both values are integers.",
    correctAnswer: "No",
  },
  {
    id: 7,
    question: "The ++ operator can increase the value of a variable by 1.",
    correctAnswer: "Yes",
  },
  {
    id: 8,
    question: "The ! operator reverses a logical value.",
    correctAnswer: "Yes",
  },
  {
    id: 9,
    question: "In C, * always has lower precedence than +.",
    correctAnswer: "No",
  },
  {
    id: 10,
    question: "The expression !0 evaluates to 1 in C.",
    correctAnswer: "Yes",
  },
];