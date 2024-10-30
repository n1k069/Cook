import React from 'react'
import './navBar.css'
import { iconSVG } from '../../../../api/iconsAPI'

export default function NavBar({
	handleClickPerson,
	handleClickHome,
	personActive,
	homeActive,
}) {
	const handleCheckActivePerson = () => {
		setTimeout(() => handleClickPerson(), 100)
	}

	const handleCheckActiveHome = () => {
		setTimeout(() => handleClickHome(), 100)
	}
	return (
		<div className='navBar'>
			<button
				className={homeActive ? 'isActive' : undefined}
				onClick={handleCheckActiveHome}
			>
				<div dangerouslySetInnerHTML={{ __html: iconSVG.home }}></div>
				{homeActive ? 'Home' : ''}
			</button>
			<button
				className={personActive ? 'isActive' : undefined}
				onClick={handleCheckActivePerson}
			>
				<div dangerouslySetInnerHTML={{ __html: iconSVG.person }}></div>
				{personActive ? 'Person' : ''}
			</button>
		</div>
	)
}
