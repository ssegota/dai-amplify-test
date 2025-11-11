import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login.jsx';
import Patients from './pages/Patients.jsx';
import Results from './pages/Results.jsx';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/patients/:userId" element={<Patients />} />
      {/* pass both userId and patientId */}
      <Route path="/results/:userId/:patientId" element={<Results />} />
    </Routes>
  );
}

