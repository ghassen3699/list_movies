import './App.css';
import React,{ Component } from 'react';
import Movie from './components/movie';


class App extends Component{
  render(){
    return (
      <main className="container">
        <Movie />
      </main>
    )
  }
}
export default App;
