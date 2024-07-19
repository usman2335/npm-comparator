import { useState } from 'react'
import Header from './components/header'
import SearchBar from './components/search'
// import './App.css'

function App() {

  return (
    <div style = {{
      display: "flex",
      flexDirection: "column"
    }}>
    <Header/>
    <SearchBar></SearchBar>
    </div>
    
  )
}

export default App
