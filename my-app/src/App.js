import { useState } from 'react';
import './App.css';
import CardGameTitle from './components/CardGameTitle'
import CardGame from './components/CardGame';
import card1 from './img/card1.png';
import card2 from './img/card2.png';
import card3 from './img/card3.png';
import card4 from './img/card4.png';

const App = () =>{
  const [start, setStart] = useState(false);
  const [reStart, setReStart] = useState(false);

  function startClickHandler(boolean){
    setStart(boolean);
  }
  
  return (
    <div className="app-card-matching">
      <CardGameTitle start={start} startClickHandler={startClickHandler} />
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
