import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SideNav from './components/SideNav'
import Info from './PageComponents/Info'
import Plan from './PageComponents/Plan'
import AddOns from './PageComponents/AddOns'
import Summary from './PageComponents/Summary'
import {FormProvider} from './JS/FormContext'
function App() {
  return (
    <FormProvider>
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
    </FormProvider>
  )
}

export default App
