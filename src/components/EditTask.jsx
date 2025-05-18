import React,{useState} from 'react';

const EditTask = ({editTodo,updateTodo,task}) => {
    const [value,setValue] = useState(task.task);
    const [priority,setPriority] = useState(task.priority);
    const handleSumbit = e =>{
        e.preventDefault();
        updateTodo(value,task.id,priority )
        setValue("")
    }
    return (
        <div>
            <form className='TodoForm' onSubmit={handleSumbit} >
                <input type="text" className='todo-input' placeholder='Update the task ' value={value} onChange = {(e)=> setValue(e.target.value)} />
                <select className='todo-input-select' value={priority} onChange={e=>setPriority(e.target.value)} >
                    <option className='todo-input-select' value="High">High</option>
                    <option className='todo-input-select' value="Medium">Medium</option>
                    <option className='todo-input-select' value="Low">Low</option>
                </select>
                <button type='submit' className='todo-btn'>Update Task</button>
            </form>
        </div>
    );
};

export default EditTask;