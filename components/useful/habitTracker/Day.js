import classNames from "classnames";
import { useRecoilState } from 'recoil';
import { habitsSate } from '../../../store/useful/habitTracker';
import * as _ from 'lodash';

const Day = ({data, trackerIndex, dayIndex}) => {
  const [habits, setHabits] = useRecoilState(habitsSate);

  const {day, isComplete} = data;

  function onClickDay(){
    const habitList = _.cloneDeep(habits.habitList);
    habitList[trackerIndex].days[dayIndex].isComplete = !isComplete;
    localStorage.setItem('habitList',  JSON.stringify({habitList}));
    setHabits({habitList});
  }

  return(
    <>
      <li>
        <button onClick={onClickDay} className={classNames({'active':isComplete})}>{day}</button>
      </li>
      <style jsx>{`
        li{
          flex: 0 1 calc(14.26%);
          position:relative;
        }
        li:after{
          content: '';
          display: block;
          position: absolute;
          top:0;
          right: 0;
          bottom: 0;
          left:0;
          border-left: 1px solid #ccc;
          border-bottom: 1px solid #ccc;
        }
        li:nth-child(7n){
          flex: 0 1 calc(14.32%);
        }
        li:last-child:after{
          right: -1px;
          border-right: 1px solid #ccc;
        }
        button{
          position: relative;
          z-index: 10;
          width: 100%;
          height: 50px;
          text-align: center;
        }
        button.active{
          color: #fff;
        }
        button.active:after{
          content: '';
          display: block;
          position: absolute;
          top: 50%;
          left: 50%;
          width: 30px;
          height: 30px;
          margin: -15px 0 0 -15px;
          border: 4px solid #008CBA;
          border-radius: 50%;
        }
      `}</style>
    </>
  )
}

export default Day;