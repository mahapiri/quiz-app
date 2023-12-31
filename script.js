let questions = [
    {
        "question": "Wer hat HTML erfunden?",
        "answer_1": "Robbie Williams",
        "answer_2": "Lady Gaga",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "Justin Bieber",
        "right_answer": 3
    },
    {
        "question": "Was ist die Bedeutung von HTML?",
        "answer_1": "Hyper Text Makeup Language",
        "answer_2": "Hyperlink and Text Markup Language",
        "answer_3": "Hyper Text Markup Language",
        "answer_4": "High Tech Markup Language",
        "right_answer": 3
    },
    {
        "question": "Welches HTML-Element wird verwendet, um einen Absatz zu definieren?",
        "answer_1": "<p>",
        "answer_2": "<paragraph>",
        "answer_3": "<para>",
        "answer_4": "<line>",
        "right_answer": 1
    },
    {
        "question": "Welches Attribut wird verwendet, um den Hintergrundfarbencode einer Seite festzulegen?",
        "answer_1": "bgcolor",
        "answer_2": "background-color",
        "answer_3": "color",
        "answer_4": "bg-color",
        "right_answer": 1
    },
    {
        "question": "Welches HTML-Element wird für die Definition einer Liste verwendet, bei der die Reihenfolge wichtig ist?",
        "answer_1": "<ul>",
        "answer_2": "<ol>",
        "answer_3": "<li>",
        "answer_4": "<dl>",
        "right_answer": 2
    },
    {
        "question": "Wie fügt man einen Zeilenumbruch in HTML ein?",
        "answer_1": "<break>",
        "answer_2": "<br>",
        "answer_3": "<nl>",
        "answer_4": "<lb>",
        "right_answer": 2
    },
    {
        "question": "Welches HTML-Element wird verwendet, um einen Hyperlink zu erstellen?",
        "answer_1": "<link>",
        "answer_2": "<a>",
        "answer_3": "<hlink>",
        "answer_4": "<url>",
        "right_answer": 2
    },
];

let rightQuestions = 0;
let currentQuestions = 0;
let audio_success = new Audio('audio/success.mp3');
let audio_fail = new Audio('audio/fail.mp3');


function init() {
    document.getElementById('all-questions').innerHTML = questions.length;
    showCurrentQuestion();
}

function showCurrentQuestion() {
    if(gameIsOver()) {
        showEndScreen();
    } else {
        updateProgressBar();
        updateToNextQuestion(); 
    }
}

function gameIsOver() {
    return currentQuestions >= questions.length;
}

function showEndScreen() {
    document.getElementById('end-screen').style = '';
    document.getElementById('question-body').style = 'display: none;';
    document.getElementById('all-questions-end-screen').innerHTML = questions.length;
    document.getElementById('amount-of-right-questions').innerHTML = rightQuestions;
}

function updateToNextQuestion() {
    let question = questions[currentQuestions];
    document.getElementById('question-number').innerHTML = currentQuestions + 1;
    document.getElementById('questiontext').innerHTML = question.question;
    document.getElementById('answer_1').innerHTML = question.answer_1;
    document.getElementById('answer_2').innerHTML = question.answer_2;
    document.getElementById('answer_3').innerHTML = question.answer_3;
    document.getElementById('answer_4').innerHTML = question.answer_4;
}

function updateProgressBar() {
    let percent = (currentQuestions + 1) / questions.length;
    percent = Math.round(percent * 100);
    document.getElementById('progress-bar').style.width = `${percent}%`;
}


function answer(selection) {
    let question = questions[currentQuestions];
    let selectedQuestionNumber = selection.slice(-1);

    let idOfRightAnswer = `answer_${question.right_answer}`;

    if (rightAnswerSelected(selectedQuestionNumber, question)) {
        document.getElementById(selection).parentNode.classList.add('bg-success');
        rightQuestions++;
        audio_success.play();
    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
        audio_fail.play();
    }
    document.getElementById('next-button').disabled = false;
}

function rightAnswerSelected(selectedQuestionNumber, question) {
    return selectedQuestionNumber == question.right_answer;
}

function nextQuestion() {
    currentQuestions++;
    document.getElementById('next-button').disabled = true;
    resetAnswerButtons();
    showCurrentQuestion();
}

function resetAnswerButtons() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}

function restartGame() {
    rightQuestions = 0;
    currentQuestions = 0;
    init();
    document.getElementById('question-body').style = '';
    document.getElementById('end-screen').style = 'display: none;';
}

