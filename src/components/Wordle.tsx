import { useEffect, useState } from 'react'
import useWordle from '../hooks/useWordle'
import Grid from './Grid';
import Keypad from './Keypad';
import GameOver from './GameOver';

type Props = {
    solution: string,
}

const Wordle = ({solution}: Props) => {

    const { guess, handleKeyUp, guessesList, isCorrect, turn, usedLetters} = useWordle(solution);
    const [isGameOver, setGameOver] = useState<boolean>(false);

    // fire keyup function when user writes a letter
    useEffect(() => {
        window.addEventListener('keyup', handleKeyUp);

        // detach event listener
        // otherwise we would have several keyup event listeners everytime user presses a letter
        return () => window.removeEventListener('keyup', handleKeyUp);
    }, [handleKeyUp]);

    // handle user correct guess and turns over
    useEffect(() => {
        // continue game if conditions arent met
        if(!isCorrect && turn <= 5)
            return;

        // going here means game over (win or loss)
        setTimeout(() => setGameOver(true), 2000)

        // detach event listener 
        window.removeEventListener('keyup', handleKeyUp);

    }, [isCorrect, turn])

    return (
        <div>
            {solution + " - " + guess }
            <Grid guess={guess} guessesList={guessesList} turn={turn}/>
            <Keypad usedLetters={usedLetters}/>
            {/* show game over screen if isGameOver is true */}
            {isGameOver && <GameOver isCorrect={isCorrect} turn={turn} solution={solution}/>} 
        </div>
    )
}

export default Wordle;