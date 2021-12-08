import './Search.css';
import React from 'react';
import styled from 'styled-components';
import Navbar from '../Navbar/Navbar';

const SearchContainer = styled.div`

`

const Input = styled.input`
    width: 220px;
    padding: 2px 10px;
    margin-left: 30px;
    border-radius: 3px 0px 0px 3px;
    border: none;

    &:focus {
        outline: none;
    }
`

const Button = styled.button`
    color: white;
    border: none;
    cursor: pointer;
    padding: 2px 10px;
    border-radius: 0px 3px 3px 0px;
    background-color: #111;
`


class Search extends React.Component {
    constructor(props){
        super(props);

        this.state = { 
            value: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        console.log(this.state.value);
    }

    handleChange(e){
        let val = e.target.value;
        this.setState({value: val});
    }

    render(){
        return (
            <SearchContainer>
                <Input type="text" placeholder="search anime ..." value={this.state.value} onChange={this.handleChange}/>
                <Button onClick={this.handleSubmit}>Search</Button>
            </SearchContainer>
        )
    }
}

export default Search;