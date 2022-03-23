import HabitTrackerComponent from '../../components/useful/habitTracker/HabitTracker';
import { RecoilRoot } from 'recoil';

const HabitTracker = () => {
  return (
    <div className="app-habit-tracker">
      <RecoilRoot>
        <HabitTrackerComponent />
      </RecoilRoot>
    </div>
  );
}

export default HabitTracker