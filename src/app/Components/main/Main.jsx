import React, { useState } from 'react'
import Dishes from './CardRendering'
import DishCards from './foodCards/DishCards'
import { food } from '../../../api/foodAPI'
import { iconSVG } from '../../../api/iconsAPI'
import NavBar from './navBar/NavBar'
import DishDay from './blockWithDishDay/DishDay.jsx'
import Person from '../personBlock/Person.jsx'

export default function Main() {
	const [isPages, setIsPages] = useState('')
	const [homeActive, setHomeActive] = useState(true)
	const [personActive, setPersonActive] = useState('')

	const dishesArr = [
		'dessert',
		'bakery',
		'salads',
		'soups',
		'mainDishes',
		'snacks',
		'drinks',
		'sauces',
	]

	const generatorDayDish = usedDishes => {
		const randomNum = Math.floor(Math.random() * dishesArr.length)
		const randomDishKey = dishesArr[randomNum]

		// Удаляем использованную категорию
		usedDishes.push(randomDishKey)
		dishesArr.splice(randomNum, 1)

		const itemArray = Object.values(food[randomDishKey])
		const randomItemIndex = Math.floor(Math.random() * itemArray.length)

		return (
			<DishDay
				item={itemArray[randomItemIndex]}
				key={`${randomDishKey}-${itemArray[randomItemIndex]}`}
			/>
		)
	}
	const handleClickPerson = () => {
		setIsPages(true)
		setPersonActive(true)
		setHomeActive(false)
	}
	const handleClickHome = () => {
		setIsPages(false)
		setHomeActive(true)
		setPersonActive(false)
	}

	const usedDishes = [] // Массив для хранения использованных категорий
	return (
		<>
			{isPages ? (
				<>
					<Person />
					<NavBar
						handleClickPerson={handleClickPerson}
						handleClickHome={handleClickHome}
						homeActive={homeActive}
						personActive={personActive}
					/>
				</>
			) : (
				<>
					<div className='main'>
						<Dishes />
						<DishCards />
					</div>
					<div className='strike'></div>
					<h1 className='sectionsTitle'>
						Блюдо дня
						<div
							dangerouslySetInnerHTML={{ __html: iconSVG.soupKutchen }}
						></div>
					</h1>
					<div className='dayDishContainer'>
						{generatorDayDish(usedDishes)}
						{generatorDayDish(usedDishes)}
						{generatorDayDish(usedDishes)}
						{generatorDayDish(usedDishes)}
						{generatorDayDish(usedDishes)}
						{generatorDayDish(usedDishes)}
						{generatorDayDish(usedDishes)}
						{generatorDayDish(usedDishes)}
					</div>
					<NavBar
						handleClickPerson={handleClickPerson}
						handleClickHome={handleClickHome}
						homeActive={homeActive}
						personActive={personActive}
					/>
				</>
			)}
		</>
	)
}
