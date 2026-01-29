import React, { useEffect, useState } from "react";
import Webcam from "../components/Webcam";
import { startMedia, startScreenShare, stopMedia } from "../utils/media";
import ScreenRecorder from "./ScreenRecorder";
import logo from "../assets/logo1.png";

const HrInterviewRound = () => {
  const [stream, setStream] = useState(null);
  const [cameraOn, setCameraOn] = useState(true);
  const [micOn, setMicOn] = useState(true);
  const [isScreenSharing, setIsScreenSharing] = useState(false);
  const [loadingLink, setLoadingLink] = useState(false);

  useEffect(() => {
    let activeStream;
    const init = async () => {
      activeStream = await startMedia();
      setStream(activeStream);
    };
    init();
    return () => stopMedia(activeStream);
  }, []);

  const toggleCamera = () => {
    if (!stream) return;
    stream.getVideoTracks().forEach((track) => {
      track.enabled = !track.enabled;
      setCameraOn(track.enabled);
    });
  };

  const toggleMic = () => {
    if (!stream) return;
    stream.getAudioTracks().forEach((track) => {
      track.enabled = !track.enabled;
      setMicOn(track.enabled);
    });
  };

  const toggleScreenShare = async () => {
    if (!isScreenSharing) {
      stopMedia(stream);
      const screenStream = await startScreenShare();
      if (screenStream) {
        setStream(screenStream);
        setIsScreenSharing(true);
        screenStream.getVideoTracks()[0].onended = async () => {
          const camStream = await startMedia();
          setStream(camStream);
          setIsScreenSharing(false);
        };
      }
    } else {
      stopMedia(stream);
      const camStream = await startMedia();
      setStream(camStream);
      setIsScreenSharing(false);
    }
  };

  const generateMeetingLink = async () => {
    try {
      setLoadingLink(true);
      const res = await fetch("http://localhost:5000/generate-meeting", {
        method: "POST",
      });
      const data = await res.json();
      if (data.success) {
        alert(`Meeting Link Generated:\n${data.meetingLink}`);
        window.open(data.meetingLink, "_blank");
      }
    } catch (err) {
      alert("Server error", err);
    } finally {
      setLoadingLink(false);
    }
  };

  const endInterview = () => {
    stopMedia(stream);
    setStream(null);
    alert("Interview Ended Successfully");
  };

  return (
    <div style={styles.page}>
      <div style={styles.topNavbar}>
        <div style={styles.logoContainer}>
          <img src={logo} alt="Nimblix" style={styles.logoIcon} />
          <span style={styles.brandName}>
            Nimblix <span style={{ fontWeight: "300" }}>Talent Connect</span>
          </span>
          <span style={styles.divider}>|</span>
          <span style={styles.navTitle}>HR Interview Round</span>
        </div>
        <div style={styles.liveBadge}>
          <span style={styles.liveDot}>⊙</span> LIVE
        </div>
      </div>
      <div style={styles.card}>
        <div style={styles.recorderRow}>
          <div style={styles.recordingStatus}>
            <ScreenRecorder />
          </div>
          <h3 style={styles.innerTitle}>HR Interview Round</h3>
        </div>

        <div style={styles.webcamBox}>
          {stream ? (
            <Webcam stream={stream} />
          ) : (
            <div style={styles.offMsg}>Camera Off</div>
          )}
        </div>

        <div style={styles.micStatus}>Mic {micOn ? "ON" : "OFF"}</div>
        <div style={styles.controls}>
          <button onClick={toggleCamera} style={styles.controlBtn}>
            {cameraOn ? "Camera OFF" : "Camera ON"}
          </button>
          <button onClick={toggleMic} style={styles.controlBtn}>
            {micOn ? "Mic OFF" : "Mic ON"}
          </button>
          <button onClick={toggleScreenShare} style={styles.controlBtn}>
            {isScreenSharing ? "Stop Share" : "Share Screen"}
          </button>
          <button
            onClick={generateMeetingLink}
            style={styles.controlBtn}
            disabled={loadingLink}
          >
            {loadingLink ? "..." : "Generate Meeting Link"}
          </button>
          <button onClick={endInterview} style={styles.endBtn}>
            End Interview
          </button>
        </div>
      </div>
    </div>
  );
};

export default HrInterviewRound;

const styles = {
  page: {
    height: "100vh",
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: "linear-gradient(135deg, #c2e9fb 0%, #a1c4fd 100%)", // Blue gradient background
    padding: "20px",
    boxSizing: "border-box",
    fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
  },

  recorderRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "15px",
    width: "100%",
  },

  recordingStatus: {
    display: "inline-flex",
    alignItems: "center",
    background: "#2d7a75",
    color: "#fff",
    padding: "6px 15px",
    borderRadius: "6px",
    fontSize: "13px",
  },

  innerTitle: {
    margin: 0,
    fontSize: "18px",
    fontWeight: "600",
    color: "#333",
  },
  topNavbar: {
    width: "100%",
    maxWidth: "1100px",
    background: "rgba(255, 255, 255, 0.6)",
    backdropFilter: "blur(10px)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    borderRadius: "12px",
    marginBottom: "20px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
  },
  logoContainer: { display: "flex", alignItems: "center" },
  logoIcon: { height: "100px", marginRight: "10px" },
  brandName: { fontSize: "18px", fontWeight: "bold", color: "#333" },
  divider: { margin: "0 15px", color: "#ccc" },
  navTitle: { fontSize: "16px", color: "#555", fontWeight: "500" },
  liveBadge: {
    background: "#fff1f1",
    color: "#ff5c5c",
    padding: "4px 12px",
    borderRadius: "8px",
    fontSize: "12px",
    fontWeight: "bold",
    border: "1px solid #ffcccc",
    display: "flex",
    alignItems: "center",
  },
  liveDot: { marginRight: "5px", fontSize: "16px" },
  card: {
    width: "100%",
    maxWidth: "950px",
    background: "#ffffff",
    borderRadius: "24px",
    boxShadow: "0 20px 50px rgba(0,0,0,0.1)",
    padding: "30px",
    display: "flex",
    flexDirection: "column",
  },

  webcamBox: {
    width: "100%",
    aspectRatio: "16/9",
    background: "#f0f4f8",
    borderRadius: "12px",
    overflow: "hidden",
    position: "relative",
    border: "1px solid #e0e0e0",
  },
  micStatus: {
    textAlign: "center",
    padding: "10px",
    fontSize: "14px",
    color: "#666",
  },
  controls: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginTop: "10px",
  },
  controlBtn: {
    padding: "10px 18px",
    background: "#5ba4b5",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "13px",
    fontWeight: "500",
  },
  endBtn: {
    padding: "10px 22px",
    background: "#d9534f", // Red color for end button
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "13px",
    fontWeight: "500",
  },
  offMsg: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#999",
  },
};
