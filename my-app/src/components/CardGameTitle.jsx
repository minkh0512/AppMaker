import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';

const CardGameTitle = ({start, startClickHandler}) => {
  const [count, setCount] = useState(5);

  function startClick(){
    startClickHandler(true);
    countDown();
  }

  function countDown(){
    if (!count) return;

    const countDownTimer = setTimeout(() => {
      setCount(count - 1);
    }, 1000);
  
    return () => clearTimeout(countDownTimer);
  }

  useEffect(()=>{
    start && countDown();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[count]);

  return(
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
        <p className="start-timer">
          {
            count > 0
            ?
            <><span className="counterdown">{count}</span>초 후 시작됩니다.</>
            :
            `Start`
          }
          
        </p> 
        : 
        <button className="button-start" onClick={startClick}>시작</button>
      }
        
    </div>
  )
}

export default CardGameTitle;