import React, { useState } from 'react'
import Header from './app/Components/header/Header'
import Main from './app/Components/main/Main'
import './style/index.css'
import Search from './app/Components/header/Search/Search.jsx'

export default function App() {
	const [isSearch, setIsSearch] = useState(false)

	const handleSearch = () => {
		setIsSearch(true)
	}
  const handleСlosures = () => {
    setIsSearch(false)
  }
	return (
		<>
			{isSearch ? (
				<Search handleСlosures={handleСlosures} />
			) : (
				<div className='container'>
					<Header handleSearch={handleSearch} />
					<Main />
				</div>
			)}
		</>
	)
}
