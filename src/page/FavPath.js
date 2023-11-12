import React from "react";
import Travelpath from "../components/TravelPath"

function FavPath() {
  return (
    <div className="h-screen flex justify-center items-center">
        <div className="w-full max-w-md p-10 rounded-lg font-sarabun">
          <h2 className="text-3xl font-regular mb-10  ">เส้นทางที่บันทึกไว้</h2>
          <Travelpath/>
        
     
        </div>
    </div>
  );
}

export default FavPath;
