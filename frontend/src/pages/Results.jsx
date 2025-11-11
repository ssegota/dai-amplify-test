import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Results() {
  const { userId, patientId } = useParams();
  const [results, setResults] = useState([]);
  const [features, setFeatures] = useState([]);
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);

  // Backend API for fetching results
  const BACKEND_URL = `http://localhost:5001/api/results/${userId}/${patientId}`;
  // Lambda API for prediction
  const API_URL = "https://300x0qyn61.execute-api.eu-north-1.amazonaws.com/prod/predict";

  // Fetch results for this user + patient
  useEffect(() => {
    fetch(BACKEND_URL)
      .then((res) => res.json())
      .then((data) => {
        console.log("DEBUG results:", data);
        setResults(data);
      })
      .catch((err) => {
        console.error("DEBUG fetch error:", err);
        setResults([]);
      });
  }, [BACKEND_URL]);

  // Handle clicking a result card
  const sendResult = async (r) => {
    try {
      // Extract numerical fields from the selected row
      const feats = [
        r.amplitude ?? r.Amplitude,
        r.auc ?? r.AUC,
        r.fwhm ?? r.FWHM,
        r.frequency ?? r.Frequency,
        r.snr ?? r.SNR,
        r.skewness ?? r.Skewness,
        r.kurtosis ?? r.Kurtosis,
        r.peakcounts ?? r.PeakCounts,
        r.timegenerated ? new Date(r.timegenerated).getSeconds() : 0,
        (r.amplitude ?? 0) + (r.frequency ?? 0)
      ];

      setFeatures(feats);
      setLoading(true);
      console.log("Sending features to Lambda:", feats);

      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ features: feats.map(Number) })
      });

      const data = await response.json();
      console.log('Lambda response:', data);
      setPrediction(data);
      alert('Prediction received from Lambda!');
    } catch (err) {
      console.error('Error sending to Lambda:', err);
      alert('Error sending to Lambda');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-container">
      <button onClick={() => (window.location.href = '/')}>← Logout</button>
      <h2>Results for patient {patientId}</h2>

      {loading && <p>Processing prediction...</p>}

      {prediction && (
        <div className="card" style={{ backgroundColor: '#0e7490' }}>
          <h3>Lambda Prediction Output</h3>
          <pre style={{ textAlign: 'left' }}>{JSON.stringify(prediction, null, 2)}</pre>
        </div>
      )}

      <div className="list">
        {results.map((r) => (
          <div
            key={r.resultid ?? r.ResultID}
            className="card"
            onClick={() => sendResult(r)}
          >
            {`Experiment ${r.experimentid ?? r.ExperimentID} | Amp ${r.amplitude ?? r.Amplitude} | Freq ${r.frequency ?? r.Frequency}`}
          </div>
        ))}
      </div>
    </div>
  );
}

