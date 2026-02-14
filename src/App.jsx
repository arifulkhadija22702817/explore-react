import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './counter'
import Team from './team'
import Friends from './friends'
import './friends.css'
import Users from './users'





function App() {
  function handleClick() {
    alert('Button clicked!');
  }
  const handleClick2 = () => {
    alert('bttn 2 clicked');
  }
  const addToFive = (num) => {
    alert(num + 5);
  }
  return (
    <>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <p className="read-the-docs">
        hello Ariful Islam
      </p>
      <Counter></Counter>

      <button style={{ padding: '10px', gap: '10px', backgroundColor: 'blue', color: 'white' }} onClick={handleClick}>Click me</button>
      <button onClick={handleClick2}>Click 2</button>
      <button onClick={() => { alert('third btn clicke') }}>btn 3rd
      </button>
      <button onClick={() => addToFive(8)}>five btn</button>
    </>
  )
}

export default App
