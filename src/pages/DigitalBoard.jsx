import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./DigitalBoard.css";

const DigitalBoard = () => {
  const boardRef = useRef(null);
  const navigate = useNavigate();
  const [code, setCode] = useState("");
  const [form, setForm] = useState({ email: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async () => {
    if (!form.email) {
      alert("❌ Please enter email address");
      return;
    }

    if (!code.trim()) {
      alert("❌ Please write code on the digital board");
      return;
    }

    const payload = {
      email: form.email,
      code: code,
      boardData: code,
      submittedAt: new Date().toLocaleString(),
    };

    try {
      setLoading(true);

      // const res = await fetch("http://localhost:5000/send-mail", {
        const res = await fetch("https://finalmern-backend.onrender.com/api/send-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Mail failed");

      alert("✅ Code submitted | 📧 Email sent successfully");

      setForm({ email: "" });
      setCode("");
      setTimeout(() => {
        navigate("/hr");
      }, 500);
    } catch (err) {
      console.error(err);
      alert("❌ Email sending failed");
    } finally {
      setLoading(false);
    }
  };

  const clearBoard = () => setCode("");

  return (
    <div className="board-container">
      <h2 className="title">Programming Digital Board</h2>

      <div className="toolbar">
        <input
          type="email"
          name="email"
          placeholder="Enter email to receive code"
          value={form.email}
          onChange={handleChange}
          className="email-input"
        />

        <button onClick={handleSubmit} disabled={loading}>
          {loading ? "Sending..." : "Save & Send Email"}
        </button>

        <button className="clear-btn" onClick={clearBoard}>
          Clear
        </button>
      </div>

      <div ref={boardRef} className="programming-board">
        <textarea
          className="code-editor"
          placeholder="// Write your code here..."
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
      </div>
    </div>
  );
};

export default DigitalBoard;
