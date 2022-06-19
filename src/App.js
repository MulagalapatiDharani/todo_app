import {useEffect, useState} from 'react';
import {Button, FormControl, InputLabel, Input} from '@material-ui/core';
import ToDo from './ToDo';
import './App.css';
import db from './firebase';
import firebase from 'firebase/compat/app';
 
function App() {  
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  //When the app loads, we need to listen to the db and fetch new todo's as they get added/removed
  useEffect(() => {
    //this code fires..when app loads
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => doc.data().task))
    })
  }, [input]);

  const addTodo = (event) => {
    //this will fire opff when we click the button
    event.preventDefault(); // prevents the refresh on cliccking enter intead of add todo
   
    //Adding todos to db
    db.collection('todos').add({
      task: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    setInput(''); //clearing the input after submitting
  } 

  return (
    <div className="App">
     <h1>Hello World!!</h1>
     <FormControl>
       <InputLabel>Write a ToDo</InputLabel>
       <Input
         value={input}
         onChange={ event => setInput(event.target.value)}
       />
      </FormControl>
        <Button 
          disabled={!input}
          type="submit" 
          variant="contained" 
          color="primary"
          onClick={addTodo}
        >
          Add ToDo
        </Button>

     <ul> 
      {todos.map(todo => (
        <ToDo text={todo}/>
      ))}
     </ul>
    </div>
  );
}

export default App;
