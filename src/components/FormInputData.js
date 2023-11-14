import React, { useState, useEffect } from "react"
import { db } from "../firebase";
import { collection,addDoc,getDoc } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";


const FormInputData = () =>{
const [form, setForm]= useState({})
let navigate = useNavigate();

const handleChange =(e)=>{
    console.log("handle change",e.target.name,e.target.value)
    setForm({
        ...form,
        [e.target.name]: e.target.value
         })
    console.log("form", form)
    

}

const handleAddData = async (e) => {
  e.preventDefault()
  try {
    
      console.log("Pass")
      console.log(form)
      const auth = getAuth();
      const { email, password } = form;
      const res =  createUserWithEmailAndPassword(auth, email, password);
      await addDoc(collection(db,"Users"),form)
      .then((res)=>{
         console.log(res);
      })
      navigate('/login');
      
  } catch (err) {
      console.error(err);
  }
};


return (
<div className="h-screen flex justify-center items-center">
  <div className="w-full max-w-md p-8 rounded-lg font-sarabun">
    <h2 className="text-2xl font-regular mb-4">สมัครสมาชิก</h2>
    <form>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-regular mb-2"
          form="name">ชื่อ
        </label>
        <input
          onChange={handleChange}
          type="text"
          name="name"
          className="w-full p-2  border bg-white/50 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          required
        />
      </div>

      <div className="mb-4">
        <label
          
          className="block text-gray-700 text-sm font-regular mb-2"
          form="surname">นามสกุล
          
        </label>
        <input
          onChange={handleChange}
          type="text"
          name="surname"
          
          
          className="w-full p-2 border bg-white/50 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          required
        />
      </div>
      <div className="mb-4">
        <label
          form="phoneNumber"
          className="block text-gray-700 text-sm font-regular mb-2"
        >
          เบอร์โทรศัพท์
        </label>
        <input
          onChange={handleChange}
          type="tel"
          name="phoneNumber"
         
          
          className="w-full p-2 border bg-white/50 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          required
        />
      </div>
      <div className="mb-4">
        <label
          form="email"
          className="block text-gray-700 text-sm font-regular mb-2"
        >
          อีเมล์
        </label>
        <input
          onChange={handleChange}
          type="email"
          name="email"
          
          
          className="w-full p-2 border bg-white/50 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          required
        />
      </div>

      <div className="mb-4">
        <label
          form="password"
          className="block text-gray-700 text-sm font-regular mb-2"
        >
          รหัสผ่าน
        </label>
        <input
          onChange={handleChange}
          type="password"
          name="password"
          
          
          className="w-full p-2 border bg-white/50 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-regular mb-2">
          <input
            type="checkbox"
            name="locationService"
            checked={form.locationService}
            
            className="mr-2"
          />
          อนุญาตให้เข้าถึงที่อยู่ในขณะที่ใช้แอปพลิเคชัน
        </label>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-regular mb-2">
          <input
            type="checkbox"
            name="microphonePermission"
            checked={form.microphonePermission}
            
            className="mr-2"
          />
          อนุญาตให้เปิดไมโครโฟนในขณะที่ใช้แอปพลิเคชัน
        </label>
      </div>
      <div className="text-center">
        <button
          onClick={handleAddData}
          className="bg-[#489ECF] w-full text-white px-4 py-2 rounded-lg shadow-lg"
        >
          สมัครสมาชิก
        </button >
      </div>
    </form>
  </div>
</div>
        ); 
};
export default FormInputData;