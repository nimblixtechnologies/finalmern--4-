import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo1.png";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/resumeUpload");
    }, 4000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="home-container">
      <div className="home-card">
        <img src={logo} alt="Logo" className="home-logo" />
      </div>

      <style>{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        body, html {
          width: 100%;
          height: 100%;
        }

        .home-container {
          height: 100vh;
          width: 100vw;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 16px;
        }

        .home-logo {
          width: 500px;
          max-width: 90%;
          height: auto;
        }

        .home-card {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        /* Tablet */
        @media (max-width: 768px) {
          .home-logo {
            width: 200px;
          }
        }

        /* Mobile */
        @media (max-width: 480px) {
          .home-logo {
            width: 120px;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
