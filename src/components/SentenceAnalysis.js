import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

function SentenceAnalysis() {
  const [analysis, setAnalysis] = useState([]);
  const location = useLocation(); // Get access to the location state

  const analyzeSentence = async (textToAnalyze) => {
    try {
      const response = await axios.post('http://127.0.0.1:5000/analyze', { text: textToAnalyze });
      setAnalysis(response.data.entities); // Assuming the Flask app returns a JSON with an 'entities' key
    } catch (error) {
      console.error('Error during sentence analysis:', error);
    }
  };

  useEffect(() => {
    // Extract text from the location state
    const textToAnalyze = location.state?.text;
    if (textToAnalyze) {
      analyzeSentence(textToAnalyze);
    }
  }, [location]); // Only re-run the effect if location changes

  return (
    <div>
      {analysis.length > 0 ? (
        <div>
          <h2>Analysis Results</h2>
          <ul>
            {analysis.map((entity, index) => (
              <li key={index}>
                <strong>{entity.text}</strong> - {entity.label}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Performing analysis...</p>
      )}
    </div>
  );
}

export default SentenceAnalysis;
