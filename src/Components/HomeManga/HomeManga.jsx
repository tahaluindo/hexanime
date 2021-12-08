import './HomeManga.css';
import React from 'react';
import TrendingManga from '../TrendingManga/TrendingManga';
import Manga from '../Manga/Manga';

class HomeManga extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <main id="homeManga">
                <div className="bannerManga">

                    <div className="typography">
                        <p>Welcome to Manga Side</p>
                        <h1>Find a Manga <br></br>You Like.</h1>
                    </div>

                    <img src="https://i.imgur.com/VUp0HkD.png" alt="Black Blur" className="blackBlur"/>

                </div>


                <TrendingManga />
                <Manga />
            </main>
        )
    }
}

export default HomeManga;