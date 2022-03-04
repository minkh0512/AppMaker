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
let shuffleCardResult = shuffleCard(setCardImage);

let openCardCount = 0;
let fristCardName, secondCardName;
let fristCardIndex, secondCardIndex;

const CardList = ({item, onFreezing, flipedResult, index}) => {
  const { image, name, selected, fliped } = item || {};
  console.log(`[selected ${index}] ${selected}`);
  const [cardSelected, setCardSelected] = useState(selected); // 선택한 카드
  console.log(`[state selected] ${cardSelected}`);

  function clickHandler() {
    if(fliped || cardSelected){
      return
    }else{
      setCardSelected(true);
    }

    openCardCount++;

    if(openCardCount === 1){
      fristCardName = name;
      fristCardIndex = index;
    }else if(openCardCount === 2) {
      onFreezing(true);
      secondCardName = name;
      secondCardIndex = index;
      setTimeout(()=>{
          flipedResult(fristCardName, fristCardIndex, secondCardName, secondCardIndex);
          onFreezing(false);
          setCardSelected(false);
      }, 1100);
    };
  }

  return (
    <li className="list-item">
      <button className={classNames(
          'button_flip',
          {'hide' : !cardSelected },
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

const CardGame = ()=>{
  const [ cardList, setCardList ] = useState(shuffleCardResult);
  const [ freezing, setFreezing ] = useState(true); // 클릭 방지 투명 딤드
  function onFreezing(value){
    setFreezing(value);
  }
  function flipedResult(firstName, fristIndex, secondName, secondIndex){
    if(firstName === secondName){ 
      shuffleCardResult[fristIndex].fliped = true;
      shuffleCardResult[secondIndex].fliped = true;
    }else{
      shuffleCardResult[fristIndex].selected = false;
      shuffleCardResult[secondIndex].selected = false;
    };
    setCardList(shuffleCardResult);
    
    openCardCount = 0;
    fristCardName = '';
    fristCardIndex = null;
    secondCardName = '';
    secondCardIndex = null;
  }
    
  useEffect(()=>{
    setTimeout(() => {
        document.querySelectorAll('.button_flip').forEach((element)=>{
            element.classList.add('hide');
        });
        setFreezing(false);
    }, 0);
  },[]);
    
  return(
    <div className="section-game">
      <ul className="list">
        {
          cardList.map((item,index)=>{
            return(
              <CardList item={item} onFreezing={onFreezing} flipedResult={flipedResult} index={index} key={`cardList${index}`} />
            )
          })
        }
      </ul>
      <div className={classNames(
        'freezing',
        {'active' : freezing}
      )}>

      </div>
    </div>
  )
}

export default CardGame;