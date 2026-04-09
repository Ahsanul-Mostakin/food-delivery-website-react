import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setToken, setUser } from "../redux/authSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const url = isLogin
      ? "http://localhost:5000/api/auth/login"
      : "http://localhost:5000/api/auth/register";

    try {
      const res = await axios.post(url, form);
      console.log("Full API Response:", res.data); // 👈 keep this for debugging

      const data = res.data;

      // Extract token — check all common field names
      const token =
        data.token ||
        data.accessToken ||
        data.access_token ||
        data.jwt ||
        null;

      // Extract user object — check all common shapes
      const user =
        data.user ||
        data.data ||
        data.userData ||
        (data.name ? { name: data.name, email: data.email, _id: data._id || data.id } : null);

      // If register and no token returned, do auto-login
      if (!token && !isLogin) {
        toast.success("Registered! Please login.");
        setIsLogin(true);
        setForm({ name: "", email: form.email, password: "" });
        setLoading(false);
        return;
      }

      if (!token) {
        toast.error("No token received. Check console for response structure.");
        console.error("Could not find token in:", data);
        return;
      }

      const finalUser = user || { name: form.name || "User", email: form.email };

      dispatch(setToken(token));
      dispatch(setUser(finalUser));

      toast.success(isLogin ? "Login successful!" : "Registered successfully!");
      navigate("/");
    } catch (err) {
      console.error("Auth error:", err.response?.data);
      toast.error(err.response?.data?.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-orange-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-md w-[400px] flex flex-col gap-4"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">
          {isLogin ? "Login" : "Register"}
        </h2>

        {!isLogin && (
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            required
            className="border border-gray-300 p-3 rounded-lg outline-none focus:border-orange-400 transition"
          />
        )}

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
          className="border border-gray-300 p-3 rounded-lg outline-none focus:border-orange-400 transition"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
          className="border border-gray-300 p-3 rounded-lg outline-none focus:border-orange-400 transition"
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-orange-500 text-white p-3 rounded-lg hover:bg-orange-400 transition font-semibold disabled:opacity-60"
        >
          {loading ? "Please wait..." : isLogin ? "Login" : "Register"}
        </button>

        <p className="text-center text-sm text-gray-500">
          {isLogin ? "Don't have an account?" : "Already have one?"}{" "}
          <span
            className="text-orange-500 cursor-pointer font-semibold"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Register" : "Login"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Auth;