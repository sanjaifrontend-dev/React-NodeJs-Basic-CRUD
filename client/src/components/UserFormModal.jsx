import Modal from 'react-modal';
import AddUserForm from './AddUserForm';

Modal.setAppElement('#root');

const UserFormModal = ({ isOpen, onRequestClose, onSubmit, editingUser }) => {

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="modal backdrop-blur-sm bg-black/30 absolute top-0 h-full w-full flex items-center justify-center"
      overlayClassName="overlay"
    >
      <div className="modal-content flex flex-col bg-white px-6 py-9 rounded-lg ">
        <AddUserForm onSubmit={onSubmit} editingUser={editingUser} onClose={onRequestClose}/>
      </div>
    </Modal>
  );
};

export default UserFormModal;
