import React, { useState, useEffect } from 'react'
import './header.css'
import { iconSVG } from '../../../api/iconsAPI'
export default function Header({ handleSearch }) {
	const [personName, setPersonName] = useState(null)

	useEffect(() => {
		const personNameStorage = localStorage.getItem('personData')
		const registeredBool = localStorage.getItem('registeredBool')
		if (registeredBool !== null) {
			if (personNameStorage) {
				const personData = JSON.parse(personNameStorage)
				setPersonName(`Привет ${personData.name}... 👋`)
			} else {
				setPersonName('Войдите в профиль...')
			}
		} else {
			setPersonName('Войдите в профиль...')
		}
	}, [])

	return (
		<div className='header'>
			<h5>{personName}</h5>
			<h2>
				Cook Like a <span className='blue'>Chef</span>
			</h2>
			<div className='btn'>
				<div
					dangerouslySetInnerHTML={{ __html: iconSVG.search }}
					onClick={handleSearch}
				></div>
			</div>
		</div>
	)
}
