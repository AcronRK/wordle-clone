import { ObjectId } from "mongodb";

interface FormattedGuess {
    key: string;
    color: string;
};

type FormattedGuessArray = (FormattedGuess | undefined)[];