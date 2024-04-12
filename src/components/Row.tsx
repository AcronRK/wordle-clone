import React from 'react'

type Props = {
    formattedGuess: Array<FormattedGuess>
}

// color mapping to tailwind
const colorMapping: { [key: string]: string } = {
    "green": "bg-green",
    "yellow": "bg-yellow",
    "grey": "bg-grey"
}

const Row = ({formattedGuess}: Props) => {

    // if we input from user
    if(formattedGuess.length > 0){
        return (
            <div className='flex justify-center text-center'>
                {
                    formattedGuess.map((guess, index) => (
                        
                        <div 
                        key={index} 
                        className={`block w-[60px] h-[60px] m-[4px] text-center uppercase text-3xl font-bold leading-[60px] text-white ${colorMapping[guess.color]}`}>
                            {guess.key}
                        </div>
                    ))    
                }
            </div>
        )
    }
    
    return (
        // 5 divs (1 for each letter)
        <div className='flex justify-center text-center'>
            <div className='block w-[60px] h-[60px] m-[4px] text-center uppercase text-3xl font-bold leading-[60px] bg-grey text-white'>
                
            </div>

            <div className='block w-[60px] h-[60px] m-[4px] text-center uppercase text-3xl font-bold leading-[60px] bg-grey text-white'>
                
            </div>

            <div className='block w-[60px] h-[60px] m-[4px] text-center uppercase text-3xl font-bold leading-[60px] bg-grey text-white'>
                
            </div>

            <div className='block w-[60px] h-[60px] m-[4px] text-center uppercase text-3xl font-bold leading-[60px] bg-grey text-white'>
                
            </div>

            <div className='block w-[60px] h-[60px] m-[4px] text-center uppercase text-3xl font-bold leading-[60px] bg-grey text-white'>
                
            </div>
        </div>
    )
}

export default Row;