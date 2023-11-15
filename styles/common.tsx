import styled from "styled-components";

interface MainSectionProps {
    scroll?: boolean
}
export const MainSection = styled.section<MainSectionProps>`
    
    height:auto;
    display: flex;
    margin: 0;
    justify-content: right;
    position: relative;
    background: ${({theme})=> theme.colors.background};

    @media(max-width: ${({theme}) => theme.mobile}) {
        height:auto;
	}
`
export const MainBody = styled.div`
    height: auto;
    width: 75%;
    margin: 2.3em 3.7em 2.3em 2.3em;

    @media(max-width: ${({theme}) => theme.desktop2}) {
        margin: 2.3em 3.1em 2.3em 2.3em;
	}

    @media(max-width: ${({theme}) => theme.desktop}) {
        width: 79%;
        margin: 0em 0em 0em 0em;
        padding: 1.8em;
	}

    @media(max-width: ${({theme}) => theme.tablet}) {
        width: 100%;
        margin: 0 auto;
        padding: 2em;
	}

    @media(max-width: ${({theme}) => theme.mobile}) {
        margin: 2.2em auto 0 auto;
        padding: 1.5em;
	}
`
export const SearchSection = styled.div`
    display: flex;
    grid-gap: 2em;
`
export const TableSection = styled.div`
    margin-top: 1.8em;
`