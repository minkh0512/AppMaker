import cardImage from "../api/cardImage";
import classNames from 'classnames/bind';
import { useEffect, useState } from "react";

function shuffleCard(originArray){
  const array = [...originArray];
  let currentIndex = array.length,  
  randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  return array;
}

const cardImageClone = cardImage.slice(0);
const setCardImage = cardImage.concat(cardImageClone);
let shuffleCardResult = JSON.parse(JSON.stringify(shuffleCard(setCardImage)));

const CardList = ({item, onFlipHandler, index}) => {
  const { image, name, selected, fliped } = item || {};

  function clickHandler() {
    if(selected){
      return
    }
    onFlipHandler(index);
  }

  return (
    <li className="list-item">
      <button className={classNames(
          'button_flip',
          {'hide' : !selected },
          {'fliped' : fliped }
        )} 
        data-card-name={name} 
        onClick={clickHandler}
      >
        <img className="card" src={image} alt={name} />
        <span className="bg_img card">
          <span className="card_num">{index+1}</span>
        </span>
      </button>
    </li>
  )
}

let selectedCardNumber = 0; // 선택한 카드 개수
let fristCardName, secondCardName; // 선택한 카드 이름
let fristCardIndex, secondCardIndex; // 선택한 카드 인덱스
const totalClearCount = shuffleCardResult.length / 2; // 짝맞춰야되는 개수
let clearCount = 0; // 현재 짝을 맞춘 개수

const CardGame = ()=>{
  const [ cardList, setCardList ] = useState(shuffleCardResult);
  const [ freezing, setFreezing ] = useState(true); // 클릭 방지 투명 딤드
  const [ complete, setComplete ] = useState(false); // 클리어 유무

  function onFlipHandler(index){
    selectedCardNumber++;
    const selectedCardName = shuffleCardResult[index].name;
    const selectedCardIndex = index; 
    shuffleCardResult[index].selected = true;

    if(selectedCardNumber === 1){
      fristCardName = selectedCardName;
      fristCardIndex = selectedCardIndex;
    }else if(selectedCardNumber === 2){
      secondCardName = selectedCardName;
      secondCardIndex = selectedCardIndex;
      selectedCardNumber = 0;
      if(fristCardName !== secondCardName){
        setFreezing(true);
        setTimeout(() => {
          shuffleCardResult[fristCardIndex].selected = false;
          shuffleCardResult[secondCardIndex].selected = false;
          setFreezing(false);
        }, 1000);
      }else{
        shuffleCardResult[fristCardIndex].fliped = true;
        shuffleCardResult[secondCardIndex].fliped = true;
        clearCount++
        if(totalClearCount === clearCount){
          setComplete(true);
        }
      }
    }
    setCardList([...shuffleCardResult]);
  }

  useEffect(()=>{
    setTimeout(() => {
      shuffleCardResult = shuffleCardResult.map((item)=>{
        return {...item, selected:false}
      });
      setCardList(shuffleCardResult);
      setFreezing(false);
    }, 5000);
  },[]);
    
  return(
    <div className="section-game">
      <ul className="list">
        {
          cardList.map((item,index)=>{
            return(
              <CardList item={item} onFlipHandler={onFlipHandler} index={index} key={`cardList${index}`} />
            )
          })
        }
      </ul>
      <div className={classNames(
        'freezing',
        {'active' : freezing}
      )}></div>
      {complete && 
        <div className="complete_layer">
          <div className="layer_content">
            <p className="text">축하합니다👍😍</p>
          </div>
          <div className="dimmed"></div>
        </div>
      }
      
    </div>
  )
}

export default CardGame;