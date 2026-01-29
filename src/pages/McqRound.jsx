import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import mcqData from "../data/mcqData";
import ScreenRecorder from "./ScreenRecorder";

const McqRound = () => {
  const navigate = useNavigate();
  const [subject, setSubject] = useState("python");
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(10 * 60);
  const videoRef = useRef(null);

  const currentMCQs = mcqData[subject] || [];

  useEffect(() => {
    let streamInstance = null;
    const startVideo = async () => {
      try {
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
          const stream = await navigator.mediaDevices.getUserMedia({
            video: true,
          });
          streamInstance = stream;
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }
        }
      } catch (err) {
        console.error("Proctoring Camera Access Denied:", err);
      }
    };
    startVideo();

    return () => {
      if (streamInstance) {
        streamInstance.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);
  useEffect(() => {
    if (timeLeft <= 0) {
      alert("⏰ Time is up! Assessment auto-submitted.");
      handleSubmit();
      return;
    }
    const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const m = String(Math.floor(seconds / 60)).padStart(2, "0");
    const s = String(seconds % 60).padStart(2, "0");
    return `${m}:${s}`;
  };
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });
  const handleOptionChange = (qid, option) =>
    setAnswers({ ...answers, [qid]: option });
  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.phone) {
      alert("❌ Required: Please fill in candidate details.");
      return;
    }

    let score = 0;
    currentMCQs.forEach((q) => {
      if (answers[q.id] === q.correctAnswer) score++;
    });

    const payload = {
      name: form.name,
      email: form.email,
      phone: form.phone,
      subject: subject.toUpperCase(),
      score,
      answers,
      submittedAt: new Date().toLocaleString(),
    };

    try {
      // const res = await fetch("http://localhost:5000/send-mail", {
      const res = await fetch( "https://finalmern-backend.onrender.com/send-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Mail failed");
      alert(`✅ Assessment Submitted! | Email Sent.`);
      setTimeout(() => {
        navigate("/technical");
      }, 500);

      setAnswers({});
      setForm({ name: "", email: "", phone: "" });
    } catch (err) {
      console.error(err);
      alert(
        "❌ Submission failed. Score recorded, but email could not be sent."
      );
    }
  };

  return (
    <div style={pageStyles}>
      <div style={cameraCard}>
        <video ref={videoRef} autoPlay playsInline muted style={videoStyles} />
        <div style={cameraStatus}>
          <span style={recordingDot}></span> LIVE PROCTORING
        </div>
      </div>

      <div style={contentArea}>
        <header style={headerStyles}>
          <div style={logoArea}>
            <div style={logoIcon}>N</div>
            <h2 style={brandTitle}>
              Nimblix Talent Connect | Online Assessment
            </h2>
          </div>
          <ScreenRecorder />
        </header>

        <div style={dashboardStrip}>
          <div style={inputGroup}>
            <label style={labelStyle}>SELECT DOMAIN</label>
            <select
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              style={selectStyle}
            >
              {Object.keys(mcqData).map((subj) => (
                <option key={subj} value={subj}>
                  {subj.toUpperCase()}
                </option>
              ))}
            </select>
          </div>
          <div style={{ display: "flex", gap: "40px", alignItems: "center" }}>
            <div style={{ textAlign: "right" }}>
              <span style={timerLabel}>ACTIVE DOMAIN</span>
              <span style={domainBadge}>{subject.toUpperCase()}</span>
            </div>
            <div style={timerDisplay}>
              <span style={timerLabel}>REMAINING TIME</span>
              <span style={timerValue}>{formatTime(timeLeft)}</span>
            </div>
          </div>
        </div>
        <section style={card}>
          <h3 style={sectionTitle}>Candidate Registration</h3>
          <div style={gridInputs}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              style={inputStyle}
            />
            <input
              type="email"
              name="email"
              placeholder="Professional Email"
              value={form.email}
              onChange={handleChange}
              style={inputStyle}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              style={inputStyle}
            />
          </div>
        </section>
        {currentMCQs.map((q, index) => (
          <div key={q.id} style={card}>
            <p style={questionText}>
              <span style={qNum}>0{index + 1}.</span> {q.question}
            </p>
            <div style={optionsList}>
              {["A", "B", "C", "D"].map((opt) => (
                <label
                  key={opt}
                  style={answers[q.id] === opt ? activeOption : optionStyle}
                >
                  <input
                    type="radio"
                    name={`q-${q.id}`}
                    checked={answers[q.id] === opt}
                    onChange={() => handleOptionChange(q.id, opt)}
                    style={{ cursor: "pointer" }}
                  />
                  <span style={{ marginLeft: "15px" }}>
                    {q[`option${opt}`]}
                  </span>
                </label>
              ))}
            </div>
          </div>
        ))}

        <button onClick={handleSubmit} style={submitBtn}>
          Submit Quiz
        </button>
      </div>
    </div>
  );
};

const pageStyles = {
  width: "100vw",
  minHeight: "100vh",
  boxSizing: "border-box",
  margin: 0,
  padding: "40px",
  backgroundImage: `
    radial-gradient(#d1d9e0 0.8px, transparent 0.8px),
    linear-gradient(180deg, #b1d7fd 0%, #5797f8ff 100%)
  `,
  backgroundAttachment: "fixed",
};
const domainBadge = {
  display: "block",
  fontSize: "18px",
  color: "#1a237e",
  fontWeight: "800",
  letterSpacing: "1px",
  background: "#e8eaf6",
  padding: "4px 12px",
  borderRadius: "6px",
  marginTop: "2px",
  borderRight: "4px solid #1a237e",
};

const cameraCard = {
  position: "fixed",
  top: "60px",
  left: "40px",
  width: "280px",
  backgroundColor: "#1a237e",
  borderRadius: "16px",
  overflow: "hidden",
  boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
  border: "4px solid #fff",
  zIndex: 1000,
};

const videoStyles = {
  width: "100%",
  height: "210px",
  objectFit: "cover",
  backgroundColor: "#000",
};

const cameraStatus = {
  padding: "10px",
  color: "#fff",
  fontSize: "11px",
  fontWeight: "bold",
  textAlign: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "8px",
};

const recordingDot = {
  height: "8px",
  width: "8px",
  backgroundColor: "#ff5252",
  borderRadius: "50%",
  display: "inline-block",
};

const contentArea = { maxWidth: "850px", marginLeft: "340px" };

const headerStyles = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "30px",
};

const logoArea = { display: "flex", alignItems: "center", gap: "15px" };

const logoIcon = {
  backgroundColor: "#1a237e",
  color: "#fff",
  width: "40px",
  height: "40px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "8px",
  fontWeight: "bold",
  fontSize: "20px",
};

const brandTitle = {
  fontSize: "22px",
  color: "#1a237e",
  margin: 0,
};

const dashboardStrip = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "#fff",
  padding: "20px 30px",
  borderRadius: "16px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.03)",
  marginBottom: "30px",
};

const timerDisplay = { textAlign: "right" };
const timerLabel = {
  display: "block",
  fontSize: "10px",
  color: "#90a4ae",
  fontWeight: "bold",
};
const timerValue = {
  fontSize: "24px",
  color: "#d32f2f",
  fontWeight: "700",
  fontFamily: "monospace",
};

const card = {
  backgroundColor: "#fff",
  borderRadius: "16px",
  padding: "30px",
  marginBottom: "15px",
  boxShadow: "0 4px 20px rgba(0,0,0,0.04)",
  border: "1px solid #e3e8ee",
};

const sectionTitle = {
  marginTop: 0,
  marginBottom: "20px",
  fontSize: "16px",
  color: "#455a64",
};

const gridInputs = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  gap: "15px",
};

const inputStyle = {
  padding: "14px",
  borderRadius: "8px",
  border: "1px solid #cfd8dc",
  fontSize: "14px",
};

const questionText = {
  fontSize: "19px",
  color: "#263238",
  fontWeight: "600",
  marginBottom: "20px",
};
const qNum = { color: "#1a237e", marginRight: "10px" };

const optionsList = { display: "flex", flexDirection: "column", gap: "12px" };

const optionStyle = {
  display: "flex",
  alignItems: "center",
  padding: "16px",
  borderRadius: "10px",
  border: "1px solid #eceff1",
  cursor: "pointer",
  transition: "all 0.2s ease",
};

const activeOption = {
  ...optionStyle,
  backgroundColor: "#e8eaf6",
  borderColor: "#1a237e",
  color: "#1a237e",
  fontWeight: "600",
};

const submitBtn = {
  width: "100%",
  padding: "18px",
  backgroundColor: "#1a237e",
  color: "#fff",
  fontSize: "16px",
  fontWeight: "bold",
  border: "none",
  borderRadius: "12px",
  cursor: "pointer",
  boxShadow: "0 10px 20px rgba(26, 35, 126, 0.2)",
  marginTop: "1px",
};

const inputGroup = { display: "flex", flexDirection: "column", gap: "5px" };
const labelStyle = { fontSize: "10px", fontWeight: "bold", color: "#90a4ae" };
const selectStyle = {
  padding: "8px 12px",
  borderRadius: "6px",
  border: "1px solid #cfd8dc",
};

export default McqRound;
