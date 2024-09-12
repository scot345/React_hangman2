
import styles from "./keyboard.module.css"


const Keys= [
    "a", "b", "c", "d", "e", "f", "g",
     "h", "i", "j", "k", "l", "m", "n",
     "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
]

type keyboardProps = {
    activeLetters: string[] 
    inactiveLetters: string[]
    addGuessedLetter: (letter: string) => void
}

export function Keyboard({  addGuessedLetter,
 }: keyboardProps)


{
    return (
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))",
          gap: ".5rem",

        }}
        >
         {Keys.map(key =>{
            return(
                <button 
                onClick={()=>addGuessedLetter(key) }
                className={styles.btn} key ={key}>
                    {key}
                    </button>
            )
         })}
        </div>
    )
}