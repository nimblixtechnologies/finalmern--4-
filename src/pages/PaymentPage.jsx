import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PaymentPage = () => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (step === 3) {
      const timer = setTimeout(() => {
        navigate("/mcq");
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [step, navigate]);

  const handlePayment = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep(3);
    }, 2000);
  };

  const styles = {
    container: {
      width: "100vw",
      height: "100vh",
      backgroundColor: "#fff",
      fontFamily: '"Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      display: "flex",
      flexDirection: "column",
    },
    header: {
      backgroundColor: "#3395ff",
      color: "#fff",
      padding: "40px 20px",
      textAlign: "center",
    },
    contentWrapper: {
      flex: 1,
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
      padding: "40px 20px",
      backgroundColor: "#f4f7f9",
    },
    formCard: {
      width: "100%",
      maxWidth: "600px",
      backgroundColor: "#fff",
      borderRadius: "12px",
      boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
      padding: "30px",
    },
    priceTag: {
      fontSize: "32px",
      fontWeight: "bold",
      margin: "10px 0",
      color: "#2d3436",
    },
    inputGroup: {
      marginBottom: "20px",
    },
    label: {
      display: "block",
      fontSize: "13px",
      color: "#636e72",
      marginBottom: "8px",
      fontWeight: "600",
      textTransform: "uppercase",
    },
    input: {
      width: "100%",
      padding: "14px",
      border: "1px solid #dfe6e9",
      borderRadius: "6px",
      fontSize: "16px",
      boxSizing: "border-box",
    },
    button: {
      width: "100%",
      padding: "16px",
      backgroundColor: "#3395ff",
      color: "#fff",
      border: "none",
      borderRadius: "6px",
      fontSize: "18px",
      fontWeight: "600",
      cursor: "pointer",
      marginTop: "20px",
    },
    methodRow: {
      display: "flex",
      alignItems: "center",
      padding: "15px",
      border: "1px solid #dfe6e9",
      borderRadius: "8px",
      marginBottom: "15px",
      cursor: "pointer",
    },
    footer: {
      textAlign: "center",
      padding: "20px",
      backgroundColor: "#f4f7f9",
      color: "#b2bec3",
    },
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={{ margin: 0, fontSize: "28px" }}>Acme Corporation</h1>
        <p style={{ margin: "10px 0 0", opacity: 0.9 }}>
          Secure Checkout Experience
        </p>
      </header>

      <div style={styles.contentWrapper}>
        <div style={styles.formCard}>
          {loading ? (
            <div style={{ textAlign: "center", padding: "40px" }}>
              <p style={{ fontSize: "18px", color: "#3395ff" }}>
                Processing Payment...
              </p>
              <p>Please do not refresh the page.</p>
            </div>
          ) : (
            <>
              {step === 1 && (
                <div>
                  <div style={styles.priceTag}>₹ 4,999.00</div>
                  <p style={{ color: "#636e72", marginBottom: "25px" }}>
                    Premium Monthly Subscription Plan
                  </p>
                  <div style={styles.inputGroup}>
                    <label style={styles.label}>Email Address</label>
                    <input
                      style={styles.input}
                      type="email"
                      placeholder="alex@example.com"
                    />
                  </div>
                  <div style={styles.inputGroup}>
                    <label style={styles.label}>Phone Number</label>
                    <input
                      style={styles.input}
                      type="text"
                      placeholder="+91 9988776655"
                    />
                  </div>
                  <button style={styles.button} onClick={() => setStep(2)}>
                    Proceed to Payment
                  </button>
                </div>
              )}

              {step === 2 && (
                <div>
                  <h3 style={{ marginTop: 0, marginBottom: "20px" }}>
                    Choose Payment Method
                  </h3>
                  <div style={styles.methodRow} onClick={handlePayment}>
                    <span style={{ fontSize: "24px", marginRight: "20px" }}>
                      💳
                    </span>
                    <div>
                      <div style={{ fontWeight: "600" }}>
                        Credit / Debit Card
                      </div>
                      <div style={{ fontSize: "12px", color: "#636e72" }}>
                        Visa, Mastercard, RuPay
                      </div>
                    </div>
                  </div>
                  <div style={styles.methodRow} onClick={handlePayment}>
                    <span style={{ fontSize: "24px", marginRight: "20px" }}>
                      📱
                    </span>
                    <div>
                      <div style={{ fontWeight: "600" }}>UPI Apps</div>
                      <div style={{ fontSize: "12px", color: "#636e72" }}>
                        Google Pay, PhonePe, Paytm
                      </div>
                    </div>
                  </div>
                  <button
                    style={{
                      ...styles.button,
                      backgroundColor: "transparent",
                      color: "#636e72",
                      border: "1px solid #dfe6e9",
                    }}
                    onClick={() => setStep(1)}
                  >
                    Back to Details
                  </button>
                </div>
              )}

              {step === 3 && (
                <div style={{ textAlign: "center", padding: "40px 0" }}>
                  <div
                    style={{
                      fontSize: "60px",
                      color: "#27ae60",
                      marginBottom: "20px",
                    }}
                  >
                    ✓
                  </div>
                  <h2 style={{ marginBottom: "10px" }}>Payment Successful!</h2>
                  <p style={{ color: "#636e72" }}>
                    Redirecting you to your MCQ dashboard...
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      <footer style={styles.footer}>
        <small>🔒 SSL Encrypted Connection | Secured by Razorpay</small>
      </footer>
    </div>
  );
};

export default PaymentPage;
