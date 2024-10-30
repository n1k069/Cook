import React, { useEffect, useState } from 'react'
import './person.css'
import { iconSVG } from '../../../api/iconsAPI'

export default function Person() {
	const registeredBool = localStorage.getItem('registeredBool')
	// state
	const [registered, setRegistered] = useState(registeredBool)
	const [errorTextAlert, setErrorTextAlert] = useState({
		hasError: false,
		message: '',
		color: false,
	})
	const [formToogle, setFormToogle] = useState(true)
	const [name, setName] = useState('')
	const [password, setPassword] = useState('')
	const [repeatPaswword, setRepeatPaswword] = useState('')

	// обработчики
	const handleClickIn = () => {
		setFormToogle(true)
	}
	const handleClickUp = () => {
		setFormToogle(false)
	}

	const handleKeyName = e => {
		setName(e.target.value)
	}
	const handleKeyPassword = e => {
		setPassword(e.target.value)
	}
	const handleClickRepeatPaswword = e => {
		setRepeatPaswword(e.target.value)
	}

	const handleRegister = () => {
		// Если SignUp
		if (!formToogle) {
			// проверка на заполненость
			if (
				name === '' ||
				password === '' ||
				repeatPaswword === '' ||
				(name === '') & (password === '') ||
				(password === '') & (repeatPaswword === '') ||
				(name === ' ') & (repeatPaswword === '')
			) {
				setErrorTextAlert({
					hasError: true,
					message: `Не оставляете поля не заполнеными!`,
					color: false,
				})
				disablingText()
			} else {
				//---------------------------------------------------

				// Проверка на совпадение паролей
				if (repeatPaswword !== password) {
					setErrorTextAlert({
						hasError: true,
						message: `Пароли не совпадают`,
						color: false,
					})
					disablingText()
				} else {
					const personData = {
						name: name,
						password: password,
						repeatPaswword: repeatPaswword,
					}

					localStorage.setItem('personData', JSON.stringify(personData))
					setRegistered(true)
					localStorage.setItem('registeredBool', registered)
				}
			}
			//---------------------------------------------------

			// Если SignIn
		} else {
			// Проверка на заполненость
			if (name === '' || password === '' || (name === '') & (password === '')) {
				setErrorTextAlert({
					hasError: true,
					message: `Не оставляете поля не заполнеными!`,
					color: false,
				})
				disablingText()
			} else {
				//---------------------------------------------------

				// Если зарегестрирован
				const personData = localStorage.getItem('personData')
				if (personData) {
					const personDataJson = JSON.parse(personData)

					if (
						personDataJson.name === name &&
						personDataJson.password === password
					) {
						localStorage.setItem('registeredBool', registered)
						reload()
						setTimeout(() => {
							setRegistered(true)
						}, 100)
					} else {
						setErrorTextAlert({
							hasError: true,
							message: `Неверный логин или пароль`,
							color: false,
						})
						disablingText()
					}
				}
			}
			//---------------------------------------------------
		}
	}

	const handleRemovePersonData = () => {
		localStorage.removeItem('registeredBool')
		setRegistered(false)
		reload()
	}
	const reload = () => {
		setTimeout(() => {
			window.location.reload()
		}, 20)
	}

	const disablingText = () => {
		setTimeout(() => {
			setErrorTextAlert({
				hasError: false,
				message: '',
			})
		}, 1000)
	}
	return (
		<>
			{registered ? (
				<div className='registeredForm'>
					<h1>Вы успешно зарегестрированы</h1>
					<button onClick={handleRemovePersonData}>
						{' '}
						Выйти из профиля{' '}
						<div dangerouslySetInnerHTML={{ __html: iconSVG.logout }}></div>
					</button>
				</div>
			) : (
				<div className='personRegForm'>
					<div className='btn-row'>
						<button
							className={formToogle ? 'active' : undefined}
							onClick={handleClickIn}
						>
							Sign In
						</button>
						<button
							className={formToogle ? undefined : 'active'}
							onClick={handleClickUp}
						>
							Sign Up
						</button>
					</div>
					<h1>{formToogle ? 'Sign In' : 'Sign Up'}</h1>

					{formToogle ? (
						<div className='inputForm'>
							<input type='name' placeholder='name' onChange={handleKeyName} />
							<input
								type='password'
								placeholder='password'
								onChange={handleKeyPassword}
							/>
							{errorTextAlert.hasError && (
								<h4
									className={
										errorTextAlert.color ? 'text animate' : 'errText animate'
									}
								>
									{errorTextAlert.message}
								</h4>
							)}
						</div>
					) : (
						<div className='inputForm'>
							<input type='text' placeholder='name' onChange={handleKeyName} />
							<input
								type='password'
								placeholder='password'
								onChange={handleKeyPassword}
							/>
							<input
								type='password'
								placeholder='repeat password'
								onChange={handleClickRepeatPaswword}
							/>
							{errorTextAlert.hasError && (
								<h4
									className={
										errorTextAlert.color ? 'text animate' : 'errText animate'
									}
								>
									{errorTextAlert.message}
								</h4>
							)}
						</div>
					)}

					<button className='reg-btn' onClick={handleRegister}>
						{formToogle ? 'Sign In' : 'Sign Up'}
					</button>
				</div>
			)}
		</>
	)
}
