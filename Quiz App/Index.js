//data for the quotes
const quizData = [
    {
        question: "What is the most used programming language in 2019?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "Who is the President of US?",
        a: "Florin Pop",
        b: "Donald Trump",
        c: "Ivan Saldano",
        d: "Mihai Andrei",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Cascading Style Sheet",
        c: "Jason Object Notation",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];

//html files
let Quiz = document.getElementById("quiz");
let question = document.getElementById("question");
let Answers = document.querySelectorAll(".answer");
let options1 = document.getElementById("a_text");
let options2 = document.getElementById("b_text");
let options3 = document.getElementById("c_text");
let options4 = document.getElementById("d_text");
let Button = document.getElementById("submit");

//starting state
let Current_Question = 0;
let score = 0;

//Load the question and answers

const LoadData = () => {

    question.innerText = quizData[Current_Question].question;
    options1.innerHTML = quizData[Current_Question].a;
    options2.innerHTML = quizData[Current_Question].b;
    options3.innerHTML = quizData[Current_Question].c;
    options4.innerHTML = quizData[Current_Question].d;
};

LoadData();

//select Answer
const GetSelected = () => {
    let answers = undefined;

    Answers.forEach((item) => {
        if (item.checked) {
            answers = item.id;
        };
    });

    return answers;
};

//Deselect Answer
const deselectAnswers = () => {
    Answers.forEach((item) => {
        item.checked = false;
    });
};

//Clicking Submit Button
const Submit_Answer = () => {

    Button.addEventListener("click", () => {
        let Answer = GetSelected();
        console.log("Clicked");

        if (Answer) {
            Answer === quizData[Current_Question].correct;
            score++;
        }
        Current_Question++;

        if (Current_Question < quizData.length) {
            LoadData();
        } else {
            Quiz.innerHTML = `
            <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
            <button onclick="location.reload()">Reload</button>

            `
        }
    })
};

Submit_Answer();