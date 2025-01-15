import { useState } from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SideNav from './components/SideNav'
import Info from './Info'
import Plan from './Plan'
import AddOns from './AddOns'
import Summary from './Summary'

function App() {
  const [selectedOptions, setSelectedOptions] = useState([{}])
  return (
    <Router>
      <div>
        <SideNav />
        <Routes>
          <Route  path="/" element={<Info/>} />
          <Route path="/plan" element={<Plan/>} />
          <Route path="/add-ons" element={<AddOns/>} />
          <Route path="/summary" element={<Summary/>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
