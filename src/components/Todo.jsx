import React from 'react'
import { useState } from 'react'

 const Todo = () => {

    const [list, setList] = useState([])
    const [newList, setNewList] = useState( "")

    const addTask = () => {
        if (newList.trim() !== "") {
            setList([...list, newList])
            setNewList("")
        }
    }

    const handleChange = (event) => {
        setNewList(event.target.value)
    }


    return<>
    <div>
        <input type="text" value={newList} 
        onChange={handleChange}
        />
        <button onClick={addTask}> Add Do</button>
        <ul>
            {list.map((lists, i) => (
                <li key={i}>{lists}</li>
            ))}
        </ul>
    </div>

    </>

 }

 export default Todo