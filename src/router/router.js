import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../pages/home/home";
import About from "../pages/about/about";
import Login from "../pages/login/login";
import Profile from "../pages/profile/profile";
import Cart from "../pages/cart/cart";
import NavbarMenu from "../components/navbar/navbar";

const Routers = () => {
	return (
		<BrowserRouter>
			<NavbarMenu />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="about" element={<About />} />
				<Route path="login" element={<Login />} />
				<Route path="profile" element={<Profile />} />
				<Route path="cart" element={<Cart />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Routers;
