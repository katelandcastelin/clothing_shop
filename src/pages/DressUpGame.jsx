import React, { useState } from 'react';
import top1 from '../utils/dress-up-icons/tops/1.png';
import top2 from '../utils/dress-up-icons/tops/2.png';
import top3 from '../utils/dress-up-icons/tops/3.png';
import bottom1 from '../utils/dress-up-icons/bottoms/1.png';

const clothingItems = [
  {
    id: 1,
    name: 'top1',
    image: top1,
  },
  {
    id: 2,
    name: 'top2',
    image: top2,
  },
  {
    id: 3,
    name: 'top3',
    image: top3,
  },
  {
    id: 4,
    name: 'pants1',
    image: bottom1,
  },
];

function App() {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div>
      <h1>Dress Up Game</h1>
      <div>
        {clothingItems.map((item) => (
          <img
            width={"40px"}
            key={item.id}
            src={item.image}
            alt={item.name}
            onClick={() => handleItemClick(item)}
            style={{
              border: selectedItem?.id === item.id ? '2px solid red' : 'none',
              margin: '10px',
              cursor: 'pointer'
            }}
          />
        ))}
      </div>
      <div>
        {selectedItem ? (
          <img width={"40px"} src={selectedItem.image} alt={selectedItem.name} />
        ) : (
          <p>Please select an item to dress up the model</p>
        )}
      </div>
    </div>
  );
}

export default App;


// import React from 'react';

// import Typography from '@mui/material/Typography';

// export default function DressUpGame() {
//   return (
//     <>
//       <Typography variant="h4" gutterBottom>
//         Dress-up game
//       </Typography>
//     </>
//   )
// }