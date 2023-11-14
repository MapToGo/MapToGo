import React, { useState } from "react";
import worldIcon from "../image/world.svg";
import locationIcon from "../image/location.svg";
import tripleDot from "../image/tripleDot.svg";

const Travelpath = () => {

  return (
    <div className="flex flex-col">
      <div className="flex flex-row space-x-4">
        <img src={worldIcon} alt="worldIcon" hight="25" width="25" />
        <p className="border rounded-xl p-5 px-28 drop-shadow-md bg-white "/>
      </div>
      <img src={tripleDot} alt="tripledot" hight= "25" width="25"/>      
      <div className="flex flex-row space-x-4">
        <img src={locationIcon} alt="worldIcon" hight="25" width="25" />
        <p className="border rounded-xl p-5 px-28 drop-shadow-md bg-white "/>
      </div>
    </div>
  );
};

export default Travelpath;
