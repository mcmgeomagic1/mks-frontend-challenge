import styled from "styled-components"
import Theme from "../../Theme/Theme"

export const MenuBox = styled.nav`
    background: ${({theme})=> theme.colors.primary};
    padding: 0em 8em;
    height: 5em;
    display: flex;
    align-items: center;
    font-weight: bold;
    box-shadow: 4px 4px 8px rgba(116,130,238,0.1);
    display: flex;
    z-index: 2;

    @media(max-width: ${({theme}) => theme.desktop}) {
		padding: 0em 4em;
	} 

    @media(max-width: ${({theme}) => theme.tablet}) {
		padding: 0em 2em;
	}
    
    @media(max-width: ${({theme}) => theme.mobile}) {
		position: fixed;
        padding: 0em 1.2em;
        border-radius: 0px;
        top: 0;
        left: 0;
        width: 100%;
        height: 71px;

        img {
            width: 40px;
            height: 40px;
        }
	}

`

export const Logo = styled.span`
    color: ${({theme})=> theme.colors.standard.white};
    font-weight: bold;
    font-size: ${({theme})=> theme.fontSize.extraBig};

    span {
        font-size: 50%;
        font-weight: 300;
    }

    @media(max-width: ${({theme}) => theme.tablet}) {
		
	}
`

export const Flex1 = styled.div`
    width: 50%;

    @media(max-width: ${({theme}) => theme.mobile}) {
        flex: 0%;
	}
`

export const Flex2 = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    grid-gap: 2em;


   

    @media(max-width: ${({theme}) => theme.tablet}) {
        width: 100%;
	}

    @media(max-width: ${({theme}) => theme.mobile}) {
        flex: 100%;
        grid-gap: 1.3em;

        img {
            width: 40px;
            height: 40px;
        }

        svg {
            font-size: 130%;
        }
	}
   
`
export const CartButton = styled.button`
    border: 0;
    background: ${({theme})=> theme.colors.standard.white};
    color: ${({theme})=> theme.colors.standard.dark};
    width: 95px;
    padding: 1em;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    border-radius: 15px;
    grid-gap: 0.5em;
    font-size: 100%;
    cursor: pointer;
    transition: all 0.2s;
    z-index: 1;

    svg{
        font-size: 140%;
    }

    &:hover {
        transform: translateY(2px);
    }
`
export const CartNumber = styled.span`
    font-size:110%;
`

export const MobileButton = styled.button`
    background: ${({theme})=> theme.colors.primary};
    border-radius: 50%;
    width: 45px;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({theme})=> theme.colors.standard.white};
    display: none;

    @media(max-width: ${({theme}) => theme.tablet}) {
        display: flex;
	}

    @media(max-width: ${({theme}) => theme.mobile}) {
        width: 40px;
        height: 40px;
	}
`
