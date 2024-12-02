import React, { useState } from "react";

export default function AddHabitForm({ handleAddHabit }) {
  const [habitName, setHabitName] = useState("");

  const handleSubmit = (e) => {
    // TODO: write code to handle form submission
    e.preventDefault();
    handleAddHabit(habitName);
    setHabitName("");
  }
  return (
    //TODO: add a form to add a new habit
    <form className="add-form" onSubmit={handleSubmit} >
      <input type="text"
        value={habitName}
        onChange={(e) => setHabitName(e.target.value)}
        placeholder="New Habit" />
      <button type="submit">Add Habit</button>
    </form>
  );
}
