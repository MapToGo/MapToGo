import React, { useState, useEffect } from "react"
import { db } from "../firebase";
import { collection,addDoc } from "firebase/firestore";

const FormInputData = () =>{
const [form, setForm]= useState({})


const handleChange =(e)=>{
    console.log(e.target.name,e.target.value)
    setForm({
        ...form,
        [e.target.name]: e.target.value,
         })
}

const handleAddData = async()=>{
    await addDoc(collection(db,'Users'),form)
    .then((res)=>{
       console.log(res);
    })
    .catch(err=>console.log(err))
}


return (
<div className="h-screen flex justify-center items-center">
  <div className="w-full max-w-md p-8 rounded-lg font-sarabun">
    <h2 className="text-2xl font-regular mb-4">สมัครสมาชิก</h2>
    <form>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-regular mb-2"
          for="name">ชื่อ
        </label>
        <input
          onChange={(e)=>handleChange(e)}
          type="text"
          name="name"
          className="w-full p-2  border bg-white/50 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          required
        />
      </div>

      <div className="mb-4">
        <label
          
          className="block text-gray-700 text-sm font-regular mb-2"
          For="surname">นามสกุล
          
        </label>
        <input
          onChange={(e)=>handleChange(e)}
          type="text"
          name="surname"
          
          
          className="w-full p-2 border bg-white/50 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          required
        />
      </div>
      <div className="mb-4">
        <label
          For="phoneNumber"
          className="block text-gray-700 text-sm font-regular mb-2"
        >
          เบอร์โทรศัพท์
        </label>
        <input
          onChange={(e)=>handleChange(e)}
          type="tel"
          name="phoneNumber"
         
          
          className="w-full p-2 border bg-white/50 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          required
        />
      </div>
      <div className="mb-4">
        <label
          For="email"
          className="block text-gray-700 text-sm font-regular mb-2"
        >
          อีเมล์
        </label>
        <input
          onChange={(e)=>handleChange(e)}
          type="email"
          name="email"
          
          
          className="w-full p-2 border bg-white/50 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          required
        />
      </div>

      <div className="mb-4">
        <label
          For="password"
          className="block text-gray-700 text-sm font-regular mb-2"
        >
          รหัสผ่าน
        </label>
        <input
          onChange={(e)=>handleChange(e)}
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
          type="submit"
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