import {
	Box,
	Button,
	Card,
	CardMedia,
	TextField,
	Typography,
} from "@mui/material";
import React from "react";
import { connect, useDispatch } from "react-redux";
import { searchMovies } from "../../store/api/searchMovies";
import * as types from "../../store/types";
import "./home.css";

const mapStateToProps = ({ movies }) => {
	return { movies };
};

const Home = connect(mapStateToProps)(({ movies }) => {
	const [searchValue, setSearchValue] = React.useState({});
	const dispatch = useDispatch();

	const getMovies = async (value) => {
		const data = await searchMovies(value);
		dispatch({ type: types.SET_SEARCH_MOVE, payload: data.Search });
	};

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
					onClick={() => getMovies(searchValue)}
				>
					Sök
				</Button>
			</div>
			<div>{/* <img src={movies.movies[0].Poster} alt="movieposter" /> */}</div>
		</Box>
	);
});

export default Home;
