import React, { useState } from "react";
import worldIcon from "../image/world.svg";
import locationIcon from "../image/location.svg";
import tripleDot from "../image/tripleDot.svg";

const Travelpath = () => {
  const [input1, setStart] = useState("");
  const [input2, setFinish] = useState("");

  const start = (event) => {
    setStart(event.target.value);
    
  };

  const finish = (event) => {
    setFinish(event.target.value);
  };

  return (
    <div className="flex flex-col space-y-4">
      <div className="flex flex-row space-x-4">
        <img src={worldIcon} alt="worldIcon" hight="25" width="25" />
        <input
          type="text"
          placeholder="ต้นทาง"
          value={input1}
          
          onChange={start}
          className="border rounded-xl p-2 drop-shadow-md"
        />
      </div>
      <div className="flex flex-row space-x-4">
        <img src={locationIcon} alt="worldIcon" hight="25" width="25" />
        <input
          type="text"
          placeholder="ปลายทาง"
          value={input2}
          onChange={finish}
          className="border rounded-xl p-2 drop-shadow-md"
        />
      </div>
    </div>
  );
};

export default Travelpath;
