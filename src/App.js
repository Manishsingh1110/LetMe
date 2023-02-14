import './App.css';
import Footer from './components/Footer';
import Hospital from './components/Hospital';
import Nav from './components/Nav';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Beddetails from './components/Beddetails';
import Patient from './components/Patient';
import Dentists from './Data/Dentists';
import Dermatologists from './Data/Dermatologists';
import Pathologist from './Data/Pathologist';
import Otherfeatures from './components/Otherfeatures';
import Categoery from './components/Category';
import State from './context/state';
import Appointments from './components/AppointmentsDermatologists';
import AppointmentsDentists from './components/AppointmentsDentists';
import AppointmentsPathologist from './components/AppointmentsPathologist';
import AppointmentsDermatologists from './components/AppointmentsDermatologists';
function App() {
  return (
    <State>
      <Router>
        <Routes>
          <Route path="/" element={<><Nav detailheight={500} /><Categoery /> <Hospital /></>} />
          <Route path="/Dentists" element={<><Nav detailheight={1} /><Otherfeatures HospitalData={Dentists} /></>} />
          <Route path="/Dermatologists" element={<><Nav detailheight={1} /><Otherfeatures HospitalData={Dermatologists} /></>} />
          <Route path="/Pathologist" element={<><Nav detailheight={1} /><Otherfeatures HospitalData={Pathologist} /></>} />
          <Route path="/particularhospital/:slug" element={<><Nav detailheight={1} /><Beddetails /></>} />
          <Route path="/particularhospital/:slug/:department/:details" element={<><Nav detailheight={1} /><Patient /></>} />
          <Route path="/particulardoctor/:doctor/Dentists" element={<><Nav detailheight={1} /><AppointmentsDentists/></>} />
          <Route path="/particulardoctor/:doctor/Dermatologists" element={<><Nav detailheight={1} /><AppointmentsDermatologists/></>} />
          <Route path="/particulardoctor/:doctor/Pathologist" element={<><Nav detailheight={1} /><AppointmentsPathologist/></>} />
        </Routes>
        <Footer />
      </Router>
    </State>
  );
}

export default App;
