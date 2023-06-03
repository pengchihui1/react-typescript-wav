import React from 'react';
import useRecorder from '../hooks/useRecorder';

function RecorderDemo() {
  const options = { numChannels: 1 };
  const { audioURL, isRecording, start, stop } = useRecorder(options);

  return (
    <div style={{"marginTop":"200px"}} className="recorder-demo">
      <button className="recorder-button" onClick={start} disabled={isRecording} type="button">
        Start
      </button>

      <audio className="recorder-audio" src={audioURL} controls type="audio/wav">
        <track default kind="captions" srcLang="en" src={audioURL} />
        Sorry, your browser does not support embedded audio.
      </audio>

      <button className="recorder-button" onClick={stop} disabled={!isRecording} type="button">
        Stop
      </button>

    </div>
  );
}

export default RecorderDemo;