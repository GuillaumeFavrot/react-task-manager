import { useState } from 'react'
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from './components/AddTask';

function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: "Faire les courses",
        day:"10 Juillet",
        reminder: true
    },
    {
       id: 2,
       text: "Passer l'aspi",
       day:"10 Juillet",
       reminder: true
   },
   {
       id: 3,
       text: "Faire à manger",
       day:"10 Juillet",
       reminder: false
   }
])

//delete task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

//Toggle reminder
const toggleReminder = (id) => {
  setTasks(tasks.map((tasks) => tasks.id === id ? {...tasks, reminder: !tasks.reminder} : tasks))
}

  return (
    <div className="container">
      <Header  />
      <AddTask />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete = {deleteTask} onToggle = {toggleReminder}/> : 'You\'re Free!!'}
    </div>
  );
}

export default App;
