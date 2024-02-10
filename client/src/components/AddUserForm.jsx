import { useState, useEffect } from "react";

const AddUserForm = ({ onSubmit, editingUser, onClose }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (editingUser) {
      setFirstName(editingUser.first_name);
      setLastName(editingUser.last_name);
      setMobile(editingUser.mobile);
      setEmail(editingUser.email);
    }
  }, [editingUser]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit({ firstName, lastName, email, mobile });
  };

  return (
    <>
      <div className="form-div">
        <form className="w-[300px] mx-auto" onSubmit={handleFormSubmit}>
          <div className="mb-5">
            <label
              for="firstname"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              First Name:
            </label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              id="firstname"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>
          <div className="mb-5">
            <label
              for="lastname"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Last Name:
            </label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              id="lastname"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>
          <div className="mb-5">
            <label
              for="email"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Email:
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>
          <div className="mb-5">
            <label
              for="mobile"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Mobile:
            </label>
            <input
              type="number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              id="mobile"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>

          <button type="submit"
            className="text-white bg-green-500 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
            {editingUser ? "Update User" : "Add User"}
          </button>
          <button onClick={onClose} className="text-red-500 w-fit ml-2 bg-white hover:bg-red-500 hover:text-white border-2 border-gray-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Cancel</button>
        </form>
      </div>
    </>
  );
};

export default AddUserForm;
