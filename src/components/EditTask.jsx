import React,{useState} from 'react';

const EditTask = ({editTodo,updateTodo,task}) => {
    const [value,setValue] = useState(task.task);
    const handleSumbit = e =>{
        e.preventDefault();
        updateTodo(value,task.id)
        setValue("")
    }
    return (
        <div>
            <form className='TodoForm' onSubmit={handleSumbit} >
                <input type="text" className='todo-input' placeholder='Update the task ' value={value} onChange = {(e)=> setValue(e.target.value)} />
                <button type='submit' className='todo-btn'>Update Task</button>
            </form>
        </div>
    );
};

export default EditTask;