import React, { useEffect, useState } from 'react'
import keyboard from '../../data/keyboard.json'


interface UsedLetter {
    [key: string]: string;
};

type Props = {
    usedLetters: UsedLetter;
}

interface Letter {
    key: string;
}

// couldnt find a better solution for mapping the colors
const getBackgroundColor = (color: string) => {
    if(color === "green")
        return "#538d4e";

    if(color === "grey")
        return "#3a3a3c";

    if(color === "yellow")
        return "#b59f3b"

    return "#818384";
}

const Keypad = ({usedLetters}: Props) => {
    const [letters, setLetters] = useState<Letter[]>([])

    useEffect(() => {
        const json = keyboard.letters
        setLetters(json)
    }, [])

    return (

        <div className='my-[20px] mx-auto max-w-[500px] text-center'>
            {letters.map((letter, index) => {
                const color: string = usedLetters[letter.key] || "keyboard";

                return(
                    <div
                        key={index}
                        className={`m-[5px] w-[40px] h-[50px] inline-block rounded-md uppercase leading-[50px] text-white justify-center`}
                        style={{ backgroundColor: getBackgroundColor(color)}}
                    >
                       {letter.key}
                   </div>
                );
            })}
        </div>
    );
}

export default Keypad