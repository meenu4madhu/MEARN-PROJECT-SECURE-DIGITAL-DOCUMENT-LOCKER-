import React, { useEffect, useState } from 'react'
import AdminLayout from './AdminLayout'
import { FaUsers } from "react-icons/fa";
import {
  getAllAdminUsersAPI,
  getUsersStorageForAdminAPI
} from '../../services/allAPI';

function Userslist() {
  const [allUsers, setAllUsers] = useState([]);
  const [usersStorage, setUsersStorage] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    getAllUsers(token);
    getUsersStorage();
  }, []);

  // fetch storage of all users
  const getUsersStorage = async () => {
    try {
      const res = await getUsersStorageForAdminAPI();
      setUsersStorage(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  // get usedMB by email
  const getUsedMB = (email) => {
    const user = usersStorage.find(u => u.useremail === email);
    console.log(user);
    
    return user ? user.usedMB : 0;
  };

  // fetch all users
  const getAllUsers = async (token) => {
    try {
      const reqHeader = {
        Authorization: `Bearer ${token}`
      };

      const result = await getAllAdminUsersAPI(reqHeader);
      if (result.status === 200) {
        setAllUsers(result.data.users);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AdminLayout>
      <h2 className="text-4xl font-bold text-violet-600 mb-6 flex justify-center">
        <FaUsers className="me-2 text-violet-600 mt-1" /> Users
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {allUsers.map((user) => (
          <div
            key={user._id}
            className="flex items-center gap-4 p-4 bg-white/10 rounded-lg hover:bg-indigo-400/50 transition"
          >
            <div className="w-10 h-10 rounded-full bg-violet-600 flex items-center justify-center text-white font-bold">
              {user?.username?.charAt(0)}
            </div>

            <div>
              <p className="text-white font-medium">{user.username}</p>
              <p className="text-sm text-gray-400">{user.email}</p>
              <p className="text-sm text-violet-400">
                {getUsedMB(user.email)} MB used
              </p>
            </div>
          </div>
        ))}
      </div>
    </AdminLayout>
  );
}

export default Userslist;
