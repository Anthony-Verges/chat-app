import React from 'react';
import Avatar from './components/Contact.js'
import './components/style.css'

const myCard = {
  image : "https://randomuser.me/api/portraits/men/88.jpg",
  name : 'Anthony Verges',
  isConnect : true
}    



function App() {
  return (
    <div className="App">
      <Avatar {...myCard}/>
      
    </div>
  );
}

export default App;