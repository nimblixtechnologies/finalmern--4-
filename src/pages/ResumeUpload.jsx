
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function ResumeUpload() {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setMessage("");
  };

//   const handleUpload = async () => {
//     if (!file) {
//       setMessage("Please select a file first.");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("cv", file); // MUST match backend: uploadCV.single("cv")

//     try {
//       setUploading(true);

//       // const res = await axios.post(
//       //   "http://localhost:5000/api/upload-cv",
//       //   formData
//       // );
// // const API = import.meta.env.VITE_API_BASE_URL;

// // await axios.post(
// //   `${API}/api/upload-cv`,
// //   formData
// // );
// axios.post(
//   "https://finalmern-backend.onrender.com/api/upload-cv",
//   formData
// );

//       setMessage(res.data.message || "Upload successful!");

//       setTimeout(() => {
//         navigate("/paymentPage");
//       }, 1500);
//     } catch (err) {
//       console.error(err.response?.data || err);
//       setMessage(
//         err.response?.data?.error || "Failed to upload CV. Try again."
//       );
//     } finally {
//       setUploading(false);
//       setFile(null);
//     }
//   };
const handleUpload = async () => {
  if (!file) {
    setMessage("Please select a file first");
    return;
  }

  const formData = new FormData();
  formData.append("cv", file); // MUST match multer.single("cv")

  try {
    setUploading(true);

    const res = await axios.post(
      "https://finalmern-backend.onrender.com/api/upload-cv",
      formData
    );

    // setMessage("Upload successful");
    // console.log(res.data);
 setMessage(res.data.message);
      setTimeout(() => {
        navigate("/paymentPage");
      }, 1500);
  } catch (err) {
    console.error(err);
    setMessage(
      err.response?.data?.error || "Upload failed"
    );
  } finally {
    setUploading(false);
  }
};

  return (
    <>
      <style>{`
        * { box-sizing: border-box; font-family: "Inter", sans-serif; }
        html, body, #root { width: 100%; height: 100%; margin: 0; }
        .page { width: 100vw; min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 20px; background: linear-gradient(to bottom right, #e8f7fb, #bfe9f1); }
        .modal { width: 100%; max-width: 520px; background: #fff; border-radius: 16px; padding: 30px 24px; box-shadow: 0 20px 50px rgba(0,0,0,0.15); position: relative; display: flex; flex-direction: column; align-items: center; }
        .close { position: absolute; top: 14px; right: 16px; font-size: 18px; cursor: pointer; color: #666; }
        .title { font-size: 22px; font-weight: 600; margin-bottom: 6px; text-align: center; }
        .subtitle { font-size: 14px; color: #666; margin-bottom: 20px; text-align: center; }
        .upload-box { border: 2px dashed #d9d9d9; border-radius: 12px; padding: 40px 20px; text-align: center; cursor: pointer; transition: 0.3s; width: 100%; }
        .upload-box:hover { background: #f9fefe; border-color: #4bb6c1; }
        .upload-icon { font-size: 36px; margin-bottom: 12px; color: #4bb6c1; }
        .upload-text { font-size: 16px; font-weight: 500; }
        .upload-subtext { font-size: 13px; color: #777; margin-top: 6px; }
        .info { display: flex; align-items: center; gap: 10px; margin-top: 16px; font-size: 14px; color: #444; }
        .check { width: 20px; height: 20px; border-radius: 50%; background: #4caf50; display: flex; align-items: center; justify-content: center; color: #fff; font-size: 14px; }
        .btn { margin-top: 20px; width: 100%; border: none; padding: 14px; font-size: 16px; font-weight: 600; border-radius: 12px; background: linear-gradient(135deg, #39a9b7, #4ecdc4); color: white; cursor: pointer; transition: 0.3s; }
        .btn:hover { opacity: 0.9; }
        .btn:disabled { opacity: 0.6; cursor: not-allowed; }
        .message { margin-top: 15px; font-size: 14px; color: #4bb6c1; text-align: center; }
        input { display: none; }
      `}</style>

      <div className="page">
        <div className="modal">
          <div className="close" onClick={() => setFile(null)}>✕</div>

          <div className="title">Upload your Resume</div>
          <div className="subtitle">
            Help us get to know you better by sharing your CV.
          </div>

          <label className="upload-box">
            <div className="upload-icon">☁️</div>
            <div className="upload-text">
              {file ? file.name : "Drag your resume here or click to upload"}
            </div>
            <div className="upload-subtext">
              Acceptable file types: PDF, DOCX (5MB max)
            </div>

            {/* ✅ FILE INPUT (already correct) */}
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
            />
          </label>

          <div className="info">
            <div className="check">✓</div>
            <span>Your CV will be automatically sent to the HR team.</span>
          </div>

          <button className="btn" onClick={handleUpload} disabled={uploading}>
            {uploading ? "Uploading..." : "Upload & Send to HR"}
          </button>

          {message && <div className="message">{message}</div>}
        </div>
      </div>
    </>
  );
}
