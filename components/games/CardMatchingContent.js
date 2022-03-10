import cardImage from "../../public/api/games/cardImage";
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

  console.log(image)
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
        <img className="card" src={image.src} alt={name} />
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

const CardMatchingContent = ()=>{
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
      <style jsx global>{`
      .section-game{
        position: relative;
      }
      .section-game .list{
        display: flex;
        font-size: 0;
        flex-wrap:wrap;
      }
      .section-game .list-item{
        width: 25%;
        padding: 0.5%;
      }
      .section-game .list-item .button_flip{
        position: relative;
        overflow: hidden;
        width: 100%;
        background-color: #fafafa;
        border: 1px solid #ccc;
        border-radius: 10px;
        perspective: 100rem;
      }
      .section-game .list-item .button_flip img{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        vertical-align: middle;
        transform: rotateY(0deg);
      }
      .section-game .list-item .button_flip .bg_img{
        display: block;
        width: 100%;
        padding-bottom: 100%;
        background:pink;
        transform: rotateY(-180deg);
      }
      .section-game .list-item .button_flip.hide:not(.fliped) img{
        transform: rotateY(180deg);
      }
      .section-game .list-item .button_flip.hide:not(.fliped) .bg_img{
        transform: rotateY(0deg);
      }
      .section-game .list-item .button_flip .bg_img .card_num{
        position: absolute;
        display: table;
        top: 50%;
        left: 0;
        width: 100%;
        margin-top: -25px;
        vertical-align: middle;
        text-align: center;
        font-size: 40px;
        height: 50px;
        line-height: 50px;
        color: #fff;
        text-shadow: -1px 0 gray, 0 1px gray, 1px 0 gray, 0 -1px gray;
      }

      .section-game .list-item .card{
        -webkit-backface-visibility: hidden;
        -webkit-transform: translate3d(0,0,0);
        -webkit-perspective: 0;
        -webkit-transition: 1s; 
        backface-visibility: hidden; /*뒷면 숨기기*/ 
        visibility: visible; 
        transition: 1s;
      }
      .section-game .freezing{
        display: none;
        position: absolute;
        top: 0;
        left: 0;
        width :100%;
        height :100%;
      }
      .section-game .freezing.active{
        display: block;
      }
      .complete_layer{
        position: fixed;
        top: 0;
        right: 0;
        width: 100%;
        height: 100%;
      }
      .complete_layer .layer_content{
        position: absolute;
        top: 25%;
        left: 50%;
        z-index: 100;
        width: 200px;
        margin: 0 0 0 -100px;
        padding: 15px 0;
        background-color: #fff;
        text-align: center;
        border-radius: 30px;
      }
      .complete_layer .layer_content .text{
        
      }
      .complete_layer .layer_content .button_restart{
        background: none;
        border: none
      }
      .complete_layer .dimmed{
        position: absolute;
        top: 0;
        right: 0;
        width: 100%;
        height: 100%;
        background:rgba(0,0,0,.3);
      }  
      `}</style>
    </div>
  )
}

export default CardMatchingContent;