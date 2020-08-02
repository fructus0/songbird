import React, {Component} from "react";
import "./styles/Details.css";
import BirdImage from "../media/default-bird.jpg";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";


class Details extends Component {
    render() {
        return (
            <div className="col-md-6">
                <div className="bird-details card">
                    <p className="guide">
                        <span>Послушайте плеер.</span>
                        <span>Выберите птицу из списка</span>
                    </p>
                    <div className="card-body">
                        <img className="bird-img" src={BirdImage} alt="bird"/>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item"><h4 className="bird-name">Зяблик</h4></li>
                            <li className="list-group-item"> <span className="bird-latin">Fringilla coelebs</span></li>
                            <li className="list-group-item"><AudioPlayer sho className="audio-player-detail" showJumpControls={false}/></li>
                        </ul>
                    </div>
                    <p className="bird-description">В дикой природе насчитывается 450 видов зябликов. Зимой зяблики ведут стайный образ жизни. Иногда в их семьях можно увидеть воробьев. Запевают зяблики весной, с наступлением брачного периода. Их пение – это заливистые многоминутные рулады.</p>
                </div>
            </div>
        )
    }
}
export default Details;