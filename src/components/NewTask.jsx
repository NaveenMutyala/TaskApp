import React,{useState} from 'react';

const NewTask = ({addTodo}) => {
    const [value,setValue] = useState("");
    const [priority,setPriority] = useState("Medium");
    const handleSumbit = e =>{
        e.preventDefault();
        addTodo(value,priority)
        setValue("")
    }
    return (
        <div>
            <form className='TodoForm' onSubmit={handleSumbit} >
                <input type="text" className='todo-input' placeholder='what is the task today ?' value={value} onChange = {(e)=> setValue(e.target.value)} />
                <select className='todo-input-select' value={priority} onChange={e=>setPriority(e.target.value)} >
                    <option className='todo-input-select' value="High">High</option>
                    <option className='todo-input-select' value="Medium">Medium</option>
                    <option className='todo-input-select' value="Low">Low</option>

                </select>
                <button type='submit' className='todo-btn'>Add Task</button>
            </form>
        </div>
    );
};

export default NewTask;