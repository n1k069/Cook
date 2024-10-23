import React from 'react'
import './navBar.css'
import { iconSVG } from '../../../../api/iconsAPI'


export default function NavBar() {
	return (
		<div className='navBar'>
			<button><div dangerouslySetInnerHTML={{ __html: iconSVG.home}}></div>Home</button>
			<button><div dangerouslySetInnerHTML={{__html: iconSVG.skillet}}></div></button>
			<button>4321</button>
			<button>3442</button>
		</div>
	)
}
