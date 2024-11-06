import React from 'react'

export default function SearchRenderCard({ item }) {
	return (
		<span className='searchCards'>
			<div className='img'
				style={{
					backgroundImage: `url(${item.img})`,
					backgroundSize: 'cover',
				}}
			></div>
			<div>
				<h1>{item.name}</h1>
			</div>
		</span>
	)
}
