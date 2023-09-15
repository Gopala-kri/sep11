
import React, { useState } from 'react';

function Toggle() {
  const [isToggled, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!isToggled);
  };

  return (
    
    <div>
      <center>
      <button onClick={handleToggle}>
        {isToggled ? 'Turn Off' : 'Turn On'}
      </button>
      {isToggled && <p>The toggle is ON.</p>}
      
      </center>
    </div>
  );
}

export default Toggle;