import React from 'react';


export default function Toolbar(props) {

	return (

		<div className='filters'>
			{props.filters.map((f, i) =>
				<button
					className='filters-btn'
					key={i}
					onClick={() => props.onSelectFilter(f)}
					style={props.selected === f.name ? { backgroundColor: "grey" } : undefined}
				>
					{f.name}
				</button>)}
		</div>

	)

}


