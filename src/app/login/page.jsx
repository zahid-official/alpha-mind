"use client"

import LoginForm from "./component/LoginForm"

const login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Login
        </h2>
          <LoginForm/>
      </div>
    </div>
  )
}

export default login