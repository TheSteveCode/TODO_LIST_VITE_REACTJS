import { useState } from 'react';
import AddTaskStyle from './AddTaskStyle.css'

export default function AddTask({ onAddTask }) {
  const [text, setText] = useState('');
  return (

    <div className="search-section">
      <input
        placeholder="Add task"
        value={text}
        onChange={e => setText(e.target.value)}
        className="search-section-input"
      />
      <button onClick={() => {
        setText('');
        onAddTask(text);
      }}
      className="search-section-button">Add</button>
    </div>
  )
}
