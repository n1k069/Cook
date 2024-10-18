import React from 'react'
import Dishes from './Dishes'
import DishCards from './cardFood/DishCards'

export default function Main() {
  return (
		<div className='main'>
			<Dishes />
			<DishCards />
		</div>
	)
}
