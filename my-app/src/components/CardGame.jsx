import cardImage from "../api/cardImage";
import classNames from 'classnames/bind';
import { useEffect } from "react";

const shuffleCard = (array) => {
    let currentIndex = array.length,  
    randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
}

const CardGame = ()=>{

    const cardImageClone = cardImage.slice(0);
    const setCardImage = cardImage.concat(cardImageClone);
    let openCardCount = 0;
    let fristCard, secondCard;

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
            fristCard = targetCardName
        }else if(openCardCount === 2) {
            secondCard = targetCardName;
            fristCard === secondCard && document.querySelectorAll(`.button_open[data-card-name=${targetCardName}]`).forEach((element)=>{
                element.classList.add('opened');
            });
            openCardCount = 0;
            fristCard = '';
            secondCard = '';
            setTimeout(()=>{
                document.querySelectorAll('.button_open').forEach((element)=>{
                    element.classList.add('hide');
                })
            }, 1100);
        };
    }

    const shuffleCardList = shuffleCard(setCardImage);

    useEffect(()=>{
        setTimeout(() => {
            document.querySelectorAll('.button_open').forEach((element)=>{
                element.classList.add('hide');
            });
        }, 2000);
    },[])
    
    return(
        <div className="section-game">
            <ul className="list">
                {
                    shuffleCardList.map((item,index)=>{
                        const { image, name, active, opened } = item;
                        return(
                            <li className="list-item" key={index+name}>
                                <button className={classNames(
                                        'button_open'
                                    )} 
                                    data-card-name={name} 
                                    onClick={clickHandler}
                                >
                                    <img className="card" src={image} alt={name} />
                                    <span className="bg_img card"></span>
                                </button>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default CardGame;