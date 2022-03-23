import Habit from './Habit';
import { useState, useRef, useEffect } from "react"

// 날짜 계산
let thisMonth, thisMonthDays;
let today = new Date().getDate();
const newDay = new Date();
const calMonthDay = () => {
  let days = new Date(newDay.getFullYear(), newDay.getMonth()+1, 0).getDate();
  thisMonth = newDay.getMonth() + 1;
  thisMonthDays = days;
}
calMonthDay();

const HabitTrackerContent = () => {
  const [habits, setHabits] = useState(null);

  useEffect(()=>{
    if(!localStorage.getItem('habitList')){
      localStorage.setItem('habitList',  JSON.stringify({'habitList':[]}));
    }
    let habits = JSON.parse(localStorage.getItem('habitList'));
    setHabits(habits);
  },[]);

  function onTitleSubmit(trackerIndex, targetValue){
    const habitList = [...habits.habitList];
    habitList[trackerIndex].title = targetValue;
    localStorage.setItem('habitList',  JSON.stringify({habitList}));
    setHabits({habitList});
  }

  function onDeleteHandler(index){
    const habitList = [...habits.habitList];
    habitList.splice(index,1);
    localStorage.setItem('habitList',  JSON.stringify({habitList}));
    setHabits({habitList});
  }

  const titleInput = useRef();
  function onSubmit(e){
    e.preventDefault();
    const targetValue = titleInput.current.value;
    if(targetValue < 1){
      alert('1글자 이상 입력해주세요.');
      return
    }
    function setDays(){
      let dayArray = [];
      for(let i = 0;i < thisMonthDays; i++){
        dayArray[i] = {day:i+1,isComplete:false}
      }
      return dayArray;
    }
    const addHabitInfo = {
      title : targetValue,
      days: setDays()
    };
    const habitList = [...habits.habitList, addHabitInfo];

    localStorage.setItem('habitList',  JSON.stringify({habitList}));
    setHabits({habitList});
    titleInput.current.value = '';
  }
  
  function onUpdateDataHandler(trackerIndex, dayIndex, isComplete){
    const habitList = [...habits.habitList];
    habitList[trackerIndex].days[dayIndex].isComplete = isComplete ? true : false;
    localStorage.setItem('habitList',  JSON.stringify({habitList}));
    setHabits({habitList});
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="box_add">
          <input type="text" placeholder="Input your habit..." ref={titleInput} />
          <button>추가</button>
        </div>
      </form>
      <div className="habit_list">
        {
          habits && habits.habitList.map((data, index)=>{
            return(
              <Habit data={data} onTitleSubmit={onTitleSubmit} onDeleteHandler={onDeleteHandler} onUpdateDataHandler={onUpdateDataHandler} index={index} key={index} />
            )
          })
        }
      </div>
      <style jsx>{`
        .box_add{
          position: fixed;
          bottom: 0;
          left: 0;
          z-index: 80;
          width: 100%;
          padding: 10px;
          text-align: center;
          background:#efefef;
          border-top: 1px solid #ccc;
          box-shadow: 0 -2px 5px 0 #ccc;
        }
        .box_add input{
          width: 100%;
          height: 36px;
          padding: 0 10px;
          margin-bottom: 5px;
          border: 1px solid #ccc;
          border-radius: 5px;
        }
        .box_add button{
          width: 100%;
          font-size: 15px;
          height: 36px;
          color: #fff;
          border-radius: 5px;
          margin-right: 0.5%;
          background-color: #4caf50;
        }
        .habit_list{
          padding: 10px 10px 100px;
        }
      `}</style>
    </>
  )
}

export default HabitTrackerContent;