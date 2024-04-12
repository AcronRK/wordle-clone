import { useState } from "react"

const useWordle = (solution:string) => {
    
    const [turn, setTurn] = useState<number>(0);
    const [guess, setGuess] = useState<string>("");
    const [guessesList, setGuessesList] = useState([...Array(6)]); // list of lists (each letter of word is a value)
    const [history, setHistory] = useState<string[]>([]);
    const [isCorrect, setIsCorrect] = useState<boolean>(false);

    // input a guess and format it by finding each letters position and assigning colors

    // 3 colors
    // green - letter is in right position
    // yellow - letter in word but not in the right position
    // green - letter not in word
    const processGuess = () => {
        // get solution and turn it into an array of letters
        let solutionArray = [...solution]
        // same for user guess
        // for each letter, check it with the same index of solution and assign a color
        let formattedGuess: FormattedGuess[] = [...guess].map((letter) => {
            return {key: letter, color: 'grey'} // default is grey
        });
        // find matching letters and map them to color green
        formattedGuess.forEach((letter, index) => {
            if(letter.key === solutionArray[index]){
                letter.color = 'green'
                // remove the letter form solution array to not accidentally reuse it for yellow
                solutionArray[index] = "";
            }
        })

        formattedGuess.forEach((letter, index) => {
            if(solutionArray.includes(letter.key) && letter.color != "green"){
                letter.color = 'yellow';
                // wordle does 1 to 1 matching, so get the index of the found letter in the solution and remove it
                solutionArray[solutionArray.indexOf(letter.key)] = "";
            }
        })

        return formattedGuess;

    }

    // add the guess to the history and the guesses list
    // increment the amount of guesses user has done
    const addNewGuess = (formattedGuess: FormattedGuess[]) => {
        // check if guess is solution
        if(guess === solution){
            setIsCorrect(true);
        }
        
        setGuessesList((prevGuesses) => {
            let newGuesses = [...prevGuesses]
            // set the new guess to index turn
            newGuesses[turn] = formattedGuess;
            return newGuesses;
        });

        setHistory((prevHistory) => {
            return [...prevHistory, guess];
        });
        
        setTurn(turn + 1);

        // reset guess
        setGuess("");

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
            const formattedGuess = processGuess()
            addNewGuess(formattedGuess)
        }
    }

    return {turn, guess, guessesList, isCorrect, handleKeyUp}
}

export default useWordle;