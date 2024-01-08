import "./TodayLesson.css";
import { useSelector, useDispatch } from "react-redux";
import { previousLesson, nextLesson } from "./changeLesson";

function TodayLesson() {
  const lesson = useSelector((state) => state.lesson);
  const dispatch = useDispatch();

  const handlePreviousLessonChange = () => {
    dispatch(previousLesson());
  };

  const handleNextLessonChange = () => {
    dispatch(nextLesson());
  };

  return (
    <>
      <h2>
        The lesson of today is <span className="textRed">{lesson}!</span>
      </h2>
      <button onClick={handlePreviousLessonChange}>Previous lesson</button>
      <button onClick={handleNextLessonChange}>Next lesson</button>
    </>
  );
}

export default TodayLesson;
