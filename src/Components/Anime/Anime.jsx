import React from 'react';
import ItemsContainer from '../ItemsContainer/ItemsContainer';

function getAnime(){
    return fetch('https://kitsu.io/api/edge/anime')
        .then(response => response.json())
        .then(response => response)
}

class Anime extends React.Component {
    constructor(props){
        super(props);

        this.state = { anime: [] }
    }

    async componentDidMount(){
        let resultAnime = await getAnime();
        this.setState({anime: resultAnime.data});
    }

    render(){
        return (
            <ItemsContainer
                header="Anime"
                desc="Find an Anime that you like on the past"
                data={
                    this.state.anime
                }
            />
        )
    }
}

export default Anime;



