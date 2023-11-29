
const questions = [
    {
        question: "Câu hỏi 1",
        choices: ["Đáp án A", "Đáp án B", "Đáp án C", "Đáp án D"],
        correctAnswer: "A"
    },
    {
        question: "Câu hỏi 2",
        choices: ["Đáp án A", "Đáp án B", "Đáp án C", "Đáp án D"],
        correctAnswer: "B"
    },
    {
        question: "Câu hỏi 3",
        choices: ["Đáp án A", "Đáp án B", "Đáp án C", "Đáp án D"],
        correctAnswer: "C"
    }
];

const questionElement = document.getElementById('question');
const choicesElement = document.getElementById('choices');
const submitButton = document.getElementById('submit-btn');
let currentQuestionIndex = 0;
let score = 0;

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;
    choicesElement.innerHTML = '';

    currentQuestion.choices.forEach((choice) => {
        const li = document.createElement('li');
        const radioBtn = document.createElement('input');
        radioBtn.type = 'radio';
        radioBtn.name = 'answer';
        radioBtn.value = choice;
        li.appendChild(radioBtn);
        li.appendChild(document.createTextNode(choice));
        choicesElement.appendChild(li);
    });
}

function checkAnswer() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked').value;
    const currentQuestion = questions[currentQuestionIndex];

    if (selectedAnswer === currentQuestion.correctAnswer) {
        score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex === questions.length) {
        displayResult();
    } else {
        showQuestion();
    }
}

function displayResult() {
    questionElement.innerText = `Bạn đã trả lời đúng ${score}/${questions.length} câu hỏi.`;
    choicesElement.innerHTML = '';
    submitButton.style.display = 'none';
}

showQuestion();
submitButton.addEventListener('click', checkAnswer);

