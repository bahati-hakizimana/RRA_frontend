import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Users() {
  const [userData, setUserData] = useState([]);

  const handleFetch = async () => {
    try {
      // Retrieve access token from session storage
      const userData = JSON.parse(sessionStorage.getItem('userData'));
      const accessToken = userData?.accessToken;

      if (!accessToken) {
        console.error("No access token found");
        return;
      }

      // Set up the authorization header
      const config = {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      };

      // Make the request to fetch all users
      const res = await axios.get('http://127.0.0.1:8000/users/', config);
      if (res.data) {
        setUserData(res.data);
      } else {
        console.log("Error listing users");
      }
    } catch (err) {
      console.error("Error fetching users", err);
    }
  };

  useEffect(() => {
    handleFetch();
  }, []);

  const handleDelete = async (id) => {
    const conf = window.confirm("Do you want to delete this user?");
    if (conf) {
      try {
        const userData = JSON.parse(sessionStorage.getItem('userData'));
        const accessToken = userData?.accessToken;

        if (!accessToken) {
          console.error("No access token found");
          return;
        }

        const config = {
          headers: {
            'Authorization': `Bearer ${accessToken}`
          }
        };

        const res = await axios.delete(`http://127.0.0.1:8000/delete/${id}/`, config);
        if (res.status === 204) { // Assuming 204 No Content on successful delete
          alert("User deleted successfully");
          setUserData(prevUserData => prevUserData.filter(user => user.id !== id));
        } else {
          alert("Failed to delete user");
        }
      } catch (err) {
        console.error("Error deleting user", err);
        alert("An error occurred while deleting the user");
      }
    }
  };

  return (
    <>
      <h1 className='text-center text-black text-xl capitalize mb-4'>Users</h1>
      <div className=' flex justify-end mb-4'>
        <Link to="/admin/createuser" className=' px-4 py-1 rounded-lg bg-black text-white'>Create User</Link>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">First Name</th>
              <th scope="col" className="px-6 py-3">Last Name</th>
              <th scope="col" className="px-6 py-3">Email</th>
              <th scope="col" className="px-6 py-3">Phone</th>
              {/* <th scope="col" className="px-6 py-3">Username</th> */}
              <th scope="col" className="px-6 py-3">Role</th>
              <th scope="col" className="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {userData.length > 0 ? (
              userData.map((user, index) => (
                <tr key={index} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {user.first_name}
                  </th>
                  <td className="px-6 py-4">{user.last_name}</td>
                  <td className="px-6 py-4">{user.email}</td>
                  <td className="px-6 py-4">{user.phone}</td>
                  {/* <td className="px-6 py-4">{user.username}</td> */}
                  <td className="px-6 py-4">{user.role}</td>
                  <td className="px-6 py-4">
                    <Link to={`/admin/edituser/${user.id}`} className=' px-4 py-2'>Edit</Link>
                    <button
                      onClick={() => handleDelete(user.id)}
                      className="px-2 py-2 rounded-xl bg-gray-700 text-white"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="px-6 py-4 text-center">No users found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Users;
