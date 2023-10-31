import React from 'react';

const ConfirmationDialog = ({ question, onConfirm, onCancel }) => {
  return (
    <div className="confirmation-dialog">
      <p>{question}</p>
      <button onClick={onConfirm}>Да</button>
      <button onClick={onCancel}>Нет</button>
    </div>
  );
};

export default ConfirmationDialog;
