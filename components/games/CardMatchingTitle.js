import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';

const CardMatchingTitle = ({start, startClickHandler}) => {
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
      <style jsx>{`
      .title_content{
        z-index: 100;
        width: 100%;
        text-align: center;
      }
      .title_content.fixed{
        position: fixed;
        top: 50%;
        margin-top: -30px;
      }
      .title_content .app-title{
        font-size: 1.5rem;
        color: pink;
        text-shadow: -1px 0 gray, 0 1px gray, 1px 0 gray, 0 -1px gray;
      }
      .title_content .button-start{
        margin-top: 10px;
        display: inline-block;
        width: 100px;
        height: 50px;
        font-size: 25px;
        font-weight: bold;
        background-color: pink;
        border-color: darkmagenta;
      }
      .title_content .start-timer{
        font-size: 20px;
      }
      `}</style>
    </div>
  )
}

export default CardMatchingTitle;