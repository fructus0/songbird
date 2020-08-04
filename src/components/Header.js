import React from "react";
import "./styles/Header.css";
import {connect} from "react-redux";
const Header = ({questions, currentQuestion}) => {
        return (
            <header className="header d-flex">
                <div className="header-panel d-flex flex-row">
                    <h1 className="logo">Song Birds</h1>
                    <h4 className="score-holder">
                        Score: <span className="score">0</span>
                    </h4>
                </div>
                <ul className="pagination">
                    {
                        questions.map((item, key) => {
                            return (
                                <li className={key === currentQuestion? "page-item active" : "page-item"} key={key}><a className="page-link" href="/#">{item}</a></li>
                            )
                        })
                    }

                </ul>
            </header>
        )
}
const mapStateToProps = (state) => {
    return {
        questions: state.questions,
        currentQuestion: state.currentQuestion
    }
}
export default connect(mapStateToProps) (Header);