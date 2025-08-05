import { useState } from "react"
import Todolists from "./todolists";

function AddList(){
    const [tasks,setTasks] = useState([])
    const [input,setTaskInput] = useState("")
    const [taskIdCounter, setTaskIdCounter] = useState(0);

    const handleAdd = (e) => {
        if (e) e.preventDefault();
        if(input.trim()!==""){
            const newId = taskIdCounter + 1;
            const newTask = {
            id: newId,
            text: input.trim(),
            completed: false
        };
        setTasks(prevTasks => [...prevTasks, newTask]);
        setTaskInput('');
        setTaskIdCounter(newId);
        }         
    };

    const toggleTask = (id) => {
        setTasks(tasks.map(task => 
        task.id === id ? { ...task, completed: !task.completed } : task
        ));
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    const editTask = (id, newText) => {
        if (newText.trim() === '') return;
        setTasks(tasks.map(task => 
        task.id === id ? { ...task, text: newText.trim() } : task
        ));
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
        handleAdd();
        }
    };
    
    const totalTasks = tasks.length;
    const completedTasks = tasks.filter(t => t.completed).length;
    const pendingTasks = totalTasks - completedTasks;

    return(
    <>
    <div className="add-task-section">
        <form className="input-group" onSubmit={handleAdd}>
            <input onChange={(e) => setTaskInput(e.target.value)} onKeyDown={handleKeyPress} type="text" value={input} className="task-input" placeholder="What needs to be done?" id="taskInput" />
            <button className="add-button" type="submit">Add</button>
        </form>
    </div>
    <div className="tasks-container">
        <div className="stats" id="stats">
            <div className="stat-item">
                <span className="stat-number" id="totalTasks">{totalTasks}</span>
                <span className="stat-label">Total</span>
            </div>
        <div className="stat-item">
            <span className="stat-number" id="completedTasks">{completedTasks}</span>
            <span className="stat-label">Completed</span>
        </div>
        <div className="stat-item">
            <span className="stat-number" id="pendingTasks">{pendingTasks}</span>
            <span className="stat-label">Pending</span>
        </div>
    </div>
    <div id="tasksList">
        {tasks.length === 0 ? (
            <div className="empty-state" id="emptyState">
                <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.1 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z" />
                </svg>
                <h3>No tasks yet</h3>
                <p>Add a task above to get started!</p>
                <p></p>
            </div>
        ) : (
            <div>
                {tasks.map(task => (
                    <Todolists
                        key={task.id}
                        task={task}
                        onToggle={toggleTask}
                        onDelete={deleteTask}
                        onEdit={editTask} />
                ))}
            </div>
            )}
            </div>
        </div>
        </>
    );
}
export default AddList;