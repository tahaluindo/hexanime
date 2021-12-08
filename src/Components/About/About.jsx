import { useState, useEffect } from 'react';
import styled from 'styled-components';

const AboutContainer = styled.section`
    height: 100vh;
    padding: 20px;
    margin-top: 50px;
    box-sizing: border-box;
`
function fetchUsers(){
    return fetch('https://reqres.in/api/users?per_page=1')
        .then(response => response.json())
        .then(response => response)
        .catch(err => console.log(err));
}

function About(props){
    
    const [ author, setAuthor ] = useState('cipta');
    const [ timer, setTimer ] = useState(0);

    useEffect(() => {
        // Run / componentDidMount
        // const timerID = setInterval(() => {
        //     setTimer(timer + 1)
        // }, 1000);

        // Clean / componentWillUnmount
        // return () => {
        //     clearInterval(timerID);
        // }

        (async function getUsers(){
            let result = await fetchUsers();
            console.log(result);
        })();
    }, []);

    return (
        <AboutContainer>
            <h2>The Author of this site is</h2>
            <p>{author}</p>

            <p className="timer">{timer}</p>
        </AboutContainer>
    )
}

export default About;