// import React, { useEffect, useState } from "react";
// import Webcam from "../components/Webcam";
// import mcqData from "../data/mcqData";
// import { startMedia, startScreenShare, stopMedia } from "../utils/media";
// import DigitalBoard from "./DigitalBoard";
// import ScreenRecorder from "./ScreenRecorder";
// // import logo from "../assets/logo1.png";

// const InterviewRound = ({ title = "Technical Interview Round" }) => {
//   const [questions] = useState(mcqData.TechnicalInterview);
//   const [stream, setStream] = useState(null);
//   const [cameraOn, setCameraOn] = useState(true);
//   const [micOn, setMicOn] = useState(true);
//   const [isScreenSharing, setIsScreenSharing] = useState(false);
//   const [openQuestionId, setOpenQuestionId] = useState(null);

//   useEffect(() => {
//     let activeStream;
//     startMedia().then((s) => {
//       activeStream = s;
//       setStream(s);
//     });

//     return () => stopMedia(activeStream);
//   }, []);

//   const toggleCamera = () => {
//     stream?.getVideoTracks().forEach((track) => {
//       track.enabled = !track.enabled;
//       setCameraOn(track.enabled);
//     });
//   };
//   const toggleMic = () => {
//     stream?.getAudioTracks().forEach((track) => {
//       track.enabled = !track.enabled;
//       setMicOn(track.enabled);
//     });
//   };

//   const toggleScreenShare = async () => {
//     if (!isScreenSharing) {
//       stopMedia(stream);
//       const screenStream = await startScreenShare();

//       if (screenStream) {
//         setStream(screenStream);
//         setIsScreenSharing(true);
//         screenStream.getVideoTracks()[0].onended = async () => {
//           const camStream = await startMedia();
//           setStream(camStream);
//           setIsScreenSharing(false);
//         };
//       }
//     } else {
//       stopMedia(stream);
//       const camStream = await startMedia();
//       setStream(camStream);
//       setIsScreenSharing(false);
//     }
//   };
//   const endInterview = () => {
//     stopMedia(stream);
//     setStream(null);
//     alert("Interview Ended");
//   };

//   const toggleQuestion = (id) => {
//     setOpenQuestionId(openQuestionId === id ? null : id);
//   };

//   return (
//     <div style={styles.page}>
//       <div style={styles.container}>
//         <div style={styles.leftPanel}>
//           <div style={styles.header}>
//             <h2 style={styles.title}>{title}</h2>
//             <span style={styles.badge}>LIVE</span>
//             <ScreenRecorder />
//           </div>

//           <div style={styles.webcamBox}>
//             {stream ? (
//               <Webcam stream={stream} />
//             ) : (
//               <p style={{ color: "#fff" }}>Camera Off</p>
//             )}
//           </div>

//           <div style={styles.controls}>
//             <button onClick={toggleCamera} style={styles.controlBtn}>
//               {cameraOn ? "Camera OFF" : "Camera ON"}
//             </button>

//             <button onClick={toggleMic} style={styles.controlBtn}>
//               {micOn ? "Mic OFF" : "Mic ON"}
//             </button>

//             <button onClick={toggleScreenShare} style={styles.controlBtn}>
//               {isScreenSharing ? "Stop Share" : "Share Screen"}
//             </button>
//           </div>

//           <button onClick={endInterview} style={styles.endBtn}>
//             End Interview
//           </button>
//         </div>
//         <div style={styles.rightPanel}>
//           <h3 style={styles.questionTitle}>Technical Interview Questions</h3>

//           <div style={styles.questionList}>
//             {questions.map((q, index) => (
//               <div key={q.id} style={styles.questionCard}>
//                 <div
//                   style={styles.questionHeader}
//                   onClick={() => toggleQuestion(q.id)}
//                 >
//                   <p style={styles.questionText}>
//                     {index + 1}. {q.question}
//                   </p>
//                   <span style={styles.arrow}>
//                     {openQuestionId === q.id ? "▲" : "▼"}
//                   </span>
//                 </div>

//                 {openQuestionId === q.id && (
//                   <div style={styles.dropdownContent}>
//                     <p style={styles.description}>{q.description}</p>

//                     {q.examples?.map((ex, i) => (
//                       <div key={i} style={styles.exampleBox}>
//                         <p>
//                           <strong>Input:</strong> {ex.input}
//                         </p>
//                         <p>
//                           <strong>Output:</strong> {ex.output}
//                         </p>
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>

//           <DigitalBoard />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default InterviewRound;
import React, { useEffect, useState } from "react";
import Webcam from "../components/Webcam";
import mcqData from "../data/mcqData";
import ScreenRecorder from "../components/ScreenRecorder";



import {
  startMedia,
  startScreenShare,
  stopMedia,
} from "../utils/media";
import DigitalBoard from "./DigitalBoard";
import ScreenRecorder from "./ScreenRecorder";

const InterviewRound = ({ title = "Technical Interview Round" }) => {
  const [questions] = useState(mcqData.TechnicalInterview);

  // 🔥 SEPARATE STREAMS
  const [cameraStream, setCameraStream] = useState(null);
  const [screenStream, setScreenStream] = useState(null);

  const [cameraOn, setCameraOn] = useState(true);
  const [micOn, setMicOn] = useState(true);
  const [isScreenSharing, setIsScreenSharing] = useState(false);
  const [openQuestionId, setOpenQuestionId] = useState(null);

  /* =========================
     START CAMERA + MIC (ONCE)
  ========================= */
  useEffect(() => {
    let cam;

    startMedia().then((s) => {
      cam = s;
      setCameraStream(s);
    });

    return () => {
      stopMedia(cam);
      stopMedia(screenStream);
    };
    // eslint-disable-next-line
  }, []);

  /* =========================
     TOGGLE CAMERA
  ========================= */
  const toggleCamera = () => {
    cameraStream?.getVideoTracks().forEach((track) => {
      track.enabled = !track.enabled;
      setCameraOn(track.enabled);
    });
  };

  /* =========================
     TOGGLE MIC
  ========================= */
  const toggleMic = () => {
    cameraStream?.getAudioTracks().forEach((track) => {
      track.enabled = !track.enabled;
      setMicOn(track.enabled);
    });
  };

  /* =========================
     SCREEN SHARE (SAFE)
  ========================= */
  const toggleScreenShare = async () => {
    if (!isScreenSharing) {
      const screen = await startScreenShare();
      if (!screen) return;

      setScreenStream(screen);
      setIsScreenSharing(true);

      // Auto stop when user stops sharing
      screen.getVideoTracks()[0].onended = () => {
        stopMedia(screen);
        setScreenStream(null);
        setIsScreenSharing(false);
      };
    } else {
      stopMedia(screenStream);
      setScreenStream(null);
      setIsScreenSharing(false);
    }
  };

  /* =========================
     END INTERVIEW
  ========================= */
  const endInterview = () => {
    stopMedia(cameraStream);
    stopMedia(screenStream);
    setCameraStream(null);
    setScreenStream(null);
    alert("Interview Ended");
  };

  const toggleQuestion = (id) => {
    setOpenQuestionId(openQuestionId === id ? null : id);
  };

  /* =========================
     RENDER
  ========================= */
  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <div style={styles.leftPanel}>
          <div style={styles.header}>
            <h2 style={styles.title}>{title}</h2>
            <span style={styles.badge}>LIVE</span>
            <ScreenRecorder
              cameraStream={cameraStream}
              screenStream={screenStream}
            />
          </div>

          <div style={styles.webcamBox}>
            {cameraStream ? (
              <Webcam stream={cameraStream} />
            ) : (
              <p style={{ color: "#fff" }}>Camera Off</p>
            )}
          </div>

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
          </div>

          <button onClick={endInterview} style={styles.endBtn}>
            End Interview
          </button>
        </div>

        <div style={styles.rightPanel}>
          <h3 style={styles.questionTitle}>
            Technical Interview Questions
          </h3>

          <div style={styles.questionList}>
            {questions.map((q, index) => (
              <div key={q.id} style={styles.questionCard}>
                <div
                  style={styles.questionHeader}
                  onClick={() => toggleQuestion(q.id)}
                >
                  <p style={styles.questionText}>
                    {index + 1}. {q.question}
                  </p>
                  <span style={styles.arrow}>
                    {openQuestionId === q.id ? "▲" : "▼"}
                  </span>
                </div>

                {openQuestionId === q.id && (
                  <div style={styles.dropdownContent}>
                    <p style={styles.description}>{q.description}</p>

                    {q.examples?.map((ex, i) => (
                      <div key={i} style={styles.exampleBox}>
                        <p>
                          <strong>Input:</strong> {ex.input}
                        </p>
                        <p>
                          <strong>Output:</strong> {ex.output}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <DigitalBoard />
        </div>
      </div>
    </div>
  );
};

export default InterviewRound;

const styles = {
  page: {
    minHeight: "100vh",
    width: "100vw",
    background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "30px",
  },

  container: {
    width: "100%",
    maxWidth: "1400px",
    height: "85vh",
    background: "#ffffff",
    borderRadius: "22px",
    display: "flex",
    boxShadow: "0 30px 80px rgba(0,0,0,0.35)",
    overflow: "hidden",
  },

  leftPanel: {
    width: "45%",
    background: "linear-gradient(180deg, #020617, #0f172a)",
    padding: "24px",
    display: "flex",
    flexDirection: "column",
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  title: {
    color: "#fff",
    fontSize: "26px",
    fontWeight: "700",
  },

  badge: {
    background: "#ef4444",
    color: "#fff",
    padding: "6px 16px",
    borderRadius: "20px",
    fontWeight: "700",
  },

  webcamBox: {
    flex: 1,
    margin: "16px 0",
    borderRadius: "18px",
    overflow: "hidden",
    background: "#000",
  },

  controls: {
    display: "flex",
    gap: "14px",
    marginBottom: "14px",
  },

  controlBtn: {
    flex: 1,
    padding: "12px",
    background: "#2563eb",
    color: "#fff",
    border: "none",
    borderRadius: "12px",
    cursor: "pointer",
    fontWeight: "600",
  },

  endBtn: {
    background: "#dc2626",
    color: "#fff",
    border: "none",
    padding: "14px",
    borderRadius: "14px",
    fontWeight: "700",
    cursor: "pointer",
  },

  rightPanel: {
    width: "55%",
    padding: "26px",
    background: "#f8fafc",
    overflowY: "auto",
  },

  questionTitle: {
    fontSize: "24px",
    fontWeight: "800",
    marginBottom: "18px",
  },

  questionList: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },

  questionCard: {
    background: "#fff",
    padding: "16px",
    borderRadius: "16px",
    border: "1px solid #e5e7eb",
  },

  questionHeader: {
    display: "flex",
    justifyContent: "space-between",
    cursor: "pointer",
  },

  questionText: {
    fontWeight: "700",
    fontSize: "16px",
  },

  arrow: {
    fontSize: "18px",
    color: "#2563eb",
    fontWeight: "700",
  },

  dropdownContent: {
    marginTop: "12px",
    borderTop: "1px solid #e5e7eb",
    paddingTop: "12px",
  },

  description: {
    fontSize: "14px",
    color: "#374151",
    marginBottom: "10px",
  },

  exampleBox: {
    background: "#f1f5f9",
    padding: "10px",
    borderRadius: "10px",
    fontSize: "13px",
    marginBottom: "8px",
  },
};
