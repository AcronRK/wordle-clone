import React, { useEffect } from 'react'
import useWordle from '../hooks/useWordle'

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

    useEffect(() => {
        console.log(guessesList, turn, isCorrect)
    },[guessesList, turn, isCorrect])


    return (
        <div>
            <div>
                {solution}
            </div>
            <div>
                {guess}
            </div>
        </div>
    )
}

export default Wordle;