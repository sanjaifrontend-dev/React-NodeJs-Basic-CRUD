import React from "react";
import edit_img from '../assets/img/edit.svg';
import delete_img from '../assets/img/trash-outline2.svg';

const UserListTable = ({userlist, onDeleteUser, onEditUser}) => {

    const handleDelete = (id) => {
      onDeleteUser(id);
    }

    const handleEdit = (user) => {
      onEditUser(user);
    }

  return (
    <>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 md:w-[1400px]">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
              <th scope="col" class="px-6 py-3">
                FirstName
              </th>
              <th scope="col" class="px-6 py-3">
                LastName
              </th>
              <th scope="col" class="px-6 py-3">
                Email
              </th>
              <th scope="col" class="px-6 py-3">
                Mobile
              </th>
              <th scope="col" class="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {userlist.map((user, index) => (
            <tr key={index} class="odd:bg-white even:bg-gray-50 border-b">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                {user.first_name}
              </th>
              <td class="px-6 py-4">{user.last_name}</td>
              <td class="px-6 py-4">{user.email}</td>
              <td class="px-6 py-4">{user.mobile}</td>
              <td class="px-6 py-4 flex items-center gap-2">
                <abutton onClick={() => handleEdit(user)} class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                  <img src={edit_img} alt="Edit_icon" className="w-[18px]" />
                </abutton>
                <button onClick={() => handleDelete(user.id)} class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                  <img src={delete_img} alt="Delete_icon" className="w-[20px]" />
                </button>
              </td>
            </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UserListTable;
