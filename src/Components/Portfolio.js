import React from 'react';
import ProjectList from './ProjectList';
import Toolbar from './Toolbar';


export default class Portfolio extends React.Component {

	constructor(props) {
		super(props)

		this.state = {
			selected: null,
		}
	}

	onSelectFilter = (filter) => this.setState({ selected: filter.name })

	project = () => this.props.buisnessCards.filter(e => {
		if (this.state.selected === null) {
			return e.category
		} else if (this.state.selected === 'All') {
			return e.category
		} else {
			return e.category === this.state.selected
		}
	})



	render() {
		return (

			<div className='wrapper'>
				<div className='container'>
					<Toolbar
						filters={this.props.filters}
						onSelectFilter={this.onSelectFilter}
						selected={this.state.selected}
					/>
					<ProjectList
						project={this.project()}
					/>
				</div>
			</div>
		)

	}

}

