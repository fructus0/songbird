import React, {Component} from "react";
import Answers from "./Answers";
import Details from "./Details";
class Main extends Component {
    render() {
        return (
            <div className="row mb2">
                <Answers></Answers>
                <Details></Details>
            </div>
        )
    }
}
export default Main;