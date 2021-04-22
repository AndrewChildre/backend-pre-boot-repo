import React, { Component } from 'react';
import axios from 'axios'


// const fitnessinfo = () => {
// 	return (
// 		<div>
// 			<h1>Fitness Info</h1>
// 		</div>
// 	);
// };

class FitnessInfo extends Component {
	
	constructor(props) {
		super(props)

		this.state = {
			posts: []
		}
	}

	componentDidMount(){
		axios.get('http://localhost:8000/apiresults')
		.then(res => {
			this.setState({
				posts: res.data
			})
			console.log(res.data);
		})
	}

	render() {
		return (
			<div>
				<h1>List Fit</h1>
			</div>
		)
	}
	
	
}

export default FitnessInfo;