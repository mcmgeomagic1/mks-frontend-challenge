import styled from 'styled-components'

export const ProductsSection = styled.div`
        padding:4.4em 0  0  0;
		display: grid;
		grid-gap: 2em;
		justify-content: space-between;
		grid-template-columns: repeat(4, 2fr);

		@media(max-width: ${({theme}) => theme.tablet}) {
			grid-template-columns: repeat(2, 2fr);
		} 
		

		@media(max-width: ${({theme}) => theme.mobile}) {
			padding: 8em 0;
			grid-template-columns: repeat(1, 2fr);
		}
		@media(max-width: ${({theme}) => theme.smallerDevices}) {
			grid-gap: 2.2em;
		}
`

import { keyframes } from 'styled-components'

const bigToSmall= keyframes`
	0%{
		transform: scale(1)
	}

	100%{
		transform: scale(0.9);
	}

`

export const Loading = styled.div`
		animation: ${bigToSmall} .8s ease-in-out infinite;
		font-size: 150%;
        width: 100%;
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
		font-weight: bold;
`
