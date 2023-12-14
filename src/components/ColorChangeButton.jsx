/*import React, { useState } from 'react';

const ColorChangeButton = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleButtonClick = () => {
    setIsDarkMode((prevMode) => !prevMode);
    document.body.style.backgroundColor = isDarkMode ? 'white' : '#eba834';
  };

  return (
    <button onClick={handleButtonClick}>
      <span className="material-symbols-outlined">dark_mode</span>
    </button>
  );
};

export default ColorChangeButton;
*/  

import React, { useState } from 'react';

const ColorChangeButton = () => {
  const [selectedColor, setSelectedColor] = useState('#000000'); // Default color is black

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  const handleButtonClick = () => {
    document.body.style.backgroundColor = selectedColor;
  };

  return (
  <>
 
 <div style={{ background: 'radial-gradient(circle, rgb(247, 93, 4) 0%, rgb(241, 125, 58) 100%)', padding: '20px', display: 'flex', justifyContent: 'center' }}>
  <div style={{ display: 'flex', alignItems: 'center', marginLeft: '20px', margin: 'auto' }}>
    <label style={{ marginRight: '8px' }}>Choose a color to modify the background : </label>
    <input type="color" value={selectedColor} onChange={handleColorChange} style={{ marginRight: '8px', width: '100px' }} />
    <div>
      <button onClick={handleButtonClick}>
        <span className="material-symbols-outlined">dark_mode</span>
      </button>
    </div>
  </div>
</div>





  </>
  );
};

export default ColorChangeButton;

