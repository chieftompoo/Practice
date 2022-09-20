import React from "react"
import Navbar from "./Navbar"
import Main from "./main"

function App() {
  const [darkMode, setDarkMode]  = React.useState(true)

  function toggleDarkMode() {
    setDarkMode(prevMode => !prevMode)
  }
  return (
    <div className="App">
    <Navbar 
      darkMode={darkMode}
      toggleDarkMode={toggleDarkMode}
    />
    <Main darkMode={darkMode}/>
    </div>
  );
}

export default App
