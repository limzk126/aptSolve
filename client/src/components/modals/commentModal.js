import React from 'react';

const CommentModal = ({ visible, onClose, content }) => {
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
      <div className="bg-white p-2 rounded">{content}</div>
    </div>
  );
};

export default CommentModal;
