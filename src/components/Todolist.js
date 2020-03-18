import React, {useState} from 'react';
import ReactTable from 'react-table-v6'
import 'react-table-v6/react-table.css';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Tooltip from '@material-ui/core/Tooltip';
import TextField from '@material-ui/core/TextField';




 export default function Todolist() {

    const [todo, setTodo] = useState({desc: '', date: ''}); //empty object with two attributes // created a state to do
    const [todos, setTodos] = useState([]);

    const addTodo = (value) => {  // addTodo function called on button
        setTodos([{ desc: todo.desc, date: todo.date}, ...todos]);  //values comes from input values and saved to todo state
        setTodo({desc: '', date: ''});
    }

    const inputChanged = (event) => {
        setTodo({...todo, [event.target.name]: event.target.value});  //object a--> inside the curly brackets
         }

    const deleteTodo = (row) => {
        setTodos (todos.filter((_, index) => row !== index)) // there is a parameter (_ or item --> declared but never used) 
    }

    const columns = [
        {
            Header: 'Description',
            accessor: 'desc'
        },
        {
            Header: 'Date',
            accessor: 'date'
        },
        {
        Cell: row => (  
         <Button color="secondary" size="small" onClick={() => deleteTodo(row.index)}>Delete</Button>
        ) 
        }
       
    ]

    return (
        <div>

            <p>Simple Todolist</p>                   
            <TextField style={{marginRight: 10}} label="Description" name="desc" value={todo.desc} onChange={inputChanged}/> 
            <TextField style={{marginRight: 10}} label="Date" name="date" value={todo.date} onChange={inputChanged}/>

            <Tooltip title="Add new">
            <IconButton 
            startIcon={<AddIcon />}         
            color="primary" 
            onClick={addTodo}><AddCircleIcon fontSize="large"  />
            </IconButton>
            </Tooltip>
           
           <ReactTable data={todos} columns={columns} defaultPageSize={10} filterable={true}/>
            

        </div>

    
    )
}
