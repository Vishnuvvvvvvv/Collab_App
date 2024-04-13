import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import VideoConference from './Components/VideoConference'
import ParticipantsSection from './Components/ParticipantsSection'

function App() {
  const [count, setCount] = useState(0)
  const [transcription,setTranscription] = useState();
  return (
      <div className='main-body'>
          <Navbar transcription={transcription}/>
          <div className="body">
               <div className="video-conferencing">
                  <VideoConference/>
               </div>
               <div className="participants-section">
                  <ParticipantsSection setTranscription={setTranscription}/>
               </div>
          </div>
      </div>
  )
}

export default App
