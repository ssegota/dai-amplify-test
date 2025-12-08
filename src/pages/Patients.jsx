import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function Patients() {
  const { userId } = useParams();
  const [patients, setPatients] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:5001/api/patients/${userId}`)
      .then((res) => res.json())
      .then(setPatients)
      .catch(() => setPatients([]));
  }, [userId]);

  const openResults = (patientId) => {
    // go to results for this user + patient
    navigate(`/results/${userId}/${patientId}`);
  };

  return (
    <div className="page-container">
      <button onClick={() => navigate('/')}>← Logout</button>
      <h2>My Patients</h2>
      <div className="list">
        {patients.map((p) => (
          <div
            key={p.patientid}
            className="card"
            onClick={() => openResults(p.patientid)}
          >
            {p.firstname} {p.lastname}
          </div>
        ))}
      </div>
    </div>
  );
}

