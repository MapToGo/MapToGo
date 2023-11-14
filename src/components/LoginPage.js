import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react"
import { db } from "../firebase";
import { collection,addDoc,getDoc } from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { FaEye, FaEyeDropper, FaRegEye } from 'react-icons/fa';

const LoginPage = () => {
    
    const [form, setForm]= useState({})
    const [passwordVisible, setpasswordvisible]=useState(true)
    let navigate = useNavigate();
    const togglePasswordVisibility = ()=>{
        if(passwordVisible==true){
            setpasswordvisible(false)
    
        }
        else{
            setpasswordvisible(true)
        }
    }
    const handleChange =(e)=>{
        console.log("handle change",e.target.name,e.target.value)
        setForm({
            ...form,
            [e.target.name]: e.target.value
             })
        console.log("form", form)
        console.log("form2", form)
    
    }
  
    const handleLogin = async (e) => {
      e.preventDefault();
      const auth = getAuth();
      const { email, password } = form;
      try {
        await signInWithEmailAndPassword(auth, email, password);
        // การล็อกอินสำเร็จ, คุณสามารถทำ redirect หรือส่งข้อมูลไปที่หน้าถัดไปได้
        console.log("Login successful");
        navigate('/map');
      } catch (error) {
        console.error("Login failed", error.message);
        
      }
    };
    
    return (
        <div className="flex justify-center  h-screen items-center ">
          <div className="w-full max-w-md p-8 rounded-lg font-sarabun">
            <h1 className="text-2xl font-bold mb-4">เข้าสู่ระบบ</h1>
            <form>
              <div className="mb-4">
                <label htmlFor="email" 
                className="block text-gray-700 text-sm font-regular mb-2">อีเมล</label>
                <input
                  onChange={handleChange}
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
                  onChange={handleChange}
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
                onClick={handleLogin}
                type="submit"
                className="bg-[#489ECF] w-full text-white px-4 py-2 rounded-lg shadow-lg"
                
              >
                เข้าสู่ระบบ
              </button>
            </form>
            <p className=" flex justify-center item-center">
                <br/>
            <a href="/regist" className="underline text-[#489ECF] font-bold">สมัครสมาชิก</a>
             </p>
          </div>
          
        </div>)

    };
    export default LoginPage;