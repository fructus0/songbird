import React from "react";
import "./styles/Answers.css";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as actions from "../actions.js";
import AnswerItem from "./AnswerItem";

const Answers = ({answers}) => {
        return (
            <div className="col-md-6 answers">
                <ul className="answer-list list-group">
                    {answers.map((item, key) => {
                        return (
                            <AnswerItem item={item}
                                        key={key}/>
                        )
                    })}
                </ul>
            </div>
        )
}
const mapStateToProps = (state) => {
    return {
        answers:state.answers,
        clicked : state.clicked,
    }
}
const mapDespatchToProps = (dispatch) => {
    const {answerOnClick} = bindActionCreators(actions, dispatch);
    return {answerOnClick: (element) => answerOnClick(element)};
}

export default connect(mapStateToProps, mapDespatchToProps) (Answers);