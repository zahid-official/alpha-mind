"use client"

import { registerUser } from "@/app/actions/auth/registerUser";
import Swal from "sweetalert2";

const RegisterForm = () => {

    const handleSubmit = async (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        try {
          const response = await registerUser({ name, email, password });
    
          if (response?.acknowledged) {
            Swal.fire({
              icon: "success",
              title: "Registered Successfully!",
              text: "You can now login with your account.",
              timer: 2000,
              showConfirmButton: false,
            });
    
            form.reset();
          } else {
            Swal.fire({
              icon: "error",
              title: "Registration Failed",
              text: "This email may already be registered.",
            });
          }
        } catch (error) {
          console.error("Registration Error:", error);
          Swal.fire({
            icon: "error",
            title: "Something went wrong!",
            text: "Please try again later.",
          });
        }
      };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Name */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      {/* Password */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Password
        </label>
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      {/* Register Button */}
      <div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition-all"
        >
          Register
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;
