import React, { useState } from 'react';
import "./RightSection.css";
import pause from "../assets/pause.png";
import stop from "../assets/stop.png";
import forward from "../assets/fast-forward.png"
import backward from "../assets/previous.png"


function RightSection({ transcription }) {
  const [summary, setSummary] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showTranscription, setShowTranscription] = useState(true);

  const fetchSummary = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://9d2f-34-106-180-69.ngrok-free.app/summarize', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text: transcription })
      });
      const data = await response.json();
      setSummary(data.summary);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching summary:', error);
      setLoading(false);
    }
  };

  const handleStopClick = () => {
    if (transcription) {
      if (showTranscription) {
        setShowTranscription(false);
        if (!summary) 
        fetchSummary();
      } else {
        setShowTranscription(true);
      }
    }
  };

  return (
    <div className='RightSection'>
      <div className="right-section-heading">
        <h2 className='right-sec-inner-head'>{showTranscription ? 'Transcription' : 'Summary'}</h2>
        <div className="pause-icon">
          <img className="pause-img" src={pause} alt="" />
        </div>
        {transcription && (
          <div onClick={handleStopClick} className="stop-icon"> 
            <img className="pause-img" src = {showTranscription ? forward : backward} alt="" />
          </div>
        )}
      </div>

      <div className="right-section-body">
        {showTranscription ? (
          <p className='transcription'>{transcription}</p>
        ) : (
          <div className="summary-content">
            <p className='transcription'>{loading ? 'Loading...' : summary || 'Summary not available'}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default RightSection;
