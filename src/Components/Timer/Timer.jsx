import styled from 'styled-components';
import { useState, useEffect } from 'react';

const TimerContainer = styled.section`
    height: 100vh;
    margin-top: 50px;
    border: 1px solid red;
`

const Clock = styled.div`
    width: 300px;
    margin: 50px auto;
    padding: 20px;
    box-sizing: border-box;
    border: 1px solid red;
`

function Timer(props){
    const [ timer, setTimer ] = useState(0);
    // useEffect(() => {
    //     let TimerID = setInterval(() => {
    //         setTimer(timer+1);
    //     }, 1000);

    //     return () => {
    //         clearInterval(TimerID);
    //     }
    // });

    const [ date, setDate ] = useState(new Date());
    useEffect(() => {
        let timerID = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => {
            clearInterval(timerID);
        }
    });

    return (
        <TimerContainer>
            <Clock>
                <p>Ticking Clock</p>
                <h3>{date.toString().slice(16, 24)}</h3>
            </Clock>
        </TimerContainer>
    )
}

export default Timer;