import React, { useState } from 'react'
import './header.css'
import { iconSVG } from '../../../api/iconsAPI'
export default function Header() {
	const [personName, setPersonName] = useState(null)
	return (
		<div className='header'>
			<h5>{`Привет ${personName}... 👋`}</h5>
			<h2>
				Cook Like a <span className='blue'>Chef</span>
			</h2>
			<div className='btn'>
				<div dangerouslySetInnerHTML={{ __html: iconSVG.search }}></div>
				<div dangerouslySetInnerHTML={{ __html: iconSVG.menu }}></div>
			</div>
		</div>
	)
}
