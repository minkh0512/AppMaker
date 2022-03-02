import { useState,useEffect } from 'react';
import './App.css';
import CardGame from './components/CardGame';
import classNames from 'classnames/bind';
import card1 from './img/card1.png';
import card2 from './img/card2.png';
import card3 from './img/card3.png';
import card4 from './img/card4.png';

const App = () =>{
  const [start, setStart] = useState(false);
  let startTimer = 5;

  function clickHandler(){
    setStart(true);
  }
  function countDown(from) {
    let current = from;
  
    let timerId = setInterval(function() {
      if (current < 2) {
        clearInterval(timerId);
        document.querySelector('.start-timer').innerHTML = 'START!';
        return
      }
      current--;
      document.querySelector('.counterdown').innerHTML = current;
    }, 1000);
  }

  useEffect(()=>{
    start && countDown(5);
    
  },[start]);
  
  return (
    <div className="app-card-matching">
      <div className={
        classNames(
          'title_content',
          {'fixed' : !start}
        )
      }>
        <h1 className="app-title">잔망루피 짝맞추기 게임</h1>
        {
          start 
          ? 
          <p className="start-timer"><span className="counterdown">{startTimer}</span>초 후 시작됩니다.</p> 
          : 
          <button className="button-start" onClick={clickHandler}>시작</button>
        }
        
      </div>
      {
        start 
        ? 
        <CardGame />
        :
        <>
          <img src={card1} alt="" className="bg_ready_img bg_ready_img1" />
          <img src={card2} alt="" className="bg_ready_img bg_ready_img2" />
          <img src={card3} alt="" className="bg_ready_img bg_ready_img3" />
          <img src={card4} alt="" className="bg_ready_img bg_ready_img4" />
        </>
      }
      
    </div>
  );
}

export default App;
