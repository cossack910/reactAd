import React, { useState, useCallback } from 'react'
import './App.css'
import { ChildArea } from './components/ChildArea';

function App() {
  const [text, setText] = useState('')
  const [open, setOpen] = useState(false)
  
  const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value);

  const onClickOpen = () => setOpen(!open);

  const onClickClose = useCallback(() => setOpen(false), [setOpen]);
  
  return (
      <div className="App">
        <input value={text} onChange={onChangeText}></input>
        <br />
        <br />
        <button onClick={onClickOpen}>表示</button>
        <ChildArea open={open} clickClose={onClickClose}/>
      </div>
  )
}

export default App
