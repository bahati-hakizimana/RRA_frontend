import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DivisionReport = () => {
  const [reports, setReports] = useState([]);

  const fetchReports = async () => {
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

      const res = await axios.get('http://127.0.0.1:8000/report/reports/', config);
      if (res.data) {
        setReports(res.data);
      } else {
        console.log("No reports found");
      }
    } catch (err) {
      console.error("Error fetching reports", err);
    }
  };

  const handleDownload = async () => {
    try {
      const userData = JSON.parse(sessionStorage.getItem('userData'));
      const accessToken = userData?.accessToken;

      if (!accessToken) {
        console.error("No access token found");
        return;
      }

      const config = {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/pdf',
        },
        responseType: 'blob' // Important to specify response type as blob for binary data
      };

      const res = await axios.get('http://127.0.0.1:8000/report/download/all/pdf/', config);
      const url = window.URL.createObjectURL(new Blob([res.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'report.pdf'); //or any other extension
      document.body.appendChild(link);
      link.click();
    } catch (err) {
      console.error("Error downloading report", err);
    }
  };

  useEffect(() => {
    fetchReports();
  }, []);

  return (
    <div>
      <h1 className="text-center text-black text-xl capitalize mb-4">Reports</h1>
      
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">Title</th>
              <th scope="col" className="px-6 py-3">Description</th>
              <th scope="col" className="px-6 py-3">Level</th>
              <th scope="col" className="px-6 py-3">Created Date</th>
            </tr>
          </thead>
          <tbody>
            {reports.length > 0 ? (
              reports.map((report) => (
                <tr key={report.id} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {report.title}
                  </th>
                  <td className="px-6 py-4">{report.description}</td>
                  <td className="px-6 py-4">{report.level}</td>
                  <td className="px-6 py-4">{new Date(report.created_date).toLocaleString()}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="px-6 py-4 text-center">No reports found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="flex justify-center mt-4">
        <button
          onClick={handleDownload}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Download Report
        </button>
      </div>
    </div>
  );
};

export default DivisionReport;
