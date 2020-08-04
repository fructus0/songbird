import React from "react";
import "./styles/Bird.css";
import birdImage from "../media/default-bird.jpg";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import {connect} from "react-redux";


const Bird = ({correctAnswer, clicked, isCorrect}) => {
        return (
            <div className="bird-holder jumbotron rounded">
                <img className="bird-image" src={isCorrect? correctAnswer.image : birdImage} alt="bird"/>
                <div className="bird-options">
                    <h3 className="bird-name">{isCorrect? correctAnswer.name : "******"}</h3>
                    <hr></hr>
                    <AudioPlayer className="audio-player" src={correctAnswer.audio}  showJumpControls={false}/>
                </div>
            </div>
        )
}
const mapStateToProps = (state) => {
    return {
        correctAnswer:state.correctAnswer,
        clicked:state.clicked,
        isCorrect:state.isCorrect
    }
}
export default connect(mapStateToProps) (Bird);