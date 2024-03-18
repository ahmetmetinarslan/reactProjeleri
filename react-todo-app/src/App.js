import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), text: newTask }]);
      setNewTask('');
    }
  };

  const removeTask = id => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h1>To-Do Uygulaması</h1>
      <div className="task-input">
        <input
          type="text"
          value={newTask}
          onChange={e => setNewTask(e.target.value)}
          placeholder="Yeni görev ekle..."
          className='addTask'
        />
        <button className='btn' onClick={addTask}>Ekle</button>
      </div>
      <ul className="task-list">
        {tasks.map(task => (
          <li key={task.id}>
            {task.text}
            <button className='btn' onClick={() => removeTask(task.id)}>Sil</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

