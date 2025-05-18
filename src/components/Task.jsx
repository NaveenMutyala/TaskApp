import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import {faArrowUp,faArrowDown,faArrowsUpDown} from "@fortawesome/free-solid-svg-icons";


const Task = ({task,toggleComplete,deleteTodo,editTodo}) => {
    return (
        <div>
            <div className='Todo'>
                
                <p onClick={()=> toggleComplete(task.id)} className={`${task.completed ? 'completed': ''}`}>
                    {task.task}
                </p>
                
                <div>
                    {task.priority==="High" ? <FontAwesomeIcon className='PriorityIcons' icon={faArrowUp} color='red' /> : 
                    (task.priority==="Medium"?<FontAwesomeIcon className='PriorityIcons' icon={faArrowsUpDown} color='orange'/>:
                    <FontAwesomeIcon icon={faArrowDown} color='green' />) }
                    <FontAwesomeIcon icon={faPenToSquare} onClick={()=> editTodo(task.id)} />
                    <FontAwesomeIcon icon ={faTrash} onClick={()=>deleteTodo(task.id)} />
                </div>
            </div>
        </div>
    );
};

export default Task; 