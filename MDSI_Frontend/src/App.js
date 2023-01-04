import './App.css';
import React from 'react';
import  RegistrationForm  from "./RegistrationForm/RegistrationForm";
import Login from './LoginForm/LoginForm';
import UserView from './UserView/UserView';

function App() {
  
  return (
    <div className="App">
        <RegistrationForm/>
        <Login/>
        <UserView/>
    </div>
  );
}

export default App;
