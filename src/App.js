import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Auth from './Components/Auth';
import Home from './Components/Home';
import Navbar from './Components/Navbar'
import Footer from './Components/Footer';
// import Contact from './Components/Contact';
import About from './Components/About';
import RegisterAndLogin from './Components/PasswordLoginWithFirebase/RegisterAndLogin';
import HomeScreen from './Components/PasswordLoginWithFirebase/Home';
import ForgotPassword from './Components/PasswordLoginWithFirebase/ForgotPassword';
import NewsletterSignup from './Components/NewsLetterSignUp';
import FoodDonationForm from './Components/FoodDonationForm';
// import FoodComponent from './Components/PasswordLoginWithFirebase/FoodComponent';
// import Header from './Components/Layout/Header';
// import Cartall from './Cartall';
// import PasswordLoginWithFirebase from './Components/PasswordLoginWithFirebase/PasswordLoginWithFirebase';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<div><Navbar /><Home /><NewsletterSignup /><Footer /></div>}></Route>
          <Route path="/about" element={<div><Navbar /><About /><Footer /></div>}></Route>
          <Route path="/contact" element={<div><Navbar /><FoodDonationForm /></div>}></Route>

          <Route path="/admin" element={<div><Navbar /><RegisterAndLogin /></div>} />
          <Route path="/home" element={<HomeScreen/>} />
          <Route path="/reset" element={<ForgotPassword />} />


          <Route path="/login" element={<div><Navbar /><Auth /></div>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App