import styled from 'styled-components'

export const Container= styled.div`
	width: 1290px;
	height: auto;
	margin: 0 auto;
	display: block;
	
	@media(max-width: ${({theme}) => theme.desktop}) {
		width: 88%;
	}

	@media(max-width: ${({theme}) => theme.tablet}) {
		width: 80%;
	}

	@media(max-width: ${({theme}) => theme.mobile}) {
		width: 80%;
	}
`