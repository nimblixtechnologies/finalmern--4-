import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Webcam from "../components/Webcam";
import { startMedia, stopMedia } from "../utils/media";

const HrMeetingJoin = () => {
  const { meetingId } = useParams();
  const [stream, setStream] = useState(null);

  useEffect(() => {
    let activeStream;

    const init = async () => {
      activeStream = await startMedia();
      setStream(activeStream);
    };

    init();
    return () => stopMedia(activeStream);
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>HR Interview Meeting</h2>
      <p>
        <b>Meeting ID:</b> {meetingId}
      </p>

      <div style={{ height: "70vh", background: "#000" }}>
        {stream ? <Webcam stream={stream} /> : <p>Joining meeting...</p>}
      </div>
    </div>
  );
};

export default HrMeetingJoin;
