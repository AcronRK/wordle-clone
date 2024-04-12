import React from 'react'
import Row from './Row'

type Props = {
    guess: string
    guessesList: Array<Array<FormattedGuess>>,
    turn: number
}

const Grid = ({guess, guessesList, turn}: Props) => {

    return (
        <div>
            {guessesList.map((formattedGuess, index) => {
                return <Row key={index} formattedGuess={formattedGuess} />
            })}
        </div>
    )
}

export default Grid