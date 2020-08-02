import React, {Component} from "react";
import "./styles/Answers.css";

class Answers extends Component {
    render() {
        return (
            <div className="col-md-6 answers">
                <ul className="answer-list list-group">
                    <li className="list-group-item win">
                        <span className="li-sens"></span>
                        Ворон
                    </li>
                    <li className="list-group-item lose">
                        <span className="li-sens"></span>
                        Журавль
                    </li>
                    <li className="list-group-item">
                        <span className="li-sens"></span>
                        Ласточка
                    </li>
                    <li className="list-group-item">
                        <span className="li-sens"></span>
                        Козодой
                    </li>
                    <li className="list-group-item">
                        <span className="li-sens"></span>
                        Кукушка
                    </li>
                    <li className="list-group-item">
                        <span className="li-sens"></span>
                        Синица
                    </li>
                </ul>
            </div>
        )
    }
}
export default Answers;