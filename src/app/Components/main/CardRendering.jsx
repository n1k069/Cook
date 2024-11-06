import React, { useState } from 'react'
import './main.css'
import { food } from '../../../api/foodAPI'
import DishCards from './foodCards/DishCards'

export default function CardRendering() {
	const dishesArr = [
		'Дессерты',
		'Выпечка',
		'Салаты',
		'Супы',
		'Основные блюда',
		'Закуски',
		'Напитки',
		'Соусы',
	]

	const [selectedCategory, setSelectedCategory] = useState('dessert')

	const handleRenderDishes = e => {
		const content = e.target.textContent
		if (content === 'Дессерты') {
			setSelectedCategory('dessert')
		} else if (content === 'Выпечка') {
			setSelectedCategory('bakery')
		} else if (content === 'Салаты') {
			setSelectedCategory('salads')
		} else if (content === 'Супы') {
			setSelectedCategory('soups')
		} else if (content === 'Основные блюда') {
			setSelectedCategory('mainDishes')
		} else if (content === 'Закуски') {
			setSelectedCategory('snacks')
		} else if (content === 'Напитки') {
			setSelectedCategory('drinks')
		} else if (content === 'Соусы') {
			setSelectedCategory('sauces')
		}
	}
	const renderFoodItems = () => {
		if (selectedCategory === 'dessert') {
			return Object.values(food.dessert).map((item, index) => (
				<DishCards key={index} dishes={item} index={index} />
			))
		} else if (selectedCategory === 'bakery') {
			return Object.values(food.bakery).map((item, index) => (
				<DishCards key={index} dishes={item} index={index} />
			))
		} else if (selectedCategory === 'salads') {
			return Object.values(food.salads).map((item, index) => (
				<DishCards key={index} dishes={item} index={index} />
			))
		} else if (selectedCategory === 'soups') {
			return Object.values(food.soups).map((item, index) => (
				<DishCards key={index} dishes={item} index={index} />
			))
		} else if (selectedCategory === 'mainDishes') {
			return Object.values(food.mainDishes).map((item, index) => (
				<DishCards key={index} dishes={item} index={index} />
			))
		} else if (selectedCategory === 'snacks') {
			return Object.values(food.snacks).map((item, index) => (
				<DishCards key={index} dishes={item} index={index} />
			))
		} else if (selectedCategory === 'drinks') {
			return Object.values(food.drinks).map((item, index) => (
				<DishCards key={index} dishes={item} index={index} />
			))
		} else if (selectedCategory === 'sauces') {
			return Object.values(food.sauces).map((item, index) => (
				<DishCards key={index} dishes={item} index={index} />
			))
		}
	}
	return (
		<>
			<ul className='dishesList'>
				{dishesArr.map(button => (
					<li key={button}>
						<button onClick={e => handleRenderDishes(e)}>{button}</button>
					</li>
				))}
			</ul>
			{renderFoodItems()}
		</>
	)
}
