import { useCallback, useEffect, useState } from "react"
import words from "./simplewordsList.json"
import { HangmanDrawing } from "./HangmanDrawingWord"
import { HangmanWord } from "./HangmanWord"
import { Keyboard } from "./Keyboard"
 
function App(){
  const [wordToGuess,] = useState(() =>{
    return words[Math.floor(Math.random() * words.length)]
  })

  const [guessedLetters, setGuessedLetters] = useState<string[]>([])

  const incorrectLetters= guessedLetters.filter(
    letter => !wordToGuess.includes(letter)
  )

const addGuessedLetter = useCallback ((letter:string)=>{
  if (guessedLetters.includes(letter)) return


  setGuessedLetters(guessedLetters => [...guessedLetters,letter])
}, [guessedLetters])





useEffect(() =>{
 const handler = (e: KeyboardEvent) =>{
  const key = e.key

  if(!key.match(/^[a-z]$/)) return

  e.preventDefault()
  addGuessedLetter(key)
 }

document.addEventListener("keypress", handler)

return () =>{
  document.removeEventListener("keypress",handler)
}
},[guessedLetters] )




  console.log(wordToGuess)
  return (
     <div
       style={{
     maxWidth: "900px",
     display: "flex",
     flexDirection: "column",
     gap:"2rem",
     margin: "0 auto",
     alignItems: "center",
       }  }    
  >
    <div style={{fontSize: "4rem", textAlign: "center"}}> Lose Win</div>
    <HangmanDrawing numberOfGuesses={incorrectLetters.length}/>
    <HangmanWord guessedLetters={guessedLetters} wordToGuess={wordToGuess}/>
   
   <div style={{alignSelf: "stretch"}}>
    <Keyboard activeLetters={guessedLetters.filter(letter =>
      wordToGuess.includes(letter)
    )}
    inactiveLetters={incorrectLetters}
    addGuessedLetter={addGuessedLetter}
    />
    </div>
</div>
      )
} 
  
export default App
