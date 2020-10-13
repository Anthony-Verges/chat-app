import React from 'react';
import QuoteCard from './components/QuoteCard.js';
import './components/style.css'

const myCard = {
  image : "https://randomuser.me/api/portraits/men/88.jpg",
  name : 'Anthony Verges',
  isConnect : true
}
const jLOCard = {
  image : "https://randomuser.me/api/portraits/women/66.jpg",
  name : "Jennifer Lopez",
  isConnect : true
}

const vicSalomonCard = {
  image : "https://randomuser.me/api/portraits/men/81.jpg",
  name : "Victor Salomon",
  isConnect : false
}



function App() {
  return (
    <div className="App">
      <QuoteCard {...myCard}/>
      <QuoteCard {...jLOCard}/>
      <QuoteCard {...vicSalomonCard}/>
      
    </div>
  );
}

export default App;