import CardMatchingTitle from '../../components/games/CardMatchingTitle';
import CardMatchingContent from '../../components/games/CardMatchingContent';
import { useState } from 'react';

const CardMatching = () => {
  const [start, setStart] = useState(false);

  function startClickHandler(boolean){
    setStart(boolean);
  }

  return(
    <div className="app-card-matching">
      <CardMatchingTitle start={start} startClickHandler={startClickHandler} />
      {start && <CardMatchingContent />}
    </div>
  )
}

export default CardMatching;