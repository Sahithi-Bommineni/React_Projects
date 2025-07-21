import { useState } from 'react'
import './App.css'
import Header from './components/header.jsx'
import Todolists from './components/todolists.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {count}
      <Header/>
      <Todolists/>
    </>
  );
}

export default App
