import React from "react";
import "./styles/Answers.css";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as actions from "../actions";


const AnswerItem = ({correctAnswer, item, answerOnClick, clicked, isCorrect}) => {
    if(clicked && correctAnswer.name === item.name) {
    }

    return (
        <li className="list-group-item" onClick={() => answerOnClick(item)}>
            <span className={checker({correctAnswer, item, clicked})}></span>
            {item.name}
        </li>
    )
}
let checker = ({correctAnswer, item}) => {
    let result = "li-sens";
    if(item.isClicked) {
        result += item.name === correctAnswer.name? " win" : " lose";
    }
    return result;
}
const mapStateToProps = (state) => {
    return {
        answers:state.answers,
        correctAnswer: state.correctAnswer,
        clicked : state.clicked,
        isCorrect: state.isCorrect
    }
}
const mapDespatchToProps = (dispatch) => {
    const {answerOnClick} = bindActionCreators(actions, dispatch);
    return {answerOnClick: (element) => answerOnClick(element)};
}

export default connect(mapStateToProps, mapDespatchToProps) (AnswerItem);