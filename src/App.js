import React, { useState } from "react";
import './App.css';
import Tweet from './Tweet';


function App(){

  const [users, setUsers] = useState([
    {name:"Summer" , message:"Hottest season of the year" },
    {name:"Winter" , message:"Coldest season of the year" },
    {name:"Autumn" , message:"Tis the time of the year the leaves fall." },
    {name:"Spring" , message:"The most pleasant season of the year" }
  ]);

  return(
    <div className="app">
      {users.map( user => <Tweet name={user.name} message={user.message}/> )}
    </div>
  );
}

export default App;