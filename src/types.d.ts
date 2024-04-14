interface FormattedGuess {
    key: string;
    color: string;
}

interface UsedLetter {
    [key: string]: string;
}

type FormattedGuessArray = (FormattedGuess | undefined)[];