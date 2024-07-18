import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout.jsx";
import Login from "./components/auth/Login.jsx";
import Register from "./components/auth/Register.jsx";
import Layout from "./components/admin/Layout.jsx";
import Home from './components/pages/Home.jsx';
import Users from './components/admin/pages/Users.jsx';
import Pdf from './components/pages/Pdf.jsx';
import Excell from './components/pages/Excell.jsx';
import Unity_User_Layout from './components/unityuser/Unity_User_Layout.jsx'
import UnityReport from "./components/unityuser/pages/UnityReport.jsx";

// import SendComment from "./components/pages/addComment.jsx";
//Organizer



// user

import User_Layout from './components/user/User_Layout.jsx';
import EditUsers from "./components/pages/EditUsers.jsx";
import AddInstitutions from "./components/pages/AddInsurance.jsx";
import UserPolicy from "./components/pages/UserPolicy.jsx";
import ResetPassword from "./components/auth/ResetPassword.jsx";
// import Reports from "./components/admin/pages/AdminReports.jsx";
import CreateReport from "./components/admin/pages/CreateUser.jsx";
import CreateUnityReport from "./components/unityuser/pages/CreateUnityReport.jsx";
import AdminReports from "./components/admin/pages/AdminReports.jsx";
import ReportsList from "./components/user/pages/ReportsList.jsx";
import ReportCreate from "./components/user/pages/ReportCreate.jsx";
import CreateUser from "./components/admin/pages/CreateUser.jsx";
import Dipartiment_Layout from "./components/headofdepartment/dipartiment_Layout.jsx";
import DipartmentReport from "./components/headofdepartment/pages/DipartmentReport.jsx";
import CreateDipartimentReport from "./components/headofdepartment/pages/CreateDipartimentReport.jsx";
import Division_Layout from "./components/headofdivision/division_User_Layout.jsx";
import CreateDivisionReport from "./components/headofdivision/pages/CreateDivisionReport.jsx";
import DivisionReport from "./components/headofdivision/pages/DivisionReport.jsx";
import UpdateUser from "./components/admin/pages/UpdateUser.jsx";


const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in",
      delay: 100,
    });


    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-black dark:text-white text-black overflow-x-hidden">
      <BrowserRouter>
        <Routes>

          {/* Home view */}
          <Route path="/" element={<MainLayout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/passwordreset"  element={<ResetPassword />} />

           {/* End Home view */}

            {/* Admin */}

          <Route path="/admin" element={<Layout />} >
            <Route index element={<Home />} />
            <Route path="/admin/users" element={<Users />} />
            <Route path="/admin/pdf" element={<Pdf />} />
            <Route path="/admin/excel" element={<Excell />} />
            <Route path="/admin/reports" element={<AdminReports />} />
            <Route path="/admin/createuser" element={<CreateUser />} />
            <Route path="/admin/edituser/:id" element={<UpdateUser />} />
      
            </Route>

            {/* User Unity */}

            <Route path="/unityuser" element={<Unity_User_Layout />}>
            <Route path="/unityuser/reports" element={<UnityReport />} />
            <Route path="/unityuser/createreport" element={<CreateUnityReport />} />
            </Route>
            {/* User */}
             <Route path="/departement" element={<Dipartiment_Layout />}>
             <Route path="/departement/report" element={<DipartmentReport />} />
             <Route path="/departement/createreport" element={<CreateDipartimentReport  />} />
             </Route>

             <Route path="/division" element={<Division_Layout />}>
             <Route path="/division/createreport" element={<CreateDivisionReport />} />
             <Route path="/division/divisionreport" element={<DivisionReport />} />
             </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
