import React from 'react';

export default function ProjectList(props) {

	return (

		<div className='cards'>
			{props.project.map((card, i) =>
				<img
					key={i}
					src={card.img}
				/>
			)}
		</div>

	)

}