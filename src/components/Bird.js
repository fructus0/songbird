import React, {Component} from "react";
import "./styles/Bird.css";
import birdImage from "../media/default-bird.jpg";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
class Bird extends Component {
    render() {
        return (
            <div className="bird-holder jumbotron rounded">
                <img className="bird-image" src={birdImage} alt="bird"/>
                <div className="bird-options">
                    <h3 className="bird-name">******</h3>
                    <hr></hr>
                    <AudioPlayer className="audio-player" showJumpControls={false}/>
                </div>
            </div>
        )
    }
}
export default Bird;