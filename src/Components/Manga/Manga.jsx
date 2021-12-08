import React from 'react';
import ItemsContainer from '../ItemsContainer/ItemsContainer';

function getManga(){
    return fetch('https://kitsu.io/api/edge/manga')
        .then(response => response.json())
        .then(response => response)
}
class Manga extends React.Component {
    constructor(props){
        super(props);

        this.state = { manga: [] }
    }

    async componentDidMount(){
        let resultManga = await getManga();
        this.setState({manga: resultManga.data});

    }

    render(){

        return (
            <ItemsContainer 
                header="Manga"
                desc="Find a good manga"
                data={this.state.manga}
            />
        )
    }
}

export default Manga;