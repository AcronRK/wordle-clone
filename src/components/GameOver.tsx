import React from 'react'

type Props = {
    isCorrect: boolean,
    turn: number,
    solution: string
}

const GameOver = ( {isCorrect, turn, solution}: Props) => {
  return (
    <div className='fixed w-[100%] h-[100%] top-0 left-0 bg-white/50'>
        {/* bro won */}
        {isCorrect && (
            <div className='max-w-[480px] bg-white p-[40px] rounded-md my-[10%] mx-auto shadow'>
                <h1>You Win!</h1>
                <p className='text-orange-700 font-bold text-lg tracking-wide uppercase'>Solution: {solution}</p>
                <p>Solution found in {turn} guesses!</p>
            </div>
        )}

        {/* bro lost */}
        {!isCorrect && (
            <div>
                <h1>You Suck!</h1>
                <p>Solution: {solution}</p>
                <p>Better luck next time!</p>
            </div>
        )}
    </div>
  )
}

export default GameOver