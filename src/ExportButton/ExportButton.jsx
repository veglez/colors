import React from 'react';

const ExportButton = ({ colors }) => {
  const fetchedColors = colors;

  return (
    <button>
      <p>Export to JSON</p>
    </button>
  );
};

export default ExportButton;
