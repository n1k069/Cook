import React from 'react'
import './dishCard.css'

export default function DishCards({ dishes }) {


	if (dishes) {
		return (
			<div
				className='cardFood'
				style={{
					backgroundImage: `url(${dishes.img})`,
					backgroundSize: 'cover',
				}}
			>
				<h1>{dishes.name}</h1>
				<h4>{dishes.descr}</h4>
			</div>
		)
	}

	return (
		<>
		</>
	)
}
