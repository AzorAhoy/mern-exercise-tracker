import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from './components/navbar.component';
import ExercisesList from './components/exercises-list.component';
import EditExercises from './components/edit-exercises.component';
import CreateExercises from './components/create-exercises.component';
import CreateUser from './components/create-user.component';

function App() {
  return (
    <Router>
      <div className="container">
      <Navbar/>
      <br/>
      <Route path="/" exact component = {ExercisesList} />
      <Route path="/edit/:id" exact component = {EditExercises} />
      <Route path="/create" exact component = {CreateExercises} />
      <Route path="/user" exact component={CreateUser} />
      </div>
    </Router>

  );
}

export default App;
