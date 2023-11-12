import React, { useState } from 'react';

const Travelpath = () => {
  const [input1, setStart] = useState('');
  const [input2, setFinish] = useState('');

  const start = (event) => {
    setStart(event.target.value);
  };

  const finish = (event) => {
    setFinish(event.target.value);
  };

  return (
    <div className="flex flex-col space-y-4">
      <input
        type="text"
        placeholder="ต้นทาง"
        value={input1}
        onChange={start}
        className="border rounded-xl p-2 drop-shadow-md"
      />

      <input
        type="text"
        placeholder="ปลายทาง"
        value={input2}
        onChange={finish}
        className="border rounded-xl p-2 drop-shadow-md"
      />
    </div>
  );
};

export default Travelpath;