// import logo from './logo.svg'
import './App.css'
import { Button } from '@mui/material'

function App() {
  return (
    <>
      <div className="App">
        <h1>React-MUI</h1>
        <button> Click here</button>
        <div>
          <Button variant="contained" color="secondary">
            Secondary
          </Button>
          <Button variant="contained" color="success">
            Success
          </Button>
          <Button variant="outlined" color="error">
            Error
          </Button>
        </div>
      </div>
    </>
  )
}

export default App
