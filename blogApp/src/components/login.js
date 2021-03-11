import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [pwdErr, setPwdErr] = useState("");
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setEmailErr("");
    setPwdErr("");

    const user = { email, password };
    console.log(user);

    try {
      const res = await fetch("http://localhost:8000/auth/login/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });
      const data = await res.json();
      console.log(data);
      if (data.errors) {
        setEmailErr(data.errors.email);
        setPwdErr(data.errors.password);
      }
      if (data.user) {
        history.push("/blogs");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col items-center px-5 py-16 text-gray-900">
      <form onSubmit={handleSubmit} className="w-1/3 text-lg tracking-wide">
        <div className="text-3.5xl font-semibold text-center">Login</div>
        <div className="mt-8 space-y-6">
          <div className="">
            <div className="">Email:</div>
            <div className="my-2">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-gray-400 rounded-md"
              />
            </div>
            <div className="text-base text-crimson">{emailErr}</div>
          </div>
          <div className="">
            <div className="">Password:</div>
            <div className="my-2">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-400 rounded-md"
              />
            </div>
            <div className="text-base text-crimson">{pwdErr}</div>
          </div>
        </div>
        <div className="my-5 text-center">
          <button className="px-2 py-1 text-lg text-white bg-crimson">
            Submit
          </button>
        </div>
      </form>
      <div>
        Don't have an account?{" "}
        <Link to="/signup">
          <span className="text-indigo-600">Sign Up</span>
        </Link>
      </div>
    </div>
  );
}

export default Login;
