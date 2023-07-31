import './pages-style.css/home-stlye.css';
import Letter from "./Letter";
import { useState } from 'react';

const Home = () => {
    const [openLetter, setOpenLetter] = useState(false);

    return (
        <div className="contact">
            <audio src="/Mine (Taylor's Version).mp3" autoPlay="true" loop="true"></audio>

            <header>
                <h1>Happy 5th, my love!</h1>
                <p>08.01.2023</p>
            </header>

            <span></span>

            <div className="body">
                <div className="main-photo">
                    <img src="/Screenshot 2023-08-01 031856.jpg" alt="" />
                </div>

                <div className="row">
                    <div className="photo_1">
                        <img src="/received_556061166508421.jpeg" alt="" />
                    </div>

                    <div className="photo_2">
                        <img src="/IMG_20230707_222638_707.jpg" alt="" />
                    </div>
                </div>

                <div className="row">
                    <div className="photo_1">
                        <img src="/IMG_20230512_194850_844.jpg" alt="" />
                    </div>

                    <div className="photo_2">
                        <img src="/IMG_20230719_172652_086.jpg" alt="" />
                    </div>
                </div>

                <div className="row">
                    <div className="photo_1">
                        <img src="/IMG_20230719_172714_776.jpg" alt="" />
                    </div>

                    <div className="photo_2">
                        <img src="/IMG_20230719_172658_710.jpg" alt="" />
                    </div>
                </div>

                <div className="row">
                    <div className="photo_1">
                        <img src="/received_611871464172962.jpeg" alt="" />
                    </div>

                    <div className="photo_2">
                        <img src="/received_949995726190283.jpeg" alt="" />
                    </div>
                </div>

                <div className="row">
                    <div className="photo_1">
                        <img src="/received_194589756503277.jpeg" alt="" />
                    </div>

                    <div className="photo_2">
                        <img src="/received_265307822726431.jpeg" alt="" />
                    </div>
                </div>

                <div className="row">
                    <div className="photo_1">
                        <img src="/IMG_20230719_172705_550.jpg" alt="" />
                    </div>

                    <div className="photo_2">
                        <img src="/IMG_20230719_172708_117.jpg" alt="" />
                    </div>
                </div>

                <div className="row">
                    <div className="photo_1">
                        <img src="/received_870086947431518.jpeg" alt="" />
                    </div>

                    <div className="photo_2">
                        <img src="/received_1255496635394269.jpeg" alt="" />
                    </div>
                </div>

                <div className="row">
                    <div className="photo_1">
                        <img src="/IMG_20230404_203736_758.webp" alt="" />
                    </div>

                    <div className="photo_2">
                        <img src="/received_581180743962729.jpeg" alt="" />
                    </div>
                </div>
            </div>

            <div className="Home-button">
                <button onClick={() => {
                    setOpenLetter(true);
                }}>View Gift </button>
            </div>

            {openLetter && <Letter closeLetter={ setOpenLetter } />}
        </div>
    )
}

export default Home;