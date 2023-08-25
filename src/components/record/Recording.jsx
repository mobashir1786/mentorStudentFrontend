import { ReactMediaRecorder } from "react-media-recorder";
import './recording.css';
import { useState } from "react";

const Recording = () => {
    const [first, setfirst] = useState(1);
    const start = () => {
        setfirst(!first)
    }
    const stop = () => {
        setfirst(!first)
    }
    return (
        <div>
            <ReactMediaRecorder
                video
                render={({ status, startRecording, stopRecording, mediaBlobUrl }) => (
                    <div className="recoding">
                        <h1>{status}</h1>
                        <video src={mediaBlobUrl} controls autoPlay />
                        {
                            first ? <button className="start" onClick={() => { startRecording(); start() }}>Start Recording</button> : <button className="stop" onClick={() => { stopRecording(); stop() }}>Stop Recording</button>
                        }
                    </div>
                )}
            />
        </div>
    )
}

export default Recording
