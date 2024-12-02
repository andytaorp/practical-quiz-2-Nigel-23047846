import React from "react";

/**
 * Habit component that displays a habit, allows the user to toggle
 * the habit's completed state, and delete the habit.
 *
 * TODO: implement the Habit component here
 */
export default function Habit({habit, onToggleHabit, onDeleteHabit}) {
    return (
        <li style={{ textDecoration: habit.completed ? 'line-through' : 'none' }}>
            <input
                type="checkbox"
                checked={habit.completed}
                onChange={() => onToggleHabit(habit.id)}
            />
            {habit.name}
            <button onClick={() => onDeleteHabit(habit.id)}>Delete</button>
        </li>
    );
}
