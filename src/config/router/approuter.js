import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admin_Hotel from "../../Pages/componentHotel/Admin_Hotel";
import FormHotel from "../../Pages/componentHotel/FormHotel";
import Mainpage from "../../Pages/componentHotel/Home";
import Home from "../../Pages/home";
 import LoginUser from '../../Pages/login' 
import SignUpUser from "../../Pages/signup";
import Hotel_nature from "../../Pages/componentHotel/hotel_nature";
import Offers from "../../Pages/componentHotel/offers_Hotel";
import FoodHotel from "../../Pages/componentHotel/Food_hotel";
import ContactHotel from "../../Pages/componentHotel/ContactHotel";
import FooterHotel from "../../Pages/componentHotel/FooterHotel";
import AdminAdd from "../../Pages/componentHotel/AdminAdd";
import AdminHotelList from "../../Pages/componentHotel/AdminHotelList";
import About from "../../Pages/componentHotel/About";
import Services from "../../Pages/componentHotel/Services";
import Form from "../../Pages/componentHotel/EditForm/Form";
import ExtraCard from "../components/ExtraCard";
import MultipleItems from "../components/reactSlider";
import Admindata from "../../Pages/componentHotel/AdminCardRender/admindata";
import AdminForm from "../../Pages/componentHotel/AdminCardRender/AdminEditForm";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="login" element={<LoginUser />} />
        <Route path="signup" element={<SignUpUser />} />
        <Route path="home" element={<Home />} />
        <Route path="formhotel" element={<FormHotel />} />
        <Route path="admin" element={<Admin_Hotel />} />
        <Route path="header" element={<Hotel_nature />} />
        <Route path="offer" element={<Offers />} />
        <Route path="food" element={<FoodHotel/>} />
        <Route path="contact" element={<ContactHotel/>} />
        <Route path="footer" element={<FooterHotel/>} />
        <Route path="add" element={<AdminAdd/>} />
        <Route path="adminlist" element={<AdminHotelList/>} />
        <Route path="form" element={<Form/>} />
        <Route path="extra" element={<ExtraCard/>} />
        <Route path="slider" element={<MultipleItems/>} />
        <Route path="admincard" element={<Admindata/>} />
        <Route path="adminform" element={<AdminForm/>} />
      </Routes>
    </Router>
  );
}
