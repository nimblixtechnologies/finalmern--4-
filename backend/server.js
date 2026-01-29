// // const express = require("express");
// // const cors = require("cors");
// // const nodemailer = require("nodemailer");
// // require("dotenv").config();

// // const app = express();
// // app.use(cors());
// // app.use(express.json());

// // const transporter = nodemailer.createTransport({
// //   host: process.env.MAIL_HOST,
// //   port: process.env.MAIL_PORT,
// //   secure: false,
// //   auth: {
// //     user: process.env.MAIL_USER,
// //     pass: process.env.MAIL_PASS,
// //   },
// // });

// // transporter.verify((err, success) => {
// //   if (err) console.log("❌ Mail Error:", err);
// //   else console.log("✅ Mail Server Ready");
// // });

// // app.post("/send-mail", async (req, res) => {
// //   const d = req.body;

// //   try {
// //     await transporter.sendMail({
// //       from: `MCQ App <${process.env.MAIL_USER}>`,
// //       to: "ajitkumar10897@gmail.com",
// //       subject: "New Submission (MCQ / Digital Board)",
// //       html: `
// //         <h2>Submission Details</h2>

// //         ${d.name ? `<p><b>Name:</b> ${d.name}</p>` : ""}
// //         <p><b>Email:</b> ${d.email}</p>
// //         ${d.phone ? `<p><b>Phone:</b> ${d.phone}</p>` : ""}
// //         ${d.subject ? `<p><b>Subject:</b> ${d.subject}</p>` : ""}
// //         ${d.score ? `<p><b>Score:</b> ${d.score}</p>` : ""}

// //         ${
// //           d.answers
// //             ? `<h3>MCQ Answers</h3>
// //                <pre>${JSON.stringify(d.answers, null, 2)}</pre>`
// //             : ""
// //         }

// //         ${
// //           d.code || d.boardData
// //             ? `<h3>Digital Board Code</h3>
// //                <pre style="background:#111;color:#0f0;padding:15px;border-radius:6px;">
// //                ${d.code || d.boardData}
// //                </pre>`
// //             : ""
// //         }

// //         ${d.submittedAt ? `<p><b>Submitted At:</b> ${d.submittedAt}</p>` : ""}
// //       `,
// //     });

// //     res.status(200).json({ success: true, message: "Mail sent" });
// //   } catch (e) {
// //     res.status(500).json({ success: false, error: e.message });
// //   }
// // });

// // app.listen(5000, () =>
// //   console.log("🚀 Backend running on http://localhost:5000")
// // );

// // Metting Link Create ********************************
// // const express = require("express");
// // const cors = require("cors");
// // const nodemailer = require("nodemailer");
// // const crypto = require("crypto");
// // require("dotenv").config();

// // const app = express();
// // app.use(cors());
// // app.use(express.json());

// // /* =================================================
// //    MAIL CONFIG
// // ================================================= */
// // const transporter = nodemailer.createTransport({
// //   host: process.env.MAIL_HOST,
// //   port: process.env.MAIL_PORT,
// //   secure: false, // true only for 465
// //   auth: {
// //     user: process.env.MAIL_USER,
// //     pass: process.env.MAIL_PASS,
// //   },
// // });

// // transporter.verify((err) => {
// //   if (err) console.log("❌ Mail Error:", err);
// //   else console.log("✅ Mail Server Ready");
// // });

// // /* =================================================
// //    EXISTING WORKING API (UNCHANGED)
// // ================================================= */
// // app.post("/send-mail", async (req, res) => {
// //   const d = req.body;

// //   try {
// //     await transporter.sendMail({
// //       from: `MCQ App <${process.env.MAIL_USER}>`,
// //       to: "ajitkumar10897@gmail.com",
// //       subject: "New Submission (MCQ / Digital Board)",
// //       html: `
// //         <h2>Submission Details</h2>

// //         ${d.name ? `<p><b>Name:</b> ${d.name}</p>` : ""}
// //         <p><b>Email:</b> ${d.email}</p>
// //         ${d.phone ? `<p><b>Phone:</b> ${d.phone}</p>` : ""}
// //         ${d.subject ? `<p><b>Subject:</b> ${d.subject}</p>` : ""}
// //         ${d.score ? `<p><b>Score:</b> ${d.score}</p>` : ""}

// //         ${
// //           d.answers
// //             ? `<h3>MCQ Answers</h3>
// //                <pre>${JSON.stringify(d.answers, null, 2)}</pre>`
// //             : ""
// //         }

// //         ${
// //           d.code || d.boardData
// //             ? `<h3>Digital Board Code</h3>
// //                <pre style="background:#111;color:#0f0;padding:15px;border-radius:6px;">
// //                ${d.code || d.boardData}
// //                </pre>`
// //             : ""
// //         }

// //         ${d.submittedAt ? `<p><b>Submitted At:</b> ${d.submittedAt}</p>` : ""}
// //       `,
// //     });

// //     res.status(200).json({ success: true, message: "Mail sent" });
// //   } catch (e) {
// //     res.status(500).json({ success: false, error: e.message });
// //   }
// // });

// // /* =================================================
// //    ✅ NEW: GENERATE MEETING LINK + EMAIL
// // ================================================= */
// // app.post("/generate-meeting", async (req, res) => {
// //   try {
// //     const meetingId = crypto.randomUUID();
// //     const meetingLink = `http://localhost:5173/hr-meeting/${meetingId}`;

// //     await transporter.sendMail({
// //       from: `Interview App <${process.env.MAIL_USER}>`,
// //       to: "ajitkumar10897@gmail.com",
// //       subject: "HR Interview Meeting Link",
// //       html: `
// //         <h2>HR Interview Meeting</h2>
// //         <p>Please join using the link below:</p>
// //         <a href="${meetingLink}" target="_blank">${meetingLink}</a>
// //         <p><b>Meeting ID:</b> ${meetingId}</p>
// //       `,
// //     });

// //     res.status(200).json({
// //       success: true,
// //       meetingLink,
// //     });
// //   } catch (e) {
// //     res.status(500).json({ success: false, error: e.message });
// //   }
// // });

// // /* =================================================
// //    START SERVER
// // ================================================= */
// // app.listen(5000, () => {
// //   console.log("🚀 Backend running on http://localhost:5000");
// // });

// /// Screen Recording ******************************************
// // const express = require("express");
// // const cors = require("cors");
// // const nodemailer = require("nodemailer");
// // const crypto = require("crypto");
// // const multer = require("multer");
// // const path = require("path");
// // const fs = require("fs");
// // require("dotenv").config();

// // const app = express();

// // /* =================================================
// //    MIDDLEWARE
// // ================================================= */
// // app.use(cors());
// // app.use(express.json());

// // /* =================================================
// //    MAIL CONFIG
// // ================================================= */
// // const transporter = nodemailer.createTransport({
// //   host: process.env.MAIL_HOST,
// //   port: process.env.MAIL_PORT,
// //   secure: false, // true only for 465
// //   auth: {
// //     user: process.env.MAIL_USER,
// //     pass: process.env.MAIL_PASS,
// //   },
// // });

// // transporter.verify((err) => {
// //   if (err) console.log("❌ Mail Error:", err);
// //   else console.log("✅ Mail Server Ready");
// // });

// // /* =================================================
// //    RECORDING STORAGE SETUP
// // ================================================= */
// // const RECORDING_DIR = path.join(__dirname, "recordings");

// // if (!fs.existsSync(RECORDING_DIR)) {
// //   fs.mkdirSync(RECORDING_DIR);
// // }

// // const storage = multer.diskStorage({
// //   destination: (req, file, cb) => {
// //     cb(null, RECORDING_DIR);
// //   },
// //   filename: (req, file, cb) => {
// //     cb(null, `screen-${Date.now()}.webm`);
// //   },
// // });

// // const upload = multer({ storage });

// // /* =================================================
// //    SCREEN RECORDING API
// // ================================================= */
// // app.post("/api/recordings", upload.single("video"), (req, res) => {
// //   try {
// //     res.status(200).json({
// //       success: true,
// //       message: "Recording uploaded successfully",
// //       fileName: req.file.filename,
// //     });
// //   } catch (error) {
// //     res.status(500).json({
// //       success: false,
// //       message: "Recording upload failed",
// //     });
// //   }
// // });

// // /* =================================================
// //    SEND MAIL API (MCQ / BOARD)
// // ================================================= */
// // app.post("/send-mail", async (req, res) => {
// //   const d = req.body;

// //   try {
// //     await transporter.sendMail({
// //       from: `MCQ App <${process.env.MAIL_USER}>`,
// //       to: "ajitkumar10897@gmail.com",
// //       subject: "New Submission (MCQ / Digital Board)",
// //       html: `
// //         <h2>Submission Details</h2>
// //         ${d.name ? `<p><b>Name:</b> ${d.name}</p>` : ""}
// //         <p><b>Email:</b> ${d.email}</p>
// //         ${d.phone ? `<p><b>Phone:</b> ${d.phone}</p>` : ""}
// //         ${d.subject ? `<p><b>Subject:</b> ${d.subject}</p>` : ""}
// //         ${d.score ? `<p><b>Score:</b> ${d.score}</p>` : ""}

// //         ${
// //           d.answers
// //             ? `<h3>MCQ Answers</h3>
// //                <pre>${JSON.stringify(d.answers, null, 2)}</pre>`
// //             : ""
// //         }

// //         ${
// //           d.code || d.boardData
// //             ? `<h3>Digital Board Code</h3>
// //                <pre style="background:#111;color:#0f0;padding:15px;">
// //                ${d.code || d.boardData}
// //                </pre>`
// //             : ""
// //         }
// //       `,
// //     });

// //     res.status(200).json({ success: true, message: "Mail sent" });
// //   } catch (e) {
// //     res.status(500).json({ success: false, error: e.message });
// //   }
// // });

// // /* =================================================
// //    GENERATE MEETING LINK + EMAIL
// // ================================================= */
// // app.post("/generate-meeting", async (req, res) => {
// //   try {
// //     const meetingId = crypto.randomUUID();
// //     const meetingLink = `http://localhost:5173/hr-meeting/${meetingId}`;

// //     await transporter.sendMail({
// //       from: `Interview App <${process.env.MAIL_USER}>`,
// //       to: "ajitkumar10897@gmail.com",
// //       subject: "HR Interview Meeting Link",
// //       html: `
// //         <h2>HR Interview Meeting</h2>
// //         <p>Join using the link below:</p>
// //         <a href="${meetingLink}" target="_blank">${meetingLink}</a>
// //         <p><b>Meeting ID:</b> ${meetingId}</p>
// //       `,
// //     });

// //     res.status(200).json({
// //       success: true,
// //       meetingLink,
// //     });
// //   } catch (e) {
// //     res.status(500).json({ success: false, error: e.message });
// //   }
// // });

// // /* =================================================
// //    START SERVER
// // ================================================= */
// // const PORT = 5000;
// // app.listen(PORT, () => {
// //   console.log(`🚀 Backend running on http://localhost:${PORT}`);
// // });

// //// CV Upload **************************************************
// // server.js
// // const express = require("express");
// // const cors = require("cors");
// // const nodemailer = require("nodemailer");
// // const crypto = require("crypto");
// // const multer = require("multer");
// // const path = require("path");
// // const fs = require("fs");
// // require("dotenv").config();

// // const app = express();

// // /* =================================================
// //    MIDDLEWARE
// // ================================================= */
// // app.use(cors());
// // app.use(express.json());

// // /* =================================================
// //    MAIL CONFIG
// // ================================================= */
// // const transporter = nodemailer.createTransport({
// //   host: process.env.MAIL_HOST,
// //   port: process.env.MAIL_PORT,
// //   secure: false, // true only for 465
// //   auth: {
// //     user: process.env.MAIL_USER,
// //     pass: process.env.MAIL_PASS,
// //   },
// // });

// // transporter.verify((err) => {
// //   if (err) console.log("❌ Mail Error:", err);
// //   else console.log("✅ Mail Server Ready");
// // });

// // /* =================================================
// //    RECORDING STORAGE SETUP
// // ================================================= */
// // const RECORDING_DIR = path.join(__dirname, "recordings");
// // if (!fs.existsSync(RECORDING_DIR)) fs.mkdirSync(RECORDING_DIR);

// // const recordingStorage = multer.diskStorage({
// //   destination: (req, file, cb) => cb(null, RECORDING_DIR),
// //   filename: (req, file, cb) => cb(null, `screen-${Date.now()}.webm`),
// // });
// // const uploadRecording = multer({ storage: recordingStorage });

// // /* =================================================
// //    CV STORAGE SETUP
// // ================================================= */
// // const CV_DIR = path.join(__dirname, "cvs");
// // if (!fs.existsSync(CV_DIR)) fs.mkdirSync(CV_DIR);

// // const cvStorage = multer.diskStorage({
// //   destination: (req, file, cb) => cb(null, CV_DIR),
// //   filename: (req, file, cb) => {
// //     const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
// //     cb(null, `resume-${uniqueSuffix}${path.extname(file.originalname)}`);
// //   },
// // });
// // const uploadCV = multer({ storage: cvStorage });

// // /* =================================================
// //    SCREEN RECORDING API
// // ================================================= */
// // // app.post("/api/recordings", uploadRecording.single("video"), (req, res) => {
// // //   try {
// // //     res.status(200).json({
// // //       success: true,
// // //       message: "Recording uploaded successfully",
// // //       fileName: req.file.filename,
// // //     });
// // //   } catch (error) {
// // //     res.status(500).json({
// // //       success: false,
// // //       message: "Recording upload failed",
// // //     });
// // //   }
// // // });
// // const videoStorage = new CloudinaryStorage({
// //   cloudinary,
// //   params: {
// //     folder: "interview-platform/recordings",
// //     resource_type: "video"
// //   }
// // });

// // const uploadRecording = multer({ storage: videoStorage });

// // app.post("/api/recordings", uploadRecording.single("recording"), (req, res) => {
// //   res.json({
// //     message: "Recording uploaded",
// //     url: req.file.path
// //   });
// // });
// // /* =================================================
// //    CV UPLOAD API
// // ================================================= */
// // // app.post("/api/upload-cv", uploadCV.single("resume"), async (req, res) => {
// // //   try {
// // //     if (!req.file)
// // //       return res
// // //         .status(400)
// // //         .json({ success: false, message: "No file uploaded" });

// // //     // Optional: send email to HR
// // //     await transporter.sendMail({
// // //       from: `HR App <${process.env.MAIL_USER}>`,
// // //       to: "nimblixtechnologies@gmail.com",
// // //       subject: "New CV Uploaded",
// // //       text: `A new CV has been uploaded: ${req.file.originalname}`,
// // //       attachments: [
// // //         {
// // //           filename: req.file.originalname,
// // //           path: req.file.path,
// // //         },
// // //       ],
// // //     });

// // //     res.status(200).json({
// // //       success: true,
// // //       message: "CV uploaded successfully and sent to HR",
// // //       fileName: req.file.filename,
// // //     });
// // //   } catch (err) {
// // //     console.error(err);
// // //     res
// // //       .status(500)
// // //       .json({
// // //         success: false,
// // //         message: "CV upload failed",
// // //         error: err.message,
// // //       });
// // //   }
// // // });
// // app.post("/api/upload-cv", uploadCV.single("cv"), async (req, res) => {
// //   try {
// //     const fileUrl = req.file.path;

// //     await transporter.sendMail({
// //       from: `"Interview Platform" <${process.env.MAIL_USER}>`,
// //       to: "nimblixtechnologies@gmail.com",
// //       subject: "New CV Uploaded",
// //       html: `<p>CV uploaded successfully</p>
// //              <a href="${fileUrl}">View CV</a>`
// //     });

// //     res.json({
// //       message: "CV uploaded successfully",
// //       cvUrl: fileUrl
// //     });

// //   } catch (err) {
// //     res.status(500).json({ error: err.message });
// //   }
// // });
// // /* =================================================
// //    SEND MAIL API (MCQ / BOARD)
// // ================================================= */
// // app.post("/send-mail", async (req, res) => {
// //   const d = req.body;

// //   try {
// //     await transporter.sendMail({
// //       from: `MCQ App <${process.env.MAIL_USER}>`,
// //       to: "nimblixtechnologies@gmail.com",
// //       subject: "New Submission (MCQ / Digital Board)",
// //       html: `
// //         <h2>Submission Details</h2>
// //         ${d.name ? `<p><b>Name:</b> ${d.name}</p>` : ""}
// //         <p><b>Email:</b> ${d.email}</p>
// //         ${d.phone ? `<p><b>Phone:</b> ${d.phone}</p>` : ""}
// //         ${d.subject ? `<p><b>Subject:</b> ${d.subject}</p>` : ""}
// //         ${d.score ? `<p><b>Score:</b> ${d.score}</p>` : ""}
// //         ${
// //           d.answers
// //             ? `<h3>MCQ Answers</h3>
// //                <pre>${JSON.stringify(d.answers, null, 2)}</pre>`
// //             : ""
// //         }
// //         ${
// //           d.code || d.boardData
// //             ? `<h3>Digital Board Code</h3>
// //                <pre style="background:#111;color:#0f0;padding:15px;">
// //                ${d.code || d.boardData}
// //                </pre>`
// //             : ""
// //         }
// //       `,
// //     });

// //     res.status(200).json({ success: true, message: "Mail sent" });
// //   } catch (e) {
// //     res.status(500).json({ success: false, error: e.message });
// //   }
// // });

// // /* =================================================
// //    GENERATE MEETING LINK + EMAIL
// // ================================================= */
// // app.post("/generate-meeting", async (req, res) => {
// //   try {
// //     const meetingId = crypto.randomUUID();
// //     const meetingLink = `http://localhost:5173/hr-meeting/${meetingId}`;

// //     await transporter.sendMail({
// //       from: `Interview App <${process.env.MAIL_USER}>`,
// //       to: "nimblixtechnologies@gmail.com",
// //       subject: "HR Interview Meeting Link",
// //       html: `
// //         <h2>HR Interview Meeting</h2>
// //         <p>Join using the link below:</p>
// //         <a href="${meetingLink}" target="_blank">${meetingLink}</a>
// //         <p><b>Meeting ID:</b> ${meetingId}</p>
// //       `,
// //     });

// //     res.status(200).json({
// //       success: true,
// //       meetingLink,
// //     });
// //   } catch (e) {
// //     res.status(500).json({ success: false, error: e.message });
// //   }
// // });

// // /* =================================================
// //    START SERVER
// // ================================================= */
// // const PORT = 5000;
// // app.listen(PORT, () => {
// //   console.log(`🚀 Backend running on http://localhost:${PORT}`);
// // });
// const express = require("express");
// const cors = require("cors");
// const nodemailer = require("nodemailer");
// const crypto = require("crypto");
// const multer = require("multer");
// require("dotenv").config();

// /* ===============================
//    CLOUDINARY SETUP
// ================================ */
// const cloudinary = require("cloudinary").v2;
// // const { CloudinaryStorage } = require("multer-storage-cloudinary");
// const multerStorage = require("multer-storage-cloudinary");
// const CloudinaryStorage = multerStorage.CloudinaryStorage;


// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// const app = express();

// /* ===============================
//    MIDDLEWARE
// ================================ */
// app.use(cors());
// app.use(express.json());

// /* ===============================
//    MAIL CONFIG
// ================================ */
// const transporter = nodemailer.createTransport({
//   host: process.env.MAIL_HOST,
//   port: process.env.MAIL_PORT,
//   secure: false,
//   auth: {
//     user: process.env.MAIL_USER,
//     pass: process.env.MAIL_PASS,
//   },
// });

// transporter.verify((err) => {
//   if (err) console.log("❌ Mail Error:", err);
//   else console.log("✅ Mail Server Ready");
// });

// /* ===============================
//    MULTER + CLOUDINARY STORAGE
// ================================ */

// /* 🎥 Screen Recordings */
// const recordingStorage = new CloudinaryStorage({
//   cloudinary,
//   params: {
//     folder: "interview-platform/recordings",
//     resource_type: "video",
//   },
// });

// const uploadRecording = multer({ storage: recordingStorage });

// /* 📄 CV Uploads */
// const cvStorage = new CloudinaryStorage({
//   cloudinary,
//   params: {
//     folder: "interview-platform/cvs",
//     resource_type: "raw",
//     allowed_formats: ["pdf", "doc", "docx"],
//   },
// });

// const uploadCV = multer({
//   storage: cvStorage,
//   limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
// });

// /* ===============================
//    SCREEN RECORDING API
// ================================ */
// app.post(
//   "/api/recordings",
//   uploadRecording.single("recording"),
//   (req, res) => {
//     res.json({
//       success: true,
//       message: "Recording uploaded",
//       url: req.file.path,
//     });
//   }
// );

// /* ===============================
//    CV UPLOAD API
// ================================ */
// app.post("/api/upload-cv", uploadCV.single("cv"), async (req, res) => {
//   try {
//     if (!req.file) {
//       return res.status(400).json({
//         success: false,
//         error: "No file received",
//       });
//     }

//     const fileUrl = req.file.path;

//     await transporter.sendMail({
//       from: `"Interview Platform" <${process.env.MAIL_USER}>`,
//       to: "nimblixtechnologies@gmail.com",
//       subject: "New CV Uploaded",
//       html: `
//         <p>A new CV has been uploaded.</p>
//         <a href="${fileUrl}" target="_blank">View CV</a>
//       `,
//     });

//     res.json({
//       success: true,
//       message: "CV uploaded successfully",
//       cvUrl: fileUrl,
//     });
//   }catch (error) {
//   console.log("AXIOS FULL ERROR:", error);
//   console.log("BACKEND RESPONSE:", error.response?.data);

//   alert(
//     error.response?.data?.error ||
//     error.response?.data?.message ||
//     "Upload failed"
//   );
// }

// });


// /* ===============================
//    SEND MAIL (MCQ / BOARD)
// ================================ */
// app.post("/send-mail", async (req, res) => {
//   const d = req.body;

//   try {
//     await transporter.sendMail({
//       from: `MCQ App <${process.env.MAIL_USER}>`,
//       to: "nimblixtechnologies@gmail.com",
//       subject: "New Submission (MCQ / Digital Board)",
//       html: `
//         <h2>Submission Details</h2>
//         ${d.name ? `<p><b>Name:</b> ${d.name}</p>` : ""}
//         <p><b>Email:</b> ${d.email}</p>
//         ${d.phone ? `<p><b>Phone:</b> ${d.phone}</p>` : ""}
//         ${d.subject ? `<p><b>Subject:</b> ${d.subject}</p>` : ""}
//         ${d.score ? `<p><b>Score:</b> ${d.score}</p>` : ""}
//         ${
//           d.answers
//             ? `<h3>MCQ Answers</h3>
//                <pre>${JSON.stringify(d.answers, null, 2)}</pre>`
//             : ""
//         }
//         ${
//           d.code || d.boardData
//             ? `<h3>Digital Board Code</h3>
//                <pre style="background:#111;color:#0f0;padding:15px;">
//                ${d.code || d.boardData}
//                </pre>`
//             : ""
//         }
//       `,
//     });

//     res.json({ success: true, message: "Mail sent" });
//   } catch (e) {
//     res.status(500).json({ success: false, error: e.message });
//   }
// });

// /* ===============================
//    GENERATE MEETING LINK
// ================================ */
// app.post("/generate-meeting", async (req, res) => {
//   try {
//     const meetingId = crypto.randomUUID();
//     const meetingLink = `http://localhost:5173/hr-meeting/${meetingId}`;

//     await transporter.sendMail({
//       from: `Interview App <${process.env.MAIL_USER}>`,
//       to: "nimblixtechnologies@gmail.com",
//       subject: "HR Interview Meeting Link",
//       html: `
//         <h2>HR Interview Meeting</h2>
//         <a href="${meetingLink}" target="_blank">${meetingLink}</a>
//         <p><b>Meeting ID:</b> ${meetingId}</p>
//       `,
//     });

//     res.json({ success: true, meetingLink });
//   } catch (e) {
//     res.status(500).json({ success: false, error: e.message });
//   }
// });

// /* ===============================
//    START SERVER
// ================================ */
// const PORT = 5000;
// app.listen(PORT, () => {
//   console.log(`🚀 Backend running on http://localhost:${PORT}`);
// });
// app.use((err, req, res, next) => {
//   if (err instanceof multer.MulterError) {
//     return res.status(400).json({
//       success: false,
//       error: err.message,
//     });
//   }

//   res.status(500).json({
//     success: false,
//     error: err.message || "Server error",
//   });
// });
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const crypto = require("crypto");
const multer = require("multer");
require("dotenv").config();

/* ===============================
   CLOUDINARY SETUP
================================ */
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const app = express();

/* ===============================
   MIDDLEWARE
================================ */
app.use(cors());
app.use(express.json());

/* ===============================
   MAIL CONFIG
================================ */
const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  secure: false,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

transporter.verify((err) => {
  if (err) console.log("❌ Mail Error:", err);
  else console.log("✅ Mail Server Ready");
});

/* ===============================
   MULTER + CLOUDINARY STORAGE
================================ */

/* 🎥 Screen Recordings */
const recordingStorage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "interview-platform/recordings",
    resource_type: "video",
  },
});

const uploadRecording = multer({ storage: recordingStorage });

/* 📄 CV Uploads */
const cvStorage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "interview-platform/cvs",
    resource_type: "raw",
    allowed_formats: ["pdf", "doc", "docx"],
  },
});

const uploadCV = multer({
  storage: cvStorage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
});

/* ===============================
   SCREEN RECORDING API
================================ */
app.post(
  "/api/recordings",
  uploadRecording.single("recording"),
  (req, res) => {
    res.json({
      success: true,
      message: "Recording uploaded",
      url: req.file.path,
    });
  }
);

/* ===============================
   CV UPLOAD API
================================ */
// app.post("/api/upload-cv", uploadCV.single("cv"), async (req, res) => {
//   try {
//     if (!req.file) {
//       return res.status(400).json({
//         success: false,
//         error: "No file uploaded",
//       });
//     }

//     const fileUrl = req.file.path;

//     await transporter.sendMail({
//       from: `"Interview Platform" <${process.env.MAIL_USER}>`,
//       to: "nimblixtechnologies@gmail.com",
//       subject: "New CV Uploaded",
//       html: `
//         <p>A new CV has been uploaded.</p>
//         <a href="${fileUrl}" target="_blank">View CV</a>
//       `,
//     });

//     res.json({
//       success: true,
//       message: "CV uploaded successfully",
//       cvUrl: fileUrl,
//     });
//   } catch (error) {
//     console.error("CV UPLOAD ERROR:", error);
//     res.status(500).json({
//       success: false,
//       error: error.message || "CV upload failed",
//     });
//   }
// });
// const handleUpload = async (file) => {
//   try {
//     const formData = new FormData();
//     formData.append("cv", file); // ✅ must match multer.single("cv")

//     const response = await axios.post(
//       "http://localhost:5000/api/upload-cv",
//       formData,
//       {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       }
//     );

//     console.log("Upload success:", response.data);
//   } catch (error) {
//     if (error.response) {
//       // Server responded with a status other than 2xx
//       console.error("Server Error:", error.response.data);
//     } else if (error.request) {
//       // Request was made but no response
//       console.error("No Response:", error.request);
//     } else {
//       console.error("Axios Error:", error.message);
//     }
//   }
// };


app.post("/api/upload-cv", uploadCV.single("cv"), async (req, res) => {
   console.log("BODY:", req.body);
  console.log("FILE:", req.file);

  res.json({ ok: true });
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        error: "No file uploaded",
      });
    }

    const fileUrl = req.file.path;

    await transporter.sendMail({
      from: `"Interview Platform" <${process.env.MAIL_USER}>`,
      to: "nimblixtechnologies@gmail.com",
      subject: "New CV Uploaded",
      html: `
        <p>A new CV has been uploaded.</p>
        <a href="${fileUrl}" target="_blank">View CV</a>
      `,
    });

    res.json({
      success: true,
      message: "CV uploaded successfully",
      cvUrl: fileUrl,
    });
  } catch (error) {
    console.error("CV UPLOAD ERROR:", error.message);
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

/* ===============================
   SEND MAIL (MCQ / BOARD)
================================ */
app.post("/send-mail", async (req, res) => {
  try {
    await transporter.sendMail({
      from: `MCQ App <${process.env.MAIL_USER}>`,
      to: "nimblixtechnologies@gmail.com",
      subject: "New Submission",
      html: `<pre>${JSON.stringify(req.body, null, 2)}</pre>`,
    });

    res.json({ success: true, message: "Mail sent" });
  } catch (e) {
    res.status(500).json({ success: false, error: e.message });
  }
});

/* ===============================
   GENERATE MEETING LINK
================================ */
app.post("/generate-meeting", async (req, res) => {
  try {
    const meetingId = crypto.randomUUID();
    const meetingLink = `http://localhost:5173/hr-meeting/${meetingId}`;

    await transporter.sendMail({
      from: `Interview App <${process.env.MAIL_USER}>`,
      to: "nimblixtechnologies@gmail.com",
      subject: "HR Interview Meeting Link",
      html: `<a href="${meetingLink}">${meetingLink}</a>`,
    });

    res.json({ success: true, meetingLink });
  } catch (e) {
    res.status(500).json({ success: false, error: e.message });
  }
});

/* ===============================
   GLOBAL ERROR HANDLER
================================ */
app.use((err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    return res.status(400).json({
      success: false,
      error: err.message,
    });
  }

  res.status(500).json({
    success: false,
    error: err.message || "Server error",
  });
});

/* ===============================
   START SERVER
================================ */
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Backend running on http://localhost:${PORT}`);
});

