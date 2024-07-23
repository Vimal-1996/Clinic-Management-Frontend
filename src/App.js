import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import LandingPage from './components/LandingPage/LandingPage'
import Admin from './components/Admin/Admin'
import Doctor from './components/Doctor/Doctor'
import Patient from './components/Patient/Patient'
import AdminPostLogin from '../src/components/Admin/AdminPostLogin'
import PatientPostLogin from '../src/components/Patient/PatientPostLogin'
import DoctorPostLogin from './components/Doctor/DoctorPostLogin';
import Prescriptions from './components/Doctor/Prescriptions';
import {deletecookie, getCookie} from '../src/Storage/cookies'

function App() {
  

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/doctor' element={<Doctor/>}/>
        <Route path='/patient' element={<Patient/>}/>
        <Route path='/admin/login' element={<AdminPostLogin/>}/>
        <Route path='/patient/login' element={<PatientPostLogin/>}/>
        <Route path='/doctor/login' element={<DoctorPostLogin/>}/>
        <Route path='/doctor/login/consultPatient' element={<Prescriptions/>}/>
      </Routes>
    </div>
  );
}

export default App;
