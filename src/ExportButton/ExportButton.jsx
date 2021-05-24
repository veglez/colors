import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  padding: 10px;
`;

const ExportButton = ({ newColors, oldColors }) => {
  const newSet = newColors;

  let relation = {};

  const handleClick = () => {
    oldColors.forEach((color, i) => {
      relation[i] = {
        old: `#${color.hex}`,
        new: newSet[i],
      };
    });
    console.log(relation);
    console.log(JSON.stringify(relation));
  };

  return (
    <div className='exportContainer'>
      <Button onClick={handleClick}>
        <p>Export to JSON</p>
      </Button>
    </div>
  );
};

export default ExportButton;
