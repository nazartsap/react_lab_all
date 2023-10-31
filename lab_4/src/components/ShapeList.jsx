import React from 'react';

const ShapeList = ({ shapes, onRemoveShape }) => {
  return (
    <ul>
      {shapes.map((shape, index) => (
        <li key={index}>
          {shape} <button onClick={() => onRemoveShape(index)}>Удалить</button>
        </li>
      ))}
    </ul>
  );
};

export default ShapeList;