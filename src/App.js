import {useState , useEffect , useLayoutEffect} from 'react'
import './App.css';
import star from './images/icons/star.png'
import star1 from './images/icons/star1.png'
import data from './questions.json'

function App() {
  const [count, setcount] = useState(0)
  let a = []

  const randomChoice = (arr)=>{
    let b = []
    while(b.length < 3) {
      const ran = Math.floor(Math.random() * arr.length)
      if(!arr.includes(arr[ran])) {
        b.push(arr[ran])
      }
    }
    console.log(b)
    return b.map((opt)=> {
      return <button type="button">{opt}</button>
  })
  }

  function addArr(arr , c) {
    arr.map((e)=> (
      a.push(e)
    ))
    a.push(c)
    console.log(a)
    randomChoice(a)
  } 
  console.log("kjgjhghg")
  console.log(a)


  return (
    <div className="App">
      <div className="container">
        <div className="top">
          <div className="scrollbar"></div>
        </div>
        <div className="innercontainer">
          <div className="quiz_container">
            <h2 className="question">Question {count+1} of {data.length}</h2>
            <p className="ctry">{data[count].category}</p>
            {(()=>{
              if(data[count].difficulty === 'easy') {
                return(
                  <div className="rating">
                    <img className="str" src={star} alt="" /> 
                    <img className="str" src={star1} alt="" /> 
                    <img className="str" src={star1} alt="" /> 
                    <img className="str1" src={star1} alt="" /> 
                    <img className="str1" src={star1} alt="" /> 
                  </div>                  
                )
              }
              else if(data[count].difficulty === 'medium') {
                return(
                  <div className="rating">
                    <img className="str" src={star} alt="" /> 
                    <img className="str" src={star} alt="" /> 
                    <img className="str" src={star1} alt="" /> 
                    <img className="str1" src={star1} alt="" /> 
                    <img className="str1" src={star1} alt="" /> 
                  </div>
                )
              }
              else {
                return (
                  <div className="rating">
                    <img className="str" src={star} alt="" /> 
                    <img className="str" src={star} alt="" /> 
                    <img className="str" src={star} alt="" /> 
                    <img className="str1" src={star1} alt="" /> 
                    <img className="str1" src={star1} alt="" /> 
                  </div>
                )
              }
            })()}
            
            <p className="qn">{data[count].question}</p>
            {data[count].type === 'multiple' ? 
            <div className="option">
              {addArr(data[count].incorrect_answers , data[count].correct_answer)}
            </div> :
            <div className="option">
              <button type="button">yes</button>
              <button type="button">no</button>
            </div>
            }
            
            <span>Correct</span>
            <div className="btn">
              <button type="button">Previous</button>
              <button type="button">Next</button>
            </div>
          </div>
          <div className="progress">
            <div className="score">
              <p>Score: 55%</p>
              <p>Max Score: 100%</p>
            </div>
            <div className="bar">
              <div className="line"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
