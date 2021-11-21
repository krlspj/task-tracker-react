import Header from './components/Header'
import { useState } from "react"
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import Footer from './components/Footer'
import About from './components/About'
import { BrowserRouter as BRouter, Routes,
         Route } from 'react-router-dom'


function App() {
  //const n1 = prompt('type ur name')
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks,setTasks] = useState([
    {
      id: 1,
      text: 'Doctor appointment',
      day: 'Feb 5th at 2:30pm',
      reminder: true
    },
    {
      id: 2,
      text: 'stuff',
      day: 'Feb 1th at 2:30pm',
      reminder: true
    }
  ])

  // Delete task
  const deleteTask = (id) => {
    //console.log('delete',id)
    setTasks(tasks.filter((task) => task.id !== id))
  }
  
  // Toggle reminder
  const toggleReminder = (id) => {
    //console.log('id:',id)
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
  }

  // Add task
  const addTask = (task) => {
    const id = Math.floor(new Date().getTime())
    const newTask =  {id, ...task}
    setTasks([...tasks, newTask])
  }

  // Contains the logic of showing the task components
  const BodyTasks = () => {
    return (
        <>
          { showAddTask && <AddTask onAdd={addTask} /> }
          {tasks.length > 0 ? (
            <Tasks 
              tasks={tasks} 
              onDelete={deleteTask} 
              onToggle={toggleReminder}
            />
          ) : (
            'No tasks to show'
          )}              
        </>
    )
  }
  return (
    <BRouter>
      <div className="container"> 
        <Header 
          title='Task Axondo' 
          onAdd={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask}   
        />
        {/* showAddTask && <AddTask onAdd={addTask} /> }
        {tasks.length > 0 ? (
          <Tasks 
            tasks={tasks} 
            onDelete={deleteTask} 
            onToggle={toggleReminder}
          />
        ) : (
          'No tasks to show'
        )*/}
        <Routes>
          <Route 
            path='/'
            exact
            element={<BodyTasks />}
          />
          <Route path='/about' element={<About /> } />
        </Routes>

        <Footer />

{/*    <header className="App-header">
//        <img src={logo} className="App-logo" alt="logo" />
//        <p>
//          Edit <code>src/App.js</code> and save to reload.
//        </p>
//        <a
//          className="App-link"
//          href="https://reactjs.org"
//          target="_blank"
//          rel="noopener noreferrer"
//        >
//          Learn React
//        </a>
//      </header>
*/}
      </div>
    </BRouter>
  );
}



export default App;