import cardImage from "../api/cardImage";
import classNames from 'classnames/bind';
import { useEffect, useState } from "react";

function shuffleCard(array){
    console.log(array);
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
console.log(cardImageClone);
const setCardImage = cardImage.concat(cardImageClone);
console.log(setCardImage);
const shuffleCardResult = shuffleCard(setCardImage);
console.log(shuffleCardResult);

let openCardCount = 0;
let fristCard, secondCard;

const CardList = ({item, onFreezing}) => {
    const { image, name, active, fliped } = item;
    
    function clickHandler(e) {
        const target = e.currentTarget
        if(!target.classList.contains('hide')){
            return
        }else{
            target.classList.remove('hide');
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
                    'button_flip'
                )} 
                data-card-name={name} 
                onClick={clickHandler}
            >
                <img className="card" src={image} alt={name} />
                <span className="bg_img card"></span>
            </button>
        </li>
    )
}

const CardGame = ()=>{
    const shuffleCardList = shuffleCardResult;
    const [ freezing, setFreezing ] = useState(true);
    function onFreezing(value){
        setFreezing(value);
    }
    
    useEffect(()=>{
        setTimeout(() => {
            document.querySelectorAll('.button_flip').forEach((element)=>{
                element.classList.add('hide');
            });
            setFreezing(false);
        }, 5000);
    },[]);
    
    return(
        <div className="section-game">
            <ul className="list">
                {
                    shuffleCardList.map((item,index)=>{
                        return(
                            <CardList item={item} onFreezing={onFreezing} key={`cardList${index}`} />
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