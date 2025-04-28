import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Landing from './pages/Landing';
import Login from './components/User/Login';
import Register from './components/User/Register';
import UserHome from './components/User/UserHome';
import Profile from './components/User/Profile';
import ProfileEdit from './components/User/ProfileEdit';
import ProductList from './components/User/ProductList';
import AdminLogin from './components/admin/AdminLogin';
import AdminDashboard from './components/admin/AdminDashboard';
import AdminSwappersList from './components/admin/AdminSwappersList';
import OrganizationHome from './components/organization/OrganizationHome';
import AdminLayout from './layouts/AdminLayout';
import UserNavbar from './components/User/UserNav';
import OrganizationLogin from './components/organization/OrganizationLogin';
import OrganizationRegister from './components/organization/OrganizationRegister';
import ForgetPassword from './components/User/ForgetPassword';
import OrganaizationForgetPassword from "./components/organization/OrganaizationForgetPassword"
import UserHomePage from './components/User/UserHomePage';
import OrganisationAddProduct from './components/organization/OrganizationAddproduct';
import Additem from "./components/User/Additem"

import AdminSidebar from './components/admin/AdminSidebar';
import OrganizationSidebar from './components/organization/OrganizationSidebar';
import OrganizationProfileEdit from './components/organization/OrganizationProfileEdit';
import OrganizationProfile from './components/organization/OrganizationProfile';
import Pnf from './pages/Pnf';
import Category from './components/User/Category';
import Wishlist from './components/User/Wishlist';
import Viewitem from './components/User/Viewitem';
import Myorder from './components/User/myorder';
import RequestsSwap from './components/User/RequestsSwap';
import RequestsExchange from './components/User/RequestsExchange';
import RequestsBorrow from './components/User/RequestsBorrow';
import { Inbox } from 'lucide-react';
import SubmitComplaint from './components/User/Complaints';
function App() {
  const url = 'http://localhost:8000';

  return (
    <Router>
      <Routes>
        <Route path="/" element={[<Navbar />, <Landing />, <Footer />]} />

        <Route path="/user/login" element={[<Navbar />, <Login />, <Footer />]} />
        <Route path="/user/register" element={[<Navbar />, <Register />, <Footer />]} />
        <Route path="/user/forgetpassword" element={[<Navbar />, <ForgetPassword />, <Footer />]} />
        <Route path="/user/home" element={[<UserNavbar />, <UserHome />, <Footer />]} />
        <Route path="/user/homepage" element={[<UserNavbar />, <UserHomePage />, <Footer />]} />
        <Route path="/user/profile" element={[<UserNavbar />, <Profile url={url} />, <Footer />]} />
        <Route path="/user/profileedit" element={[<UserNavbar />, <ProfileEdit url={url}/>, <Footer />]} />
        <Route path="/user/category/category" element={[<UserNavbar />,<Category/>, <Footer />]} />
        <Route path="/user/category/additem" element={[<UserNavbar />,<Additem/>]} />
        <Route path="/user/category/wishlist" element={[<UserNavbar />,<Wishlist/>]} />
        <Route path="/user/category/viewitem" element={[<UserNavbar />,<Viewitem/>]} />
        <Route path="/user/myorder" element={[<UserNavbar />,<Myorder/>]} />
        <Route path="/user/requests/swap" element={[<UserNavbar />,<RequestsSwap/>]} />
        <Route path="/user/requests/exchange" element={[<UserNavbar />,<RequestsExchange/>]} />
        <Route path="/user/requests/borrow" element={[<UserNavbar />,<RequestsBorrow/>]} />
        <Route path="/user/inbox" element={[<UserNavbar />,<Inbox/>]} />
        <Route path="/user/complaints" element={[<UserNavbar />,<SubmitComplaint/>]} />


        <Route path="/admin/login" element={[<Navbar />, <AdminLogin />, <Footer />]} />
        <Route path="/admin" element={[<AdminLayout />, <Footer />]}>
          <Route path='/admin/dashboard' element={<AdminDashboard />} />
          <Route path="/admin/swappers" element={<AdminSwappersList />} />
        </Route>

        <Route path='/organization/login' element={[<Navbar />, <OrganizationLogin />, <Footer />]} />
        <Route path='/organization/register' element={[<Navbar />, <OrganizationRegister />, <Footer />]} />
        <Route path="/organization/forgetpassword" element={[<Navbar />, <OrganaizationForgetPassword />, <Footer />]} />

          <Route path='/organization/dashboard' element={[<OrganizationHome />, <Footer />]} />
          <Route path="/organization/addproduct" element={[<OrganisationAddProduct />, <Footer />]} />
          <Route path='/organization/profile' element={[<OrganizationProfile url={url} />, <Footer />]} />
          <Route path="/organization/profileedit" element={[<OrganizationProfileEdit url={url} />, <Footer />]} />
          <Route path="/*" element={<Pnf/>} />
      </Routes>
    </Router>
  );
}

export default App;