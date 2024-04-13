import React, { useEffect, useState } from 'react'
import keyboard from '../../data/keyboard.json'

type Props = {}

interface Letter {
    key: string;
}


const Keypad = (props: Props) => {
    const [letters, setLetters] = useState<Letter[]>([])

    useEffect(() => {
        const json = keyboard.letters
        setLetters(json)
    }, [])

    return (
        <div className='my-[20px] mx-auto max-w-[500px] text-center'>
            {letters.map((letter, index) => (
                <div
                 key={index}
                 className='m-[5px] w-[40px] h-[50px] inline-block rounded-md uppercase leading-[50px] bg-keyboard text-white justify-center'
                 >
                    {letter.key}
                </div>
            ))}
        </div>
    )
}

export default Keypad