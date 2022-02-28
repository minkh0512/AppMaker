import { useState } from 'react';
import './App.css';
import CardGame from './components/CardGame';

const App = () =>{
  const [playing, setPlaying] = useState(false);

  function onClickPlay(){
    setPlaying(true);
  }

  return (
    <div className="app-card-matching">
      <h1 className="app-title">잔망루피 짝맞추기 게임</h1>
      <button className="button-start" onClick={onClickPlay}>시작</button>
      {
        playing && <CardGame />
      }
    </div>
  );
}

export default App;
