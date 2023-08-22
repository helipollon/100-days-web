import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import AddTask from './components/UI/AddTask/AddTask';

function App() {
  return (
    <div className="App">
      <AddTask />
    </div>
  );
}

export default App;
