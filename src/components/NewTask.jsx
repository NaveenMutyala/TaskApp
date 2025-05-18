import React,{useState} from 'react';

const NewTask = ({addTodo}) => {
    const [value,setValue] = useState("");
    const handleSumbit = e =>{
        e.preventDefault();
        addTodo(value)
        setValue("")
    }
    return (
        <div>
            <form className='TodoForm' onSubmit={handleSumbit} >
                <input type="text" className='todo-input' placeholder='what is the task today ?' value={value} onChange = {(e)=> setValue(e.target.value)} />
                <select className='todo-input-select' defaultValue={"Medium"}>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>

                </select>
                <button type='submit' className='todo-btn'>Add Task</button>
            </form>
        </div>
    );
};

export default NewTask;