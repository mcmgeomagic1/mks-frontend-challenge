import styled from "styled-components"
import Theme from "../../Theme/Theme"

export const CartBox = styled.div`
	box-shadow: 3px 3px 12px rgba(0,0,0,0.1);
	width: 530px;
    height: 100%;
    background: ${({theme}) => theme.colors.primary};
	position: fixed;
	right: 0;
	top: 0;
	z-index: 2;
	box-shadow: 10px 10px 25px rgba(0,0,0,1);
	padding: 2em 2em;
	color:  ${({theme})=> theme.colors.standard.white};
	transition: all 0.3s ease-in-out;


	@media(max-width: ${({theme}) => theme.desktop}) {
		margin-bottom: 2em;
	}

	@media(max-width: ${({theme}) => theme.tablet}) {
		margin-bottom: 2em;
	}

    @media(max-width: ${({theme}) => theme.mobile}) {
        width: 520px;
    }

	@media(max-width: ${({theme}) => theme.smallerDevices}) {
        width: 390px;
		padding: 2em 0em 2em 1em;
    }

	@media(max-width: ${({theme}) => theme.smallerDevices2}) {
        width: 370px;
		padding: 2em 0em 2em 1em;
    }
`

export const  Header = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: top;
	margin-bottom: 1em;

	svg {
		font-size: 140%;
	}
`

export const Title = styled.h2`
	width: 90%;
	line-height: 40px;

	@media(max-width: ${({theme}) => theme.smallerDevices}) {
        font-size: 110%;
		line-height: 30px;
    }
`

export const ClosingButton = styled.button`
	margin-top: 1em;
	background:#000 ;
	padding: 0 1em ;
	height:40px;
	border: 0;
	color: #fff;
	border-radius: 100%;
	cursor: pointer;

	@media(max-width: ${({theme}) => theme.smallerDevices}) {
        margin-right: 1em;
		height: 30px;
		padding: 0 .5em;
    }
`
export const Remove = styled.button`
	border: 0;
	position: absolute;
	right: -1em;
	top:0em;
	border-radius: 50%;
	background-color: #000;
	color: #fff;
	padding: .4em;
	cursor: pointer
`

export const CartsBox = styled.div`
	height: 73%;
	overflow: scroll;
	overflow-x: hidden;
	padding-right: 1em;

	&::-webkit-scrollbar {
      width: 8px;
      margin-right: 2em;
    }

    &::-webkit-scrollbar-thumb {
        background: #000;
        border-radius: 15px;
    }

	@media(max-width: ${({theme}) => theme.smallerDevices}) {
       height: 78%;
    }

	@media(max-width: ${({theme}) => theme.smallerDevices2}) {
       height: 70%;
    }
`

export const CartProductBox = styled.div`
    position: relative;
	box-shadow: 3px 3px 12px rgba(0,0,0,0.1);
	width: 100%;
    height: 101px;
    background: #fff;
    border-radius: 15px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: .5em 1em;
	margin-bottom: 2em;

`
export const ProductCartImage = styled.div`
	display: flex;
	justify-content: center;
	height: 90%;

	@media(max-width: ${({theme}) => theme.mobile}) {
         height: 40%;
    }

	img{
		object-fit: cover;
		height: 100%;
		@media(max-width: ${({theme}) => theme.mobile}) {
         height: 160%;
		 margin-top: -.5em;
    	}
	}

`

export const CartProductTitle = styled.h3`
	font-size: 90%;
	width: 40%;
	line-height: 20px;
	margin-left: .5em;
	color: #000;

	@media(max-width: ${({theme}) => theme.desktop}) {
		font-size: 110%;
		width: 100%;
	}

	@media(max-width: ${({theme}) => theme.tablet}) {
		font-size: 95%;
	}

	@media(max-width: ${({theme}) => theme.smallerDevices}) {
		font-size: 70%;
	}
	

`

export const CartProductPrice = styled.span`
	font-size: 90%;
	color: #000;
	font-weight: bold;
	padding: 1em .5em;
	border-radius: 15px;
	font-weight: 700;
	margin-left: 2em;

	@media(max-width: ${({theme}) => theme.desktop}) {
		padding: 1em .5em;
		font-size: 78%;
	}

	@media(max-width: ${({theme}) => theme.tablet}) {
		padding: 1em .5em;
		font-size: 100%;
	}

	@media(max-width: ${({theme}) => theme.smallerDevices}) {
		font-size: 70%;
	}
`


export const Controls = styled.div`
	box-shadow: 3px 3px 12px rgba(0,0,0,0.1);
	width: 50;
    height: 19;
    background: #fff;
    border-radius: 15px;
	display: flex;
	align-items: center;
	padding: .5em 1em;
	color: #000;
	grid-gap: .4em;

	svg {
		cursor: pointer;
	}

	@media(max-width: ${({theme}) => theme.smallerDevices}) {
		font-size: 80%;
	}
`

export const AddedNumber = styled.span`
	
`

export const Footer = styled.span`
	
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 4em;
	color:#fff;
`


export const TotalPriceBar = styled.span`
	display: flex;
	justify-content: space-between;
	padding: 1em 3em;
	margin-top: -3.2em;
	font-size: 120%;
	font-weight: bold;

	@media(max-width: ${({theme}) => theme.smallerDevices}) {
        font-size: 110%;
		padding: .5em 1.5em;
		margin-top: -2.2em;
    }
`

export const FooterButton = styled.button`
    border: 0;
	color:#fff;
	font-weight: bold;
	font-size: 150%;
	background: #000;
	height: 100%;
	width: 100%;
	cursor: pointer;

	@media(max-width: ${({theme}) => theme.smallerDevices}) {
        font-size: 130%;
    }
`



