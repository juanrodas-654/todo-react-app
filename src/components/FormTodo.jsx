import react, { useState } from 'react';

const FormTodo = props => {
    const [description, setDesciption] = useState("");
    const {handleAddItem} = props;
    const handleSubmit = (e) => {
        e.preventDefault();
        
        handleAddItem({
            done: false,
            id: (+new Date()).toString(),
            description
        });
        setDesciption("");
    };
    return (
        <form id="todo-list" onSubmit={handleSubmit}>
            <div  className='flex justify-between items-center gap-4 p-4'>
                <input className="border border-double border-black w-full bg-gray-100 rounded p-2 mr-4 font-bold text-lg font-mono " type="text" 
                name="text" 
                placeholder='Task'
                value={description}
                onChange={e=>setDesciption(e.target.value)} 
                />

                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                disabled={description ? "" : "disabled"}>
                    Add
                </button>
            </div>
        </form>
    );
}

export default FormTodo;