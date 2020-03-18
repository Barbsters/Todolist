import React from 'react';
import './App.css';
import Todolist from './components/Todolist';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';



function App() {
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" >
            To Do List
          </Typography>
        </Toolbar>
      </AppBar>
    <Todolist/>
    </div>

    
  );
}

export default App; //to export dependencies and import it to some other app
