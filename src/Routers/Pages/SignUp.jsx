import React, { useState } from "react";

export default function SignUpForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState({});

  const validate = () => {
    let newError = {};

    if (!fullName.trim()) {
      newError.fullName = true;
    }

    if (!email.trim()) {
      newError.email = true;
    }

    if (!password.trim()) {
      newError.password = true;
    }

    setError(newError);
    return Object.keys(newError).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    if (validate()) {
      console.log({ fullName, email, password });
     

      setFullName("");
      setEmail("");
      setPassword("");
      setError({});
      setSubmitted(false)
    }
  };

  return (
    <div style={styles.container}>
      <h2>Sign up to Salinaka</h2>

      <div style={styles.formContainer}>
        <form onSubmit={handleSubmit} style={styles.form}>
          <label>
            Full Name
            <input
              type="text"
              placeholder="John Doe"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              style={styles.input}
            />
            {submitted && error.fullName && (
              <p style={styles.error}>Name is required</p>
            )}
          </label>

          <label>
            Email
            <input
              type="email"
              placeholder="test@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
            />
            {submitted && error.email && (
              <p style={styles.error}>Email is required</p>
            )}
          </label>

          <label>
            Password
            <input
              type="password"
              placeholder="Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
            />
            {submitted && error.password && (
              <p style={styles.error}>Password is required</p>
            )}
          </label>

          <button type="submit" style={styles.signupButton}>
            Sign Up →
          </button>
        </form>

        <div style={styles.socialLogin}>
          <p style={{ textAlign: "center" }}>OR</p>
          <button style={{ ...styles.socialButton, background: "#1877F2", color: "#fff" }}>
            Continue with Facebook
          </button>
          <button style={{ ...styles.socialButton, background: "#fff", border: "1px solid #ccc" }}>
            Continue with Google
          </button>
          <button style={{ ...styles.socialButton, background: "#333", color: "#fff" }}>
            Continue with GitHub
          </button>
        </div>
      </div>

      <p style={{ textAlign: "center", marginTop: "20px" }}>
        Already have an account? <a href="/signin">Sign In</a>
      </p>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "700px",
    margin: "50px auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    border: "1px solid black",
  },
  formContainer: {
    display: "flex",
    gap: "40px",
    border: "1px solid #eee",
    padding: "20px",
    borderRadius: "8px",
  },
  form: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginTop: "5px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  error: {
    color: "red",
    fontSize: "13px",
  },
  signupButton: {
    padding: "10px",
    background: "#000",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  socialLogin: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  socialButton: {
    padding: "10px",
    borderRadius: "4px",
    cursor: "pointer",
    fontWeight: "bold",
  },
};
