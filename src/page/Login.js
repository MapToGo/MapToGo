import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { FaEye, FaEyeDropper, FaRegEye } from 'react-icons/fa';

function Login() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => setPasswordVisible(!passwordVisible);

  return (
    <div className="flex justify-center  h-screen items-center ">
      <div className="w-full max-w-md p-8 rounded-lg font-sarabun">
        <h1 className="text-2xl font-bold mb-4">เข้าสู่ระบบ</h1>
        <form>
          <div className="mb-4">
            <label htmlFor="email" 
            className="block text-gray-700 text-sm font-regular mb-2">อีเมล</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-2  border bg-white/50 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="mb-4 relative">
            <label htmlFor="password" className="block text-gray-700 text-sm font-regular mb-2">รหัสผ่าน</label>
            <input
              
              type={passwordVisible ? 'text' : 'password'}
              id="password"
              name="password"
              className="w-full p-2  border bg-white/50 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              required

            />
             
            <button 
              type="button"
              className="absolute w-1 p-2 text-gray-500 "
              onClick={togglePasswordVisibility}
            >
              
              {passwordVisible ? <FontAwesomeIcon icon={faEye}></FontAwesomeIcon> : <FontAwesomeIcon icon={faEyeSlash} />}
              
            </button>
            

          </div>
          <button
            type="submit"
            className="bg-[#489ECF] w-full text-white px-4 py-2 rounded-lg shadow-lg"
          >
            เข้าสู่ระบบ
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
