import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Upload from './components/Upload/Upload';


function App() {
  return (
      <div className="App">
          <header className="App-header">
              <Upload />
          </header>
      </div>
  );
}

export default App
