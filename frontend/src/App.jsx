import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Booking } from './components/Booking'
import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080";
axios.defaults.withCredentials = true

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Booking/>} />
      </Routes>
    </Router>
  )
}

export default App
