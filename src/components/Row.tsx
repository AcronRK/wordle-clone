import React from 'react'

type Props = {
    formattedGuess?: Array<FormattedGuess>
    guess?: string
}


const Row = ({ formattedGuess, guess}: Props) => {

    // if we input from user
    if(formattedGuess !== undefined && formattedGuess.length > 0){
        return (
            <div className='flex justify-center text-center'>
                {
                    formattedGuess.map((guess, index) => (
                        
                        <div 
                        key={index} 
                        className={`block w-[60px] h-[60px] m-[4px] text-center uppercase text-3xl font-bold leading-[60px] text-white colorChange ${guess.color}`}
                        style={{ animationDelay: `${index * 0.3}s` }} // Set animation delay dynamically
                        >
                            {guess.key}
                        </div>
                    ))    
                }
            </div>
        )
    }

    if(guess !== undefined && guess.length > 0){
        // transform to array of letters
        let letters = guess.split('')
        // the current guess might not have all the letters yet
        // in order to display the text boxes correctly, we fill the array to length 5 with empty strings
        return (
            <div className='flex justify-center text-center'>
                {letters.map((letter, index) => (
                    <div key={index}
                        className='block w-[60px] h-[60px] m-[4px] text-center uppercase text-3xl font-bold leading-[60px] bounce-border-animation bg-grey text-white'
                    > 
                        {letter} 
                    </div>
                ))}

                {/* fill out the row with empty containers until we recah 5 containers (letter boxes) */}
                
                {[...Array(5 - letters.length)].map((letter, index) => (
                    <div key={index}
                        className='block w-[60px] h-[60px] m-[4px] text-center uppercase text-3xl font-bold leading-[60px] bg-grey text-white'
                    > 
                        {letter} 
                    </div>
                ))}
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