import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const navigate = useNavigate();

  const validate = () => {
    let newError = {};
    if (!email.trim()) newError.email = true;
    if (!password.trim()) newError.password = true;
    setError(newError);
    return Object.keys(newError).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    if (validate()) {
      console.log({ email, password });
      setEmail("");
      setPassword("");
      setSubmitted(false);
    }
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <div className="card shadow-sm p-4">
            <h2 className="text-center mb-4">Sign in to Salinaka</h2>

            <form onSubmit={handleSubmit}>
              {/* Email */}
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="test@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {submitted && error.email && (
                  <small className="text-danger">Email is required</small>
                )}
              </div>

              {/* Password */}
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Your Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {submitted && error.password && (
                  <small className="text-danger">Password is required</small>
                )}
              </div>

              <div className="mb-3 text-end">
                <a href="#" className="small">
                  Forgot Password?
                </a>
              </div>

              {/* Social Logins */}
              <div className="d-grid gap-2 mb-3">
                <a
                  href="https://www.facebook.com/"
                  className="btn btn-primary"
                  style={{ background: "#1877F2" }}
                >
                  Continue with Facebook
                </a>
                <a
                  href="https://accounts.google.com/"
                  className="btn btn-light border"
                  style={{ color: "gray" }}
                >
                  Continue with Google
                </a>
                <a
                  href="https://github.com/"
                  className="btn btn-dark"
                >
                  Continue with GitHub
                </a>
              </div>

              {/* Sign In Button */}
              <button type="submit" className="btn btn-dark w-100 mb-3">
                Sign In
              </button>

              <hr />

              {/* Footer */}
              <div className="text-center py-2" style={{ background: "#f5f5f5" }}>
                <p className="mb-2 small">Don't have an account?</p>
                <button
                  type="button"
                  className="btn btn-outline-dark btn-sm"
                  onClick={() => navigate("/signup")}
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
