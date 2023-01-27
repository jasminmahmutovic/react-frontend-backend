import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { searchMovies } from "../../store/api/searchMovies";
import * as movieActions from "../../store/api/searchMovies";
import "./home.css";

const mapStateToProps = ({ movies }) => {
	return { movies };
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ ...movieActions }, dispatch);
};

const Home = connect(
	mapStateToProps,
	mapDispatchToProps
)(({ movies }) => {
	const [searchValue, setSearchValue] = React.useState({
		movieTitle: "",
	});

	return (
		<Box>
			<h1>Home</h1>
			<div className="imgContainer">
				<img
					src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1325&q=80"
					alt="clothes"
				/>
			</div>
			<div className="homeContent">
				<Typography variant="h3">Sök efter en film</Typography>
				<TextField
					sx={{
						input: {
							color: "#FFFFFF",
						},
						label: {
							color: "#FFFFFF",
						},
						fieldSet: {
							borderColor: "#FFFFFF",
						},
					}}
					fullWidth
					label="Sök"
					id="searchValue"
					onChange={(e) => setSearchValue(e.target.value)}
				/>
				<Button
					fullWidth
					color="success"
					variant="contained"
					sx={{ fontWeight: "bold" }}
					onClick={() => searchMovies(searchValue)}
				>
					Sök
				</Button>
			</div>
		</Box>
	);
});

export default Home;
