import React from 'react'
import './search.css'
import { iconSVG } from '../../../../api/iconsAPI'

export default function Search() {
	return (
		<div className='searchContainer'>
			<div className='center'>
				<input type='text' placeholder='Найти блюдо' />
				<div
					className='icon'
					dangerouslySetInnerHTML={{ __html: iconSVG.searchGray }}
				></div>
				<div
					className='icon'
					dangerouslySetInnerHTML={{ __html: iconSVG.logoutGray }}
				></div>
			</div>
		</div>
	)
}
