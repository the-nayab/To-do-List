
import { useState } from 'react';
import AddTask from './components/AddTask';
import ToDo from './components/ToDo';
import './App.css';

function App() {

  const [toDo, setToDo] = useState([]);

  const [newTask, setNewTask] = useState('');


  const addTask = () => {
    if (newTask) {
      let num = toDo.length + 1;
      let newEntry = { id: num, title: newTask, status: false }
      setToDo([...toDo, newEntry])
      setNewTask('');
    }
  }


  const deleteTask = (id) => {
    let newTasks = toDo.filter(task => task.id !== id)
    setToDo(newTasks);
  }

  const markDone = (id) => {
    let newTask = toDo.map(task => {
      if (task.id === id) {
        return ({ ...task, status: !task.status })
      }
      return task;
    })
    setToDo(newTask);
  }


  return (
    <div className="container App">

      <br /><br />
      <h2>To Do List Application</h2>
      <br /><br />

      <AddTask
        newTask={newTask}
        setNewTask={setNewTask}
        addTask={addTask}
      />


      {toDo && toDo.length ? '' : 'There is No Task in here...'}

      <ToDo
        toDo={toDo}
        markDone={markDone}
        deleteTask={deleteTask}
      />

    </div>
  );
}

export default App;