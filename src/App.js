import Header from './components/Header'
import { useState, useEffect } from "react"
import Tasks from './components/Tasks';
import AddTask from './components/AddTask'
import Footer from './components/Footer'
import About from './components/About'
import { BrowserRouter as BRouter, Routes,
         Route } from 'react-router-dom'

// Gloval Const
const baseUrl = 'http://localhost:5000'


function App() {
  //const n1 = prompt('type ur name')
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks,setTasks] = useState([])

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }

    getTasks()
  },[])

  // Fetch tasks from server
  const fetchTasks = async () => {
    const res = await fetch(baseUrl + '/tasks')
    const data = await res.json()

    //console.log('data',data)
    return data
  }

  // Fetch task from server
  const fetchTask = async (id) => {
    const res = await fetch(baseUrl + `/tasks/${id}`)
    const data = await res.json()

    //console.log('data',data)
    return data
  }
  // Delete task
  const deleteTask = async (id) => {
    await fetch(baseUrl + `/tasks/${id}`,{
      method: 'DELETE'
    })
    //console.log('delete',id)
    setTasks(tasks.filter((task) => task.id !== id))
  }
  
  // Toggle reminder
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id)
    const updTask = {...taskToToggle,reminder:!taskToToggle.reminder}
    const res = await fetch(baseUrl + `/tasks/${id}`,{
      method: 'PUT',
       headers:{
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updTask)
    })

    const data = await res.json()
    //console.log('id:',id)
    //setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: data.reminder} : task))
  }

  // Add task
  const addTask = async (task) => {
    const res = await fetch(baseUrl + '/tasks', {
      method: 'POST',
      headers:{
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
    })
    
    const data = await res.json()

    // add the new task to the existing tasks on the app
    // so there is no need to fetch tasks again from the server
    setTasks([...tasks, data])
    //const id = Math.floor(new Date().getTime())
    //const newTask =  {id, ...task}
    //setTasks([...tasks, newTask])
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