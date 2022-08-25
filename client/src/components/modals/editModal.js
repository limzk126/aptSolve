import React from 'react';
import ProblemForm from '../problemForm/problemForm';

const EditModal = ({ visible, onClose }) => {
  const handleOnClose = (e) => {
    if (e.target.id !== 'editContainer') return;
    onClose();
  };
  if (!visible) return null;
  return (
    <div
      onClick={handleOnClose}
      id="editContainer"
      className="fixed inset-0 flex justify-center items-center"
    >
      <div className="max-w-2xl w-full h-full md:h-auto bg-white rounded">
        <div className="py-2 px-2">Header</div>
        <div className="py-2 px-2">
          <div>
            <ProblemForm textColor={'text-black'} isEdit={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
