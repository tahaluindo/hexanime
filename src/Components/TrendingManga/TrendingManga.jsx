import React from 'react';
import ItemsContainer from '../ItemsContainer/ItemsContainer';

function getTrendingManga(){
    return fetch('https://kitsu.io/api/edge/trending/manga')
        .then(response => response.json())
        .then(response => response)
}

class TrendingManga extends React.Component {
    constructor(props){
        super(props);

        this.state = { trendingManga: [] }
    }

    async componentDidMount(){
        let resultTrending = await getTrendingManga();
        this.setState({trendingManga: resultTrending.data})
    }

    render(){

        return (
            <ItemsContainer 
                header="Trending Mangas this Week"
                desc="Find a good trending mangas this week"
                data={
                    this.state.trendingManga
                }
            />
        )
    }
}

export default TrendingManga;