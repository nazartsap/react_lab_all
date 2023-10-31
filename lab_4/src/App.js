import React, {useState} from 'react';
import Count from './components/Count';
import IsFive from './components/IsFive';
import AddShapeForm from './components/AddShapeForm'
import ShapeList from './components/ShapeList'
import ConfirmationDialog from './components/ConfirmationDialog';
import useInput from './components/useInput';
import Modal from './components/Modal';

function App() {
  const [count1, setCount1] = React.useState(0);
  const [count2, setCount2] = React.useState(0);
  const [shapes, setShapes] = useState([]);
  const [showDialog, setShowDialog] = useState(false);
  const [shapeIndexToRemove, setShapeIndexToRemove] = useState(null); // Индекс фигуры для удаления

  const usernameInput = useInput('', true); // Пример с полем ввода имени пользователя
  const emailInput = useInput('', true); // Пример с полем ввода электронной почты

  const addShape = (shapeType) => {
    setShapes([...shapes, shapeType]);
  };
  const removeShape = (index) => {
    const newShapes = [...shapes];
    newShapes.splice(index, 1);
    setShapes(newShapes);
  };

  const handleRemoveShape = (index) => {
    setShapeIndexToRemove(index); // Устанавливаем индекс фигуры для удаления
    setShowDialog(true); // Открываем модальное окно
  };
  const confirmRemoveShape = () => {
    if (shapeIndexToRemove !== null) {
      const newShapes = [...shapes];
      newShapes.splice(shapeIndexToRemove, 1);
      setShapes(newShapes);
      setShapeIndexToRemove(null); // Сбрасываем индекс
    }
    setShowDialog(false); // Закрываем модальное окно после подтверждения
  };

  const cancelRemoveShape = () => {
    setShapeIndexToRemove(null); // Сбрасываем индекс
    setShowDialog(false); // Закрываем модальное окно после отмены
  };


  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      
      <h5>Счетчик 1: </h5>
      <div className="counter">
        <button onClick={() => setCount1(count1 + 1)}>+</button>
        <Count id={1} value={count1} />
      </div>

      <h5>Счетчик 2: </h5>
      <div className="counter">
        <button onClick={() => setCount2(count2 + 1)}>+</button>
        <Count id={2} value={count2} />
        <IsFive value={count2} />
      </div>


      <h2>Список фигур</h2>
      <ShapeList shapes={shapes} onRemoveShape={handleRemoveShape} />
      <AddShapeForm onAddShape={addShape} />
      {showDialog && (
        <ConfirmationDialog
          question="Вы действительно хотите удалить фигуру?"
          onConfirm={confirmRemoveShape}
          onCancel={cancelRemoveShape}
          />
      )}
       <div>
        <label>Имя пользователя:</label>
        <input
          type="text"
          value={usernameInput.value}
          onChange={usernameInput.onChange}
          onBlur={usernameInput.onBlur}
        />
        {usernameInput.error && <span className="error">{usernameInput.error}</span>}
      </div>

      <div>
        <label>Электронная почта:</label>
        <input
          type="text"
          value={emailInput.value}
          onChange={emailInput.onChange}
          onBlur={emailInput.onBlur}
        />
        {emailInput.error && <span className="error">{emailInput.error}</span>}
      </div>
      <h1>React Transition Group Modal</h1>
      <button onClick={openModal}>Открыть модальное окно</button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2>Модальное окно</h2>
        <p>Текст модального окна</p>
      </Modal>
    </div>
  );
}

export default App;