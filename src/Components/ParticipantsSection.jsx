import React, { useState } from 'react';
import "./ParticipantsSection.css";
import AttendeeList from './AttendeeList';

function ParticipantsSection({setTranscription}) {
  const [activeSection, setActiveSection] = useState('attendeeList');

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className='ParticipantsSection'>
      <div className="participants-section-head">
        <div id='Phead' className={`section${activeSection === 'groupChat' ? 'active' : ''}`} onClick={() => handleSectionClick('groupChat')}>
          Group Chat
        </div>
        <div id = 'Phead2' className={`section${activeSection === 'attendeeList' ? 'active' : ''}`} onClick={() => handleSectionClick('attendeeList')}>
          Attendee List
        </div>
      </div>
      <div className="participants-body">
        {activeSection === 'groupChat' && (
          <div>
            {/* Display content for Group Chat section */}
            Group Chat Body
          </div>
        )}
        {activeSection === 'attendeeList' && (
          <AttendeeList setTranscription={setTranscription} />
        )}
      </div>
    </div>
  );
}

export default ParticipantsSection;
