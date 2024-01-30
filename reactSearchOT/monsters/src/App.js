import './App.css';

import { useState, useEffect } from 'react';

import Searchbox from './components/searchBox/Searchbox'
import Cardlist from './components/cardList/Cardlist';

function App() {
  const [monsters, setMonsters] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((users) => setMonsters(users))
  }, [])

  const onSearchChange = (e) => {
    const searchString = e.target.value.toLocaleLowerCase()
    setSearch(searchString)
  }

  const filteredMonster = monsters.filter((monster) => {
    return monster.name.toLocaleLowerCase().includes(search)
  })

  return (
    <div className="App">
      <h1 className='app-title'>Monster</h1>
      <Searchbox className="monster-search-box" placeholder="Search Monsters" onChangeHandler={onSearchChange} />
      <Cardlist monsters={filteredMonster} />
    </div>
  );
}

export default App;
