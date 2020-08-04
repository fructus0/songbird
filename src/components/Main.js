import React from "react";
import Answers from "./Answers";
import Details from "./Details";
import "./styles/Main.css";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as actions from "../actions";

const Main = ({isCorrect, nextLevel}) => {
        return (
            <div className="row mb2">
                <Answers></Answers>
                <Details></Details>
                <button className={isCorrect? "btn active" : "btn"} onClick={isCorrect? nextLevel : () => {}}>Next Level</button>
            </div>
        )
}
const mapStateToProps = (state) => {
    return {
        isCorrect: state.isCorrect
    }
}
const mapDespatchToProps = (dispatch) => {
    const {nextLevel} = bindActionCreators(actions, dispatch);
    return {nextLevel};
}
export default connect(mapStateToProps, mapDespatchToProps) (Main);