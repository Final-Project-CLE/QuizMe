const mongoose = require("mongoose");
const db = require("../models/Quizes");
mongoose.Promise = global.Promise;

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/quizesdb"
);

const quizSeed = [
    {
        "id": 1,
        "quizTitle": "Test Quiz 1",
        "author": "Test Author 1",
        "q1": {
            "question": "Question 1 q1",
            "answers": {
                "answer1": {
                    "answer": "This is the first answer. It is wrong",
                    "correct": "false"
                },
                "answer2": {
                    "answer": "This is the second answer. It is wrong",
                    "correct": "false"
                },
                "answer3": {
                    "answer": "This is the third answer. It is wrong",
                    "correct": "false"
                },
                "answer4": {
                    "answer": "This is the fourth answer. It is right",
                    "correct": "true"
                }
            }
        },
        "q2": {
            "question": "Question 2 q1",
            "answers": {
                "answer1": {
                    "answer": "This is the first answer. It is wrong",
                    "correct": "false"
                },
                "answer2": {
                    "answer": "This is the second answer. It is right",
                    "correct": "true"
                },
                "answer3": {
                    "answer": "This is the third answer. It is wrong",
                    "correct": "false"
                },
                "answer4": {
                    "answer": "This is the fourth answer. It is wrong",
                    "correct": "false"
                }
            }
        },
        "q3": {
            "question": "Question 3 q1",
            "answers": {
                "answer1": {
                    "answer": "This is the first answer. It is right",
                    "correct": "true"
                },
                "answer2": {
                    "answer": "This is the second answer. It is wrong",
                    "correct": "false"
                },
                "answer3": {
                    "answer": "This is the third answer. It is wrong",
                    "correct": "false"
                },
                "answer4": {
                    "answer": "This is the fourth answer. It is wrong",
                    "correct": "false"
                }
            }
        }
    },
    {
        "id": 2,
        "quizTitle": "Test Quiz 2",
        "author": "Test Author 2",
        "q1": {
            "question": "Question 1 q2",
            "answers": {
                "answer1": {
                    "answer": "This is the first answer for q1. It is wrong",
                    "correct": "false"
                },
                "answer2": {
                    "answer": "This is the second answer for q1. It is wrong",
                    "correct": "false"
                },
                "answer3": {
                    "answer": "This is the third answer for q1. It is wrong",
                    "correct": "false"
                },
                "answer4": {
                    "answer": "This is the fourth answer for q1. It is right",
                    "correct": "true"
                }
            }
        },
        "q2": {
            "question": "Question 2 q2",
            "answers": {
                "answer1": {
                    "answer": "This is the first answer for q2. It is wrong",
                    "correct": "false"
                },
                "answer2": {
                    "answer": "This is the second answer for q2. It is right",
                    "correct": "true"
                },
                "answer3": {
                    "answer": "This is the third answer for q2. It is wrong",
                    "correct": "false"
                },
                "answer4": {
                    "answer": "This is the fourth answer for q2. It is wrong",
                    "correct": "false"
                }
            }
        },
        "q3": {
            "question": "Question 3 q2",
            "answers": {
                "answer1": {
                    "answer": "This is the first answer for q3. It is right",
                    "correct": "true"
                },
                "answer2": {
                    "answer": "This is the second answer for q3. It is wrong",
                    "correct": "false"
                },
                "answer3": {
                    "answer": "This is the third answer for q3. It is wrong",
                    "correct": "false"
                },
                "answer4": {
                    "answer": "This is the fourth answer for q3. It is wrong",
                    "correct": "false"
                }
            }
        }
    }
]
db
  .remove({})
  .then(() => db.collection.insertMany(quizSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });