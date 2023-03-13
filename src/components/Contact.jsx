import React from 'react';
import { useState, useRef } from 'react';
import axios from 'axios';
import Wrapper from '/src/lib/Wrapper.jsx'
import styled from 'styled-components';
import Discussing from '/public/assets/discussing.png'
import PhoneIcon from '/public/assets/phone-icon.png'

const StyledBoxContainer = styled.div`
	z-index:30;
	position: relative;
	padding-top: 7rem;
`

const StyledDiscussingWrapper = styled.figure`
	position: absolute;
	z-index: 30;
	left: -22%;
	top: -34%;
`

const StyledFormContainer = styled.div`
	display: flex;
	flex-direction: row;
	gap: 2rem;
	margin-top: 13rem;
	margin-bottom: 5rem;
	padding: 8rem;
	border-radius: 30px;
	background-color: rgba(47, 47, 138, 0.6);
`

const StyledTextWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 280px;
	text-align: justify;
	margin: 0;

	h3 {
		margin: 0
	}

	p {
		margin-top: 1rem;
	}
`

const StyledContactWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	gap: 1rem;
`

const StyledContactInfo = styled.div`
	display: flex;

	span {
		display: flex;
		align-items: center;
		margin-left: 1rem;
	}

	figure {
		margin: 0;
	}
`


const StyledForm = styled.div`
	display: flex;
	flex-direction: column;
	width: 340px;
	gap: 1rem;
	border-radius: 30px;

	label {
		font-weight: 700;
	}

	input {
		border-radius: 10px;
		padding: 0.5rem;
	}

`
const StyledButton = styled.button`
	background: linear-gradient(96.4deg, #C961DE , #2F2F8A);
	color: #FFFFFF;
	width: 160px;
	border-radius: 10px;
	border: none;
	padding: 0.5rem;

	&:hover {
		cursor: pointer;
	}
`

const StyledMessage = styled.textarea`
	height: 175px;
	border-radius: 10px;
	resize: none;
	padding: 0.5rem;
`



const Contact = () => {
	const emailRef = useRef();
	const [email, setEmail]= useState('');
	const [message, setMessage]= useState('');


	// async function handleSubmit (event) {
	// 	event.preventDefault();
	// 	// const email = emailRef.current.value;

	// 	const data = new FormData(event.target)

	// 	try {
	// 		const response = await fetch('https://formspree.io/f/xzbqveew', {
	// 			method: 'POST',
	// 			body: data,
	// 			headers: {
	// 				Accept: 'application/json',
	// 			}
	// 		})
	// 		console.log(response);
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// }
		// const data = {
		// 	email: email,

		// }

		const handleSubmit = (e) => {
			e.preventDefault()
			const data = {
				email: email,
			}
			fetch('https://formspree.io/f/xzbqveew', {
				method: 'POST',
				headers: {
				'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			})
			.then((response) => {
			if (response.ok) {
				setEmail('');
				setMessage('');
				sentMessage('Mensaje enviado');
			} else {
				throw new Error('Error al enviar el mensaje');
			}
			})
			.catch((error) => {
			sentMessage(error.message);
			});
		};


	const handleEmailChange = (event) => {
		setEmail(event.target.value)
	}

	const handleMessageChange = (event) => {
		setMessage(event.target.value)
	}

	return(
		<Wrapper>
			<StyledBoxContainer>
				<StyledDiscussingWrapper>
					<img src={Discussing} alt="Discussing image" />
				</StyledDiscussingWrapper>
				<StyledFormContainer>
					<StyledTextWrapper>
						<h3>Get in touch</h3>
						<p>Feel free to contact me. You can do this by following me on my social media accounts, sending me an email or simply fill-up this inquiry form!</p>
						<StyledContactWrapper>
							<StyledContactInfo>
								<figure>
									<img src={PhoneIcon} alt="Telefono" />
								</figure>
								<span>+57 3125161742</span>
							</StyledContactInfo>
						</StyledContactWrapper>
						</StyledTextWrapper>
						<div>
							<form onSubmit={handleSubmit}>
								<StyledForm>
									<label>Send me a message</label>
										<input value={email} onChange={handleEmailChange} ref={emailRef} placeholder='youremail@emailservice.com' type="email" title='Please, make sure your email matches' required/>
										<StyledMessage type="text" value={message} onChange={handleMessageChange} wrap='hard' placeholder='Your message' required/>
										<StyledButton type='submit'>Send message</StyledButton>
								</StyledForm>
							</form>
						</div>
				</StyledFormContainer>
			</StyledBoxContainer>
		</Wrapper>


		)
	}


export default Contact;