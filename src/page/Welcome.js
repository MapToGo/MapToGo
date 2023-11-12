import React from "react";
import Logo from "../image/Logo.svg"

function Welcome() {
  return (
    <div className="h-screen flex justify-center items-center">
        <div className="w-full max-w-md p-10 rounded-lg font-sarabun">
          <h2 className="text-4xl font-regular mb-10 text-center ">ยินดีต้อนรับ</h2>
          <img className="mb-8" src = {Logo} alt = "Logo" height = "300" width="400"/>      
        <button
            type="submit"
            className="bg-[#489ECF] w-full text-white px-4 py-3 rounded-lg shadow-lg mb-10"
            >
            เข้าสู่ระบบ
        </button>
        <p className=" flex justify-center item-center">
          <a href="/regist" className="underline text-[#489ECF] font-bold">สมัครสมาชิก</a>
        </p>
     
    </div>
    </div>
  );
}

export default Welcome;
