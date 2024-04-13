import React,{useEffect ,useState} from 'react'
import "./AttendeeList.css"
import profilePic from "../assets/avatar.png"
import startIcon from "../assets/icons8-record-50.png"
import stopIcon from "../assets/stop.png"
import axios from 'axios'
import { useAudioRecorder } from 'react-audio-voice-recorder';
const AttendeeList = ({setTranscription}) => {

  
  const [recording, setRecording] = useState(false);
  const [audioBlob, setAudioBlob] = useState(null);
  // const [transcript, setTranscript] = useState('');

  const [name,setName] = useState(['Jacob Samuel','Abraham Issac','Joshua P','Peter Domnic','Paul Augustine','John Manuel'])

   const {
    startRecording,
    stopRecording,
    togglePauseResume,
    recordingBlob,
    isRecording,
    isPaused,
    recordingTime,
    mediaRecorder
  } = useAudioRecorder();


  useEffect(() => {
    if (recordingBlob) {
      // Do something with the recordingBlob, like save it or send it to the server
      console.log('Recording saved:', recordingBlob);
      const formData = new FormData();
      formData.append('audio_file', recordingBlob);
  
      axios.post('https://e6fe-35-187-255-59.ngrok-free.app/transcribe', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      .then(response => {
        setTranscription(response.data.transcript);
        console.log('Transcription ready')
      })
      .catch(error => {
        console.error('Error transcribing audio:', error);
      });
    }
  }, [recordingBlob]);

  
  

  const nameEl = name.map((item)=>{
    return(
        <>
           <div className='attendee-name'>
            <img className ='prf-img' src={profilePic} alt="" srcset="" />
            <h3>  {item} </h3>
        </div> 
        </>
    )
})

  return (
    <div className='attendeeList'> 
     {/* Recording time: {recordingTime} seconds <br /><br /> */}
    { nameEl }
   
      {/* <p>Recording time: {recordingTime} seconds</p> */}
      {/* <p>Status: {isRecording ? 'Recording' : isPaused ? 'Paused' : 'Idle'}</p> */}

      <div className="attendee-btn-container">
     

          {!isRecording? (<div className='attendee-start-btn' disabled={isRecording} onClick={startRecording}> <img className='attendee-start-icon'src={startIcon} alt="" srcset="" />  REC </div>):
           <div className='attendee-stop-btn' onClick={togglePauseResume} disabled={!isRecording}> {isPaused ? 'Resume' : 'Pause'} </div>}

           <div className='attendee-stop-btn' disabled={!isRecording} onClick= {()=>{stopRecording()}}> <img className='attendee-stop-icon'src={stopIcon} alt="" srcset="" />  STOP </div>

      </div>
    </div>

  );
};

export default AttendeeList;
