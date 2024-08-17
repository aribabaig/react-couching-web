import React, { useState } from 'react';
import { FaCamera } from "react-icons/fa";
import '../App.css'

const Gallery = () => {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  return (
    <div className="gallery">
      <input value={<FaCamera />}
        type="checkbox" 
        checked={checked} 
        onChange={handleCheckboxChange} 
      />
      <FaCamera className="camera-icon"/>
      <img src="https://i.pinimg.com/564x/e1/0d/cf/e10dcf4904e174d10b4c9ce22bf7412d.jpg" alt="a forest after an apocalypse" style={{ '--i': 1 }} />
      <img src="https://i.pinimg.com/564x/2e/08/77/2e08778cf11fc593012c5d3fab982150.jpg" alt="a waterfall and many rocks" style={{ '--i': 2 }} />
      <img src="https://i.pinimg.com/736x/66/26/ae/6626ae81a594eb114e6c6da753b3734a.jpg" alt="a house on a mountain" style={{ '--i': 3 }} />
      <img src="https://i.pinimg.com/236x/86/f5/56/86f5560c3c2d4161683dbc9fb6b0b72b.jpg" alt="sime pink flowers" style={{ '--i': 4 }} />
      <img src="https://i.pinimg.com/236x/7e/08/68/7e086832301b75cc3681a4ff18fd9575.jpg" alt="big rocks with some trees" style={{ '--i': 5 }} />
      <img src="https://i.pinimg.com/236x/a1/e5/c3/a1e5c360ad30be2c9799bdfa08e38064.jpg" alt="a waterfall, a lot of tree and a great view from the sky" style={{ '--i': 6 }} />
      <img src="https://i.pinimg.com/236x/4b/1d/6c/4b1d6c6a2a04a5437cb507fc2fd917c4.jpg" alt="a cool landscape" style={{ '--i': 7 }} />
      <img src="https://i.pinimg.com/236x/25/a4/12/25a412dceef697c9763234f49899ba77.jpg" alt="inside a town between two big buildings" style={{ '--i': 8 }} />
    </div>
  );
};

export default Gallery

 