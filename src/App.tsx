import { useEffect, useState } from 'react'
import Wordle from './components/Wordle';


type Props = {}

const App = (props: Props) => {

  const [solution, setSolution] = useState<string>("");

  useEffect(() => {
    fetch('http://localhost:3000/solutions')
    .then(res => res.json())
    .then(json => {
      // get a random word for the day
      const randomWord = json[Math.floor(Math.random() * json.length)]
      setSolution(randomWord.word)
    })
  }, [setSolution])
  

  return (
    <div>
      {solution != "" && <Wordle solution={solution}/>}
    </div>
  )
}

export default App