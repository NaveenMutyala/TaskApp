import React,{useState,useEffect} from 'react';
import Task from './Task';
import NewTask from './NewTask';
import {v4 as uuidv4} from 'uuid';
import EditTask from './EditTask';
import ProgressBar from './ProgressBar';

uuidv4();
const Home = () => {
    const [todos,setTodos] = useState([])
    const [progress,setProgress] = useState(0)
    const addTodo = (todo,prior)=>{
        setTodos([...todos,{id:uuidv4(), task:todo, priority: prior, completed: false, isEditing:false}])
        console.log(todos);
        
    }
    useEffect(()=>{
        var count = todos.reduce((sum,todo)=>todo.completed===true?sum+1:sum,0)
        if(todos.length>0)
            setProgress(Math.ceil(count*100/todos.length))
        else
            setProgress(100)
    },[todos])
    const toggleComplete = id =>{
        setTodos(todos.map(todo => todo.id === id ? {...todo, completed:!todo.completed} : todo ))
    }
    const deleteTodo = id =>{
        setTodos(todos.filter(todo => todo.id!==id))
    }
    const editTodo = id =>{
        setTodos(todos.map(todo=>todo.id===id? {...todo,isEditing: !todo.isEditing}: todo))
    }
    const updateTodo = (value,id,prior)=>{
        setTodos(todos.map(todo=>todo.id===id? {...todo, task: value,priority:prior , isEditing: !todo.isEditing}: todo))
    }
    return (
        <div className='TodoWrapper'>

            <div>
                {progress===100 ? <h1>Everthing is completed!!</h1>:<h1>Things to do !</h1>}
            </div>
            
            <ProgressBar progress={progress} />
            <div>
                <NewTask addTodo = {addTodo} />
            </div>
            
            <div>
                {
                    todos.map(todo=>(
                        todo.isEditing?(
                            <EditTask key={todo.id} updateTodo={updateTodo} task={todo} />
                        ):(
                            <Task key={todo.id} task={todo} toggleComplete={toggleComplete} deleteTodo = {deleteTodo} editTodo={editTodo}/>
                        )
                        
                    ))
                }
            </div>
            
            

        </div>
    );
};

export default Home;