import { WorkWeekDays } from "./example";

const SingletonPattern = () => {
  const workWeekDays = WorkWeekDays.getInstance("en");
  console.log("|Singleton|:", workWeekDays.getDays());
};

export default SingletonPattern;
