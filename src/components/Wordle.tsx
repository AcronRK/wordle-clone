import React, { useEffect } from 'react'
import useWordle from '../hooks/useWordle'
import Grid from './Grid';

type Props = {
    solution: string,
}

const Wordle = ({solution}: Props) => {

    const { guess, handleKeyUp, guessesList, isCorrect, turn} = useWordle(solution);

    // fire keyup function when user writes a letter
    useEffect(() => {
        window.addEventListener('keyup', handleKeyUp);

        // detach event listener
        // otherwise we would have several keyup event listeners everytime user presses a letter
        return () => window.removeEventListener('keyup', handleKeyUp);
    }, [handleKeyUp]);

    // logging
    useEffect(() => {
        console.log(guessesList, turn, isCorrect)
    },[guessesList, turn, isCorrect])

    return (
        <div>
            {solution + " - " + guess }
            <Grid guess={guess} guessesList={guessesList} turn={turn}/>
        </div>
    )
}

export default Wordle;