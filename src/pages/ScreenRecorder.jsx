import React, { useRef, useState } from "react";
import axios from "axios";

const ScreenRecorder = () => {
  const mediaRecorderRef = useRef(null);
  const streamRef = useRef(null);
  const chunksRef = useRef([]);

  const [isRecording, setIsRecording] = useState(false);
  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getDisplayMedia({
        video: true,
        audio: true,
      });

      streamRef.current = stream;

      const mediaRecorder = new MediaRecorder(stream, {
        mimeType: "video/webm",
      });

      mediaRecorderRef.current = mediaRecorder;

      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) {
          chunksRef.current.push(e.data);
        }
      };

      mediaRecorder.onstop = handleUpload;

      mediaRecorder.start();
      setIsRecording(true);
      stream.getVideoTracks()[0].onended = stopRecording;

      console.log("🔴 Recording Started");
    } catch (err) {
      console.error("Screen permission denied", err);
      alert("Screen permission denied");
    }
  };

  const stopRecording = () => {
    if (!mediaRecorderRef.current) return;

    mediaRecorderRef.current.stop();

    streamRef.current.getTracks().forEach((track) => track.stop());

    setIsRecording(false);
    console.log("⏹ Recording Stopped");
  };

  /* =========================
     UPLOAD RECORDING
  ========================= */
  const handleUpload = async () => {
    const blob = new Blob(chunksRef.current, { type: "video/webm" });
    chunksRef.current = [];

    const formData = new FormData();
    formData.append("recording", blob);

    try {
      await axios.post("http://localhost:5000/api/recordings", formData);
      alert("✅ Recording uploaded successfully");
    } catch (err) {
      console.error("Upload failed", err);
      alert("❌ Upload failed");
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      {!isRecording ? (
        <button onClick={startRecording} style={btnStyle("green")}>
          ▶ Start Recording
        </button>
      ) : (
        <button onClick={stopRecording} style={btnStyle("red")}>
          ⏹ Stop Recording
        </button>
      )}
    </div>
  );
};

const btnStyle = (color) => ({
  padding: "12px 30px",
  fontSize: "16px",
  backgroundColor: color,
  color: "#fff",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
});

export default ScreenRecorder;
