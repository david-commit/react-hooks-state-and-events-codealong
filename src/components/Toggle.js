import React, { useState } from 'react';

function Toggle() {
  const [isOn, setIsOn] = useState(false);

  function handleCLick() {
    setIsOn(!isOn);
  }

  const color = isOn ? 'red' : 'yellow';

  return (
    <button style={{ color: color }} onClick={handleCLick}>
      {isOn ? 'ON' : 'OFF'}
    </button>
  );
}

export default Toggle;
