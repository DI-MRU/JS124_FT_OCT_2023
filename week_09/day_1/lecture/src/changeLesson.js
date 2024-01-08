import { createSlice } from "@reduxjs/toolkit";

const lessonArray = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Python",
  "SQL",
];

const lessonSlice = createSlice({
  name: "lesson",
  initialState: {
    lesson: lessonArray[0],
  },
  reducers: {
    previousLesson: (state) => {
      // Get current value and go to the next
      const currentIndex = lessonArray.indexOf(state);
      let newIndex = currentIndex - 1;
      if (newIndex < 0) newIndex = newIndex + 7;
      const remainderIndex = newIndex % lessonArray.length;
      const newLesson = lessonArray[remainderIndex];

      // Set new state
      state = newLesson;

      return state;
    },
    nextLesson: (state) => {
      // Get current value and go to the next
      const currentIndex = lessonArray.indexOf(state);
      const newIndex = currentIndex + 1;
      const remainderIndex = newIndex % lessonArray.length;
      const newLesson = lessonArray[remainderIndex];

      // Set new state
      state = newLesson;

      return state;
    },
  },
});

export const { previousLesson, nextLesson } = lessonSlice.actions;
export default lessonSlice.reducer;
