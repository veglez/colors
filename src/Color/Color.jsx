import React, { useEffect, useState } from 'react';
import { ColorDiv, Container } from './styles';
import { v4 } from 'uuid';

const Color = ({ readOnly, color, newColors, id }) => {
  const [colorName, setColorName] = useState(color);
  // const itemID0 = v4();
  // const itemID = itemID0.split('-')[0];

  const handleChange = (e) => {
    setColorName(e.target.value);
  };

  useEffect(() => {
    if (!readOnly) {
      newColors((p) => {
        let colors = p;
        colors[id] = colorName;
        return colors;
      });
    }
  }, [newColors, colorName, id, readOnly]);

  return (
    <Container>
      <ColorDiv name={colorName} readOnly={true} htmlFor={id}>
        <input
          type='color'
          disabled={readOnly}
          onChange={handleChange}
          id={id}
        />
      </ColorDiv>
      <p>{colorName}</p>
    </Container>
  );
};

export default Color;
