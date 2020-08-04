import BirdData from "./birds";
let count = 0;
let answers = BirdData[count];
const initState={
    answers: answers.map(item => ({...item, isClicked:false})),
    correctAnswer:answers[Math.floor(Math.random() * 6)],
    clicked: {name : ""},
    isCorrect: false,
    score: 0,
    currentScore: 5,
    questions: ["Разминка", "Воробьиные", "Лесные птицы", "Певчие птицы", "Хищные птицы", "Морские птицы"],
    currentQuestion: count
}
export const reducer = (state = initState, action) => {
    switch (action.type) {
        case "answerOnClick": {
            const newState = {...state, clicked: action.payload};
            newState.answers[newState.clicked.id - 1] = {...newState.clicked, isClicked: true}
            if(newState.clicked.name === newState.correctAnswer.name)
                newState.isCorrect = true;
           return newState;
        }
        case "nextLevel": {
            answers = BirdData[++count];
            const newState = {
                score: state.score,
                answers: answers.map(item => ({...item, isClicked: false})),
                correctAnswer: answers[Math.floor(Math.random() * 6)],
                clicked: {name: ""},
                isCorrect: false,
                currentScore: 5,
                questions: ["Разминка", "Воробьиные", "Лесные птицы", "Певчие птицы", "Хищные птицы", "Морские птицы"],
                currentQuestion: count
            }
            return newState;
        }
        default: {
            return state;
        }
    }
}