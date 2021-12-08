import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ItemsContainer from '../ItemsContainer/ItemsContainer';

const reqOptions = {
    'Accept': 'application/vnd.api+json',
    'Content-Type': 'application/vnd.api+json'
}

function getTrendingAnime(){
    return fetch(`https://kitsu.io/api/edge/trending/anime`, reqOptions)
        .then(response => response.json())
        .then(response => response)
}

class TrendingAnime extends React.Component {
    constructor(props){
        super(props);

        this.state = { 
            trendingAnime: []
        }
    }

    async componentDidMount(){
        let resultTrending = await getTrendingAnime();
        this.setState({trendingAnime: resultTrending.data});
    }

    render(){
        return (
            <ItemsContainer 
                header="Trending this Week"
                desc="Find trending aniems on this week"
                data={
                    this.state.trendingAnime
                }
            />
        )
    }
}

export default TrendingAnime;


