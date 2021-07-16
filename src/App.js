import React,{useState} from "react"
// import ReactDOM from 'react-dom'

const App=()=>{
 
    let [score,setScore] = useState(0)   //score=variable  ---- setScore=function---- useState(0) gives default value

    // onClick={setScore(score+1)} cannot be done because setScore will be called without clicking button , so we use onClick={arrow function}
    return(
        <div>
            <h1 style={{textAlign:"center"}}>This is the score of Game</h1>
            <h2 style={{textAlign:"center"}}>The present score is {score}</h2>
            <button onClick={()=>score<25?setScore(score+1):""} className="button">Increment</button>
            <button onClick={()=>score>0?setScore(score-1):""} className="button">Decrement</button>
            <button onClick={()=>{setScore(0)}}className="button">Reset</button>
 
        </div>
    )
}

export default App