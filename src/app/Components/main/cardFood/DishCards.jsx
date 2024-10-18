import React, { useEffect, useState } from 'react'
import './dishCard.css'
import { iconSVG } from '../../../../api/iconsAPI'

export default function DishCards({ dishes }) {

	if (dishes) {
		return (
			<div
				className='cardFood'
				style={{
					backgroundImage: `url(${dishes.img})`,
					backgroundSize: 'cover',
					height: '270px',
					width: '280px',
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
