import React from 'react';
import './App.css';
//import HellowMessage from './components/HelloMessage';
import Main from './containers/Main/Main';
//import Form from './form/form';


const App=()=>{
// function App() {
  return (
    <div className="App">
        {/* <HellowMessage name="Siddhi"/> */}
        {/* call name prop from fun comp to class based using this.props.name */}
        {/* <Netflix/> */}
        <Main/>
        {/* <Form/> */}
    </div>
  );
}

export default App;


//HellowMessage is the main file which will render so is called in App.js

