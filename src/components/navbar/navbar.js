import { MdPerson } from "react-icons/md";
import React from "react";
import { Link } from "react-router-dom";
import { Button, IconButton, Toolbar, Typography } from "@mui/material";
import "./navbar.css";

const NavbarMenu = () => {
	return (
		<div className="headerContainer">
			<Toolbar className="headerContent">
				<Typography variant="h6" sx={{ fontWeight: "bold" }}>
					Lorem
				</Typography>
				<Button
					size="large"
					component={Link}
					to="/"
					sx={{ color: "#FFFFFF", fontWeight: "bold" }}
				>
					Home
				</Button>
				<Button
					size="large"
					component={Link}
					to="about"
					sx={{ color: "#FFFFFF", fontWeight: "bold" }}
				>
					About
				</Button>
				<IconButton
					size="large"
					component={Link}
					to="profile"
					sx={{ color: "#FFFFFF" }}
				>
					<MdPerson />
				</IconButton>
			</Toolbar>
		</div>
	);
};

export default NavbarMenu;
