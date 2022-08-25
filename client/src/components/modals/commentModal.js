import React from 'react';
import { useSelector } from 'react-redux';

const CommentModal = ({ visible, onClose }) => {
  const selectedProblem = useSelector((state) => state.selectedProblem);
  
  const handleOnClose = (e) => {
    if (e.target.id !== 'container') return;
    onClose();
  };
  if (!visible) return null;
  return (
    <div
      onClick={handleOnClose}
      id="container"
      className="fixed inset-0 flex justify-center items-center"
    >
      <div className="bg-white p-2 rounded">{selectedProblem.comments}</div>
    </div>
  );
};

export default CommentModal;
