import React, {useState} from 'react'; //write use state here to save some writing we import it 


 export default function Todolist() {

    const [todo, setTodo] = useState({desc: '', date: ''}); 
    const [todos, setTodos] = useState([]);

    const addTodo = (value) => {  // addTodo function called on button
        setTodos([{ desc: todo.desc, date: todo.date}, ...todos]);  //values comes from input values and saved to todo state
    }

    const inputChanged = (event) => {
        setTodo({...todo, [event.target.name]: event.target.value});  //this is now an object --> inside {}
         }


    return (

        <div>
            <p>Description: <input type="text" name="desc" value={todo.desc} onChange={inputChanged}/></p>
            <p>Date: <input type="date" name="date" value={todo.date} onChange={inputChanged}/></p>
            <button onClick={addTodo}>Add</button>

            <table>
                <tbody>
                    {
                        todos.map((todo, index) =>
                            <tr key={index}>
                                <td>{todo.desc}</td> 
                                <td>{todo.date}</td>
                                <td><button onClick={() => props.delete(index)}>Delete</button></td>
                            </tr>)
                    }
                </tbody>
            </table>

        </div>
    )
}
