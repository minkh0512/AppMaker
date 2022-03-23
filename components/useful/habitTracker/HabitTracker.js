import Habit from './Habit';
import AddForm from './AddForm';
import { useEffect } from "react";
import { habitsSate } from '../../../store/useful/habitTracker';
import { useRecoilState } from 'recoil';

const HabitTrackerContent = () => {
  const [habits, setHabits] = useRecoilState(habitsSate);

  useEffect(()=>{
    if(!localStorage.getItem('habitList')){
      localStorage.setItem('habitList',  JSON.stringify({'habitList':[]}));
    }
    let habits = JSON.parse(localStorage.getItem('habitList'));
    setHabits(habits);
  },[]);

  return (
    <>
      <AddForm />
      <div className="habit_list">
        {
          habits && habits.habitList.map((data, index)=>{
            return(
              <Habit data={data} index={index} key={index} />
            )
          })
        }
      </div>
      <style jsx>{`
        .habit_list{
          padding-bottom: 120px;
        }  
      `}</style>
    </>
  )
}

export default HabitTrackerContent;