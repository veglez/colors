import React, { useState } from 'react';
import { ColorDiv, Container } from './styles';
import { v4 } from 'uuid';

const Color = ({ readOnly, color }) => {
  const [colorName, setColorName] = useState(color);
  const itemID0 = v4();
  const itemID = itemID0.split('-')[0];
  console.log(itemID);
  return (
    <Container>
      <ColorDiv name={colorName} readOnly={true} htmlFor={itemID}>
        <input
          type='color'
          disabled={readOnly}
          onChange={(e) => setColorName(e.target.value)}
          id={itemID}
        />
      </ColorDiv>
      <p>{colorName}</p>
    </Container>
  );
};

export default Color;
