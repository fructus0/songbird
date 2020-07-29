import React, {Component} from "react";
import "./styles/Header.css";

class Header extends Component {
    render() {
        return (
            <header className="header d-flex">
                <div className="header-panel d-flex flex-row">
                    <h1 className="logo">Song Birds</h1>
                    <h4 className="score-holder">
                        Score: <span className="score">0</span>
                    </h4>
                </div>
                <ul className="pagination">
                    <li className="page-item active"><a className="page-link" href="/#">Разминка</a></li>
                    <li className="page-item"><a className="page-link" href="/#">Воробьиные</a></li>
                    <li className="page-item"><a className="page-link" href="/#">Лесные птицы</a></li>
                    <li className="page-item"><a className="page-link" href="/#">Певчие птицы</a></li>
                    <li className="page-item"><a className="page-link" href="/#">Хищные птицы</a></li>
                    <li className="page-item"><a className="page-link" href="/#">Морские птицы</a></li>
                </ul>
            </header>
        )
    }
}
export default Header