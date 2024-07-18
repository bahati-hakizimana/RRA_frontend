
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function DoctorInsuranceMember() {
  const [institutionData, setInstitutionData] = useState([]);
  const [filter, setFilter] = useState('all'); // Added state for filter

  const handleFetch = async () => {
    try {
      const res = await axios.get('http://127.0.0.1:8000/institution/view_all_institutions/');
      if (res.data) {
        setInstitutionData(res.data); // Adjusted to match the example response structure
      } else {
        console.log("error listing institutions");
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    handleFetch();
  }, []);

  const handleFilterChange = (e) => {
    setFilter(e.target.value); // Update filter state when filter changes
  };

  const filteredData = institutionData.filter(institution => 
    filter === 'all' || institution.type.toLowerCase() === filter.toLowerCase()
  ); // Filter data based on filter state



  const handleDelete = async (id) => {
    const conf = window.confirm("Do you want to delete this institution?");
    if (conf) {
      try {
        const res = await axios.delete('http://127.0.0.1:8000/institution/delete_institution/' +id);
        if (res.status === 204) { // Assuming 204 No Content on successful delete
          alert("Institution deleted successfully");
          setInstitutionData(previnstitutionData => previnstitutionData.filter(institution => institution.id !== id)); // Update state to remove deleted user
        } else {
          alert("Successfull to delete institution");
        }
      } catch (err) {
        console.error("Error deleting institution", err);
        alert("An error occurred while deleting the institution");
      }
    }
  };

  return (
    <>
      <h1 className='text-center text-black text-xl capitalize mb-4'>Insurance Member</h1>
      <div className="flex justify-between mb-4">
        {/* <div>
          <select onChange={handleFilterChange} value={filter} className="px-4 py-2 bg-white text-black border rounded-full">
            <option value="all">All</option>
            <option value="private">Private</option>
            <option value="public">Public</option>
          </select>
        </div> */}
        {/* <Link to="/doctor/addinsuranceMember" className="px-4 py-2 bg-purple-400 text-white rounded-full hover:bg-gray-500 hover:text-white">Add Insurance Member</Link> */}
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">Firstname</th>
              <th scope="col" className="px-6 py-3">Lastname</th>
              <th scope="col" className="px-6 py-3">Telephone</th>
              <th scope="col" className="px-6 py-3">Insurance</th>
              <th scope="col" className="px-6 py-3">Created Date</th>
              {/* <th scope="col" className="px-6 py-3">Action</th> */}
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((institution, index) => (
                <tr key={index} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {institution.name}
                  </th>
                  {/* <td className="px-6 py-4">{institution.type}</td> */}
                  <td className="px-6 py-4">{institution.created_at}</td>
                  <td className="px-6 py-4">
                  <button
                      onClick={() => handleDelete(institution.id)}
                      className="px-2 py-2 rounded-xl bg-gray-700 text-white"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="px-6 py-4 text-center">No Insurance found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default DoctorInsuranceMember;


