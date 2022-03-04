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
const shuffleCardResult = shuffleCard(setCardImage);

let openCardCount = 0;
let fristCard, secondCard;

const CardList = ({item, onFreezing, index}) => {
    const { image, name, selected, fliped } = item || {};
    const [cardSelected, setCardSelected] = useState(selected); // 선택한 카드
    const [cardFliped, setCardFliped] = useState(fliped); // 짝맞춘 카드
    
    function clickHandler(e) {
        const target = e.currentTarget;
        console.log('Fliped card');
        if(cardFliped || cardSelected){
            return
        }else{
            setCardSelected(true);
        }

        const targetCardName = target.getAttribute('data-card-name');
        openCardCount++;

        if(openCardCount === 1){
            fristCard = targetCardName;
        }else if(openCardCount === 2) {
            onFreezing(true);
            secondCard = targetCardName;
            fristCard === secondCard && document.querySelectorAll(`.button_flip[data-card-name=${targetCardName}]`).forEach((element)=>{
                element.classList.add('fliped');
            });
            openCardCount = 0;
            fristCard = '';
            secondCard = '';
            setTimeout(()=>{
                document.querySelectorAll('.button_flip').forEach((element)=>{
                    element.classList.add('hide');
                })
                onFreezing(false);
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
    const shuffleCardList = shuffleCardResult;
    const [ freezing, setFreezing ] = useState(true); // 클릭 방지 투명 딤드
    function onFreezing(value){
        setFreezing(value);
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
                    shuffleCardList.map((item,index)=>{
                        return(
                            <CardList item={item} onFreezing={onFreezing} index={index} key={`cardList${index}`} />
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