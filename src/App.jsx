

// Meeting Link**********************************************
import { BrowserRouter, Routes, Route } from "react-router-dom";
import McqRound from "./pages/McqRound";
import InterviewRound from "./pages/InterviewRound";
import HrInterviewRound from "./pages/HrInterviewRound";
import HrMeetingJoin from "./pages/HrMeetingJoin";
import Home from "./pages/Home";
import ResumeUpload from "./pages/ResumeUpload";
import PaymentPage from "./pages/PaymentPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resumeUpload" element={<ResumeUpload />} />
        <Route path="/paymentPage" element={<PaymentPage />} />
        <Route path="/mcq" element={<McqRound />} />

        {/* Technical Round */}
        <Route
          path="/technical"
          element={<InterviewRound title="Technical Interview Round" />}
        />

        {/* HR Round (Host creates meeting) */}
        <Route path="/hr" element={<HrInterviewRound />} />

        {/* ✅ HR Meeting Join (Candidate / HR joins via link) */}
        <Route path="/hr-meeting/:meetingId" element={<HrMeetingJoin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
