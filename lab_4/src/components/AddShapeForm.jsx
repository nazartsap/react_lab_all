import React, { useState } from 'react';

const AddShapeForm = ({ onAddShape }) => {
  const [shapeType, setShapeType] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (shapeType) {
      onAddShape(shapeType);
      setShapeType('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Тип фигуры ('круг' или 'квадрат')"
        value={shapeType}
        onChange={(e) => setShapeType(e.target.value)}
      />
      <button type="submit">Добавить фигуру</button>
    </form>
  );
};

export default AddShapeForm;