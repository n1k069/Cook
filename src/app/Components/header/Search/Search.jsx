import React, { useState } from 'react'
import './search.css'
import { iconSVG } from '../../../../api/iconsAPI'
import { food } from '../../../../api/foodAPI'
import SearchRenderCard from './SearchRenderCard'

export default function Search({ handleСlosures }) {
	const [renderCard, setrenderCard] = useState({ bool: false, item: '' })
	const allItems = Object.values(food).flat()

	const foodName = []
	for (let i in allItems) {
		foodName.push(allItems[i]) // Оборачиваем в массив
	}

	const displayOptions = e => {
		if (e.target.value !== '') {
			setrenderCard({ item: getOptions(e.target.value), bool: true })
		} else {
			setrenderCard({ bool: false })
		}
	}

	const getOptions = word => {
		return foodName.filter(s => {
			const regex = new RegExp(word, 'gi')
			return s.name.match(regex)
		})
	}
	return (
		<div className='searchContainer'>
			<div className='center'>
				<input type='text' placeholder='Найти блюдо' onKeyUp={displayOptions} />
				<div
					className='icon'
					dangerouslySetInnerHTML={{ __html: iconSVG.logoutGray }}
					onClick={handleСlosures}
				></div>
			</div>
			{console.log(renderCard)}
			{renderCard.bool ? (
				renderCard.item.length === 0 || renderCard.item === undefined ? (
					<h1>Ничего не найдено</h1>
				) : (
					renderCard.item.map(item =>
						item !== null ? (
							<SearchRenderCard item={item} key={item.name} />
						) : null
					)
				)
			) : null}
		</div>
	)
}
