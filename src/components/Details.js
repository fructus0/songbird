import React from "react";
import "./styles/Details.css";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import {connect} from "react-redux";


const Details = ({clicked}) => {
        return (
            <div className="col-md-6">
                <div className="bird-details card">
                    {
                        clicked.name === ""?(
                                <p className="guide">
                                    <span>Послушайте плеер.</span>
                                    <span>Выберите птицу из списка</span>
                                </p>
                        ) : ( <div className="card-body">
                            <img className="bird-img" src={clicked.image} alt="bird"/>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"><h4 className="bird-name">{clicked.name}</h4></li>
                                <li className="list-group-item"> <span className="bird-latin">{clicked.species}</span></li>
                                <li className="list-group-item"><AudioPlayer sho className="audio-player-detail" src={clicked.audio} showJumpControls={false}/></li>
                            </ul>
                            <p className="bird-description">{clicked.description}</p>
                        </div>)
                    }
                </div>
            </div>
        )
}
const mapStateToProps = (state) => {
    return {
        clicked : state.clicked,
    }
}
export default connect(mapStateToProps) (Details);