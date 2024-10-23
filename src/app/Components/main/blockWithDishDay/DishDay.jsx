import React from 'react'
import './dishDay.css'

export default function DishDay({item}) {
  return (
		<div className='dishDay'>
			<div
				className='dishDayTitle'
				style={{
					backgroundImage: `url(${item.img})`,
					backgroundSize: 'cover',
				}}
			>
			<h1>{item.name}</h1>
			</div>
		</div>
	)
}
