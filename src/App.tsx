import { useEffect, useState } from 'react'
import Wordle from './components/Wordle';
import data from '../data/db.json'

const App = () => {

  const [solution, setSolution] = useState<string>("");

  useEffect(() => {
    const json = data.solutions
    const randomWord = json[Math.floor(Math.random() * json.length)]
    setSolution(randomWord.word)
  }, [setSolution])

  return (
    <div>
      {solution != "" && <Wordle solution={solution}/>}
    </div>
  )
}

export default App