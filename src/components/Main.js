import React, {Component} from "react";
import Answers from "./Answers";
import Details from "./Details";
import "./styles/Main.css";
class Main extends Component {
    render() {
        return (
            <div className="row mb2">
                <Answers></Answers>
                <Details></Details>
                <button className="btn">Next Level</button>
            </div>
        )
    }
}
export default Main;