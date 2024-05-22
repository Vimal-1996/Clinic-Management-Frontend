import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import LandingPage from './components/LandingPage/LandingPage'
import Admin from './components/Admin/Admin'
import Doctor from './components/Doctor/Doctor'
import Patient from './components/Patient/Patient'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/doctor' element={<Doctor/>}/>
        <Route path='/patient' element={<Patient/>}/>
      </Routes>
    </div>
  );
}

export default App;
