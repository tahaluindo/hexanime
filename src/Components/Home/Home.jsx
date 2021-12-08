import './Home.css';
import React from 'react';
import TrendingAnime from '../TrendingAnime/TrendingAnime';
import Anime from '../Anime/Anime';

class Home extends React.Component {
    constructor(props){
        super(props);

        this.state = {show: true}
    }

    render(){
        if(!this.props.show){
            return null;
        }
        
        return (
            <section id="homeContainer">
                <div className="banner">

                    <div id="typographyContainer">
                        <div className="typography">
                            <p>Welcome to Hexanime</p>
                            <h2>Find an Anime<br></br>You Like.</h2>
                        </div>
                    </div>
                    
                    <img src="https://i.imgur.com/VUp0HkD.png" alt="" className="blackBlur"/>
                </div>

                <TrendingAnime />
                <Anime />
            </section>
        )
    }
}

export default Home;