import { useState, useEffect, useLayoutEffect } from "react";
import "./App.css";
import star from "./images/icons/star.png";
import star1 from "./images/icons/star1.png";
import data from "./questions.json";

function App() {
  const [count, setcount] = useState(0);
  const [answer, setanswer] = useState("")
  let a = [];

  function addArr(arr, c) {
    arr.map((e) => a.push(e));
    a.push(c);
    let b = [];
    while (b.length <= 3) {
      const ran = Math.floor(Math.random() * a.length);
      if (!b.includes(a[ran])) {
        b.push(a[ran]);
      }
    }
    console.log(b);
    return b.map((opt) => {
      return <input type="button" className="button" onClick={getAnswer} value={opt} readOnly />;
    });
  }

  const getAnswer = ()=> {
    console.log(document.querySelector('.button').value)
  }
  
  const prevQuestion = ()=> {
    let prevqn = count - 1;
    if(prevqn > 0) {
      setcount(prevqn)
    }
  }
  const nextQuestion = ()=> {
    let nextqn = count + 1;
    if(nextqn < data.length) {
      setcount(nextqn)
    }
  }


  return (
    <div className="App">
      <div className="container">
        <div className="top">
          <div className="scrollbar"></div>
        </div>
        <div className="innercontainer">
          <div className="quiz_container">
            <h2 className="question">
              Question {count + 1} of {data.length}
            </h2>
            <p className="ctry">{data[count].category}</p>
            {(() => {
              if (data[count].difficulty === "easy") {
                return (
                  <div className="rating">
                    <img className="str" src={star} alt="" />
                    <img className="str" src={star1} alt="" />
                    <img className="str" src={star1} alt="" />
                    <img className="str1" src={star1} alt="" />
                    <img className="str1" src={star1} alt="" />
                  </div>
                );
              } else if (data[count].difficulty === "medium") {
                return (
                  <div className="rating">
                    <img className="str" src={star} alt="" />
                    <img className="str" src={star} alt="" />
                    <img className="str" src={star1} alt="" />
                    <img className="str1" src={star1} alt="" />
                    <img className="str1" src={star1} alt="" />
                  </div>
                );
              } else {
                return (
                  <div className="rating">
                    <img className="str" src={star} alt="" />
                    <img className="str" src={star} alt="" />
                    <img className="str" src={star} alt="" />
                    <img className="str1" src={star1} alt="" />
                    <img className="str1" src={star1} alt="" />
                  </div>
                );
              }
            })()}

            <p className="qn">{data[count].question}</p>
            {data[count].type === "multiple" ? (
              <div className="option">
                {addArr(
                  data[count].incorrect_answers,
                  data[count].correct_answer
                )}
              </div>
            ) : (
              <div className="option">
                <input type="button" className="button" value={data[count].correct_answer} onClick={getAnswer} readOnly />
                <input type="button" className="button" value={data[count].incorrect_answers} onClick={getAnswer} readOnly />
              </div>
            )}

            <span>Correct</span>
            <div className="btn">
              <button type="button" id="prev" onClick={prevQuestion}>Previous</button>
              <button type="button" id="next" onClick={nextQuestion}>Next</button>
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
