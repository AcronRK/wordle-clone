import { useState } from "react"

const useWordle = (solution:string) => {
    
    const [turn, setTurn] = useState<number>(0);
    const [guess, setGuess] = useState<string>("");
    const [guessesList, setGuessesList] = useState<[]>([]);
    const [history, setHistory] = useState<string[]>([]);
    const [isCorrect, setIsCorrect] = useState<boolean>(false);

    // input a guess and format it by finding each letters position and assigning colors

    // 3 colors
    // green - letter is in right position
    // yellow - letter in word but not in the right position
    // green - letter not in word
    const processGuess = () => {
        console.log("Guess submitted - ", guess)
    }

    // add the guess to the history
    // increment the amount of guesses user has done
    const addNewGuess = () => {
    }


    // identifying key pressed and when user presses enter to check guess
    const handleKeyUp = ({ key }: KeyboardEvent) => {

        // function fires for every key (shift, capslock etc)

        // ------ process only letters
        if(/^[a-zA-Z]$/.test(key)){ // only letters
            // check for number of letters
            if(guess.length < 5){
                setGuess((prev) => {
                    // add letter to the end of guess
                    return prev + key;
                });
            }
        }

        // ------ backspace to remove last letter
        if(key === "Backspace"){
            setGuess((prev) => {
                return prev.slice(0, -1); // slice handles exeption when guess has no letters
            });
        }

        // ------ enter to submit guess
        if(key === "Enter"){
            // check if there are turns left (5 turns in total)
            if(turn > 5){
                console.log("No turns left");
                return;
            }

            // check if the same word has been submitted (duplicates not allowed)
            if(history.includes(guess)){
                console.log("Word already used");
                return;
            }

            // check if user has inputted a 5 letter word
            if(guess.length !== 5){
                console.log("Word length is less than 5")
                return;
            }

            // process the guess
            processGuess()
        }
    }

    return {turn, guess, guessesList, isCorrect, handleKeyUp}
}

export default useWordle;