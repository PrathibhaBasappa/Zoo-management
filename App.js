import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Component/Home';
import Registration from './Component/Registration';
import Login from './Component/Login';
import AdminDashboard from './Component/AdminDashboard';
import Category from './Component/Category';
import Type from './Component/Type';
import Incharge from './Component/Incharge';
import Animals from './Component/Animals';
import Doctors from './Component/Doctors';
import { ToastContainer, toast } from "react-toastify";
import InchargeDahsboard from './Component/InchargeDahsboard';
import ViewAnimals from './Component/ViewAnimals';
import AnimalHealth from './Component/AnimalHealth';
import InchargeProfile from './Component/InchargeProfile';
import InchargePasswordUpdate from './Component/InchargePasswordUpdate';
import DoctorDashboard from './Component/DoctorDashboard';
import AnimalHealthCheck from './Component/AnimalHealthCheck';
import ViewHealthDetails from './Component/ViewHealthDetails';
import ApproveUsers from './Component/ApproveUsers';
import UserDashboard from './Component/UserDashboard';
import AdopAnimals from './Component/AdopAnimals';
import ApproveAdoptAnimal from './Component/ApproveAdoptAnimal';
import ViewAdoptedAnimals from './Component/ViewAdoptedAnimals';
import Feedback from './Component/Feedback';
import ViewFeedback from './Component/ViewFeedback';
import UpdateAdminPassword from './Component/UpdateAdminPassword';
import UpdateUserPassword from './Component/UpdateUserPassword';
import UpdateDoctorPassword from './Component/UpdateDoctorPassword';
import UpdateUserProfile from './Component/UpdateUserProfile';
import Doctorprofile from './Component/Doctorprofile';
import ViewAllAnimals from './Component/ViewAllAnimals';
import ViewAdopteddetails from './Component/ViewAdopteddetails';
import AdoptAnimalCharges from './Component/AdoptAnimalCharges';

function App() {
  return (
    <div>
      <BrowserRouter>
        <ToastContainer position='top-center' />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Registration' element={<Registration />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/ViewAllAnimals' element={<ViewAllAnimals />} />

          <Route path='AdminDashboard' element={<AdminDashboard />}>
            <Route path='Category' element={<Category />} />
            <Route path='Type' element={<Type />} />
            <Route path='Incharge' element={<Incharge />} />
            <Route path='Animals' element={<Animals />} />
            <Route path='AdoptAnimalCharges' element={<AdoptAnimalCharges />} />
            <Route path='Doctors' element={<Doctors />} />
            <Route path='ApproveUsers' element={<ApproveUsers />} />
            <Route path='ViewFeedback' element={<ViewFeedback />} />
            <Route path='UpdateAdminPassword' element={<UpdateAdminPassword />} />
          </Route>

          <Route path='InchargeDahsboard' element={<InchargeDahsboard />}>
            <Route path='ViewAnimals' element={<ViewAnimals />} />
            <Route path='AnimalHealth' element={<AnimalHealth />} />
            <Route path='ApproveAdoptAnimal' element={<ApproveAdoptAnimal />} />

            <Route path='InchargeProfile' element={<InchargeProfile />} />
            <Route path='InchargePasswordUpdate' element={<InchargePasswordUpdate />} />
            <Route path='ViewAdopteddetails' element={<ViewAdopteddetails />} />
          </Route>

          <Route path='DoctorDashboard' element={<DoctorDashboard />}>
            <Route path='AnimalHealthCheck' element={<AnimalHealthCheck />} />
            <Route path='ViewHealthDetails' element={<ViewHealthDetails />} />
            <Route path='UpdateDoctorPassword' element={<UpdateDoctorPassword />} />
            <Route path='Doctorprofile' element={<Doctorprofile />} />

          </Route>
          <Route path='UserDashboard' element={<UserDashboard />}>
            <Route path='AdopAnimals' element={<AdopAnimals />} />
            <Route path='ViewAdoptedAnimals' element={<ViewAdoptedAnimals />} />
            <Route path='Feedback' element={<Feedback />} />
            <Route path='UpdateUserPassword' element={<UpdateUserPassword />} />
            <Route path='UpdateUserProfile' element={<UpdateUserProfile />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
