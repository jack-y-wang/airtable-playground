import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import MovieCard from './MovieCard';

interface Props {}

interface State {
	movie: Array<any>;
}

export default class App extends Component<Props, State> {
	constructor(props: Props) {
		super(props);

		this.state = {
			movie: []
		};
	}

	componentDidMount() {
		fetch('https://api.airtable.com/v0/appYZziMzzAsp8xx2/Favorites?api_key=YOUR_API_KEY')
			.then((resp) => resp.json())
			.then((data) => {
				this.setState({ movie: data.records });
			})
			.catch((err) => {
				// Error :(
			});
	}

	render() {
		return (
			<div className="container mt-5">
				<div className="row">
					<div className="col">
						<div className="card-deck">
							{this.state.movie.map((movie) => <MovieCard {...movie.fields} />)}
						</div>
					</div>
				</div>
			</div>
		);
	}
}
