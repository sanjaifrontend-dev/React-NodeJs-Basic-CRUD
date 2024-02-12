import { useState, useEffect } from "react";
import UserFormModal from "./UserFormModal";
import axios from "axios";
import UserListTable from "./UserListTable";
import add_img from '../assets/img/add-circle.svg';

const Home = () => {
  const [usersList, setUsersList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    getUsersList();
  }, []);

  // Get All Users list
  const getUsersList = async () => {
    const url = "https://react-nodejs-basic-crud.onrender.com/users";
    const response = await axios.get(url);
    if (response.status === 200) {
      setUsersList(response.data.data);
      console.log(response.data);
    }
  };

  // Create User
  const handleSubmit = async (userData) => {
    const url = "https://react-nodejs-basic-crud.onrender.com/user";
    const payload = {
      firstName: userData.firstName,
      lastName: userData.lastName,
      email: userData.email,
      mobile: userData.mobile,
    };
    const response = await axios.post(url, payload);
    if (response.status === 200) {
      closeModal();
      getUsersList();
    }
  };

  // Delete User
  const DeleteUser = async (id) => {
    const url = `https://react-nodejs-basic-crud.onrender.com/user/${id}`;

    const response = await axios.delete(url);
    if (response.status === 200) {
      closeModal();
      getUsersList();
    }
  }

  const EditUser = (user) => {
    setEditingUser(user);
    setIsEditing(true);
    openModal();
}

  // Update User
  const updateUser = async (updatedUserData) => {
    const url = `https://react-nodejs-basic-crud.onrender.com/user/${editingUser.id}`;
    const payload = {
      firstName: updatedUserData.firstName,
      lastName: updatedUserData.lastName,
      email: updatedUserData.email,
      mobile: updatedUserData.mobile,
    }
    const response = await axios.put(url, payload);
    if (response.status === 200) {
    closeModal();
    getUsersList();
  }
  }

  // Open Modal
  const openModal = () => {
    setIsModalOpen(true);
  }
  
  // /Close Modal
  const closeModal = () => {
    setIsModalOpen(false);
    setEditingUser(null);
    setIsEditing(false);
  }

  return (
    <div className="font-inter brand-container relative flex flex-col items-center justify-center mt-5 gap-[50px]">
      <h1 className="text-3xl font-semibold">CRUD WITH NODE.JS, REACT</h1>

      <div className="flex justify-between items-center w-full">
        <h4 className="text-xl font-semibold">User List</h4>
        <button
          className="text-lg bg-green-500 hover:bg-green-700 px-4 py-2 rounded-lg text-white font-semibold flex items-center gap-2"
          onClick={openModal}>
          <img src={add_img} alt="Add_image" className="w-[20px]" />
          Add User
        </button>
      </div>
      <UserFormModal isOpen={isModalOpen} onRequestClose={closeModal} onSubmit={isEditing ? updateUser : handleSubmit} editingUser={editingUser} />
      <UserListTable userlist={usersList} onDeleteUser={DeleteUser} onEditUser={EditUser} />
    </div>
  );
};

export default Home;
