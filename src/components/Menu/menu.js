import styled from "styled-components";



export const Header = styled.header`

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2%;
    border-bottom: 1px solid salmon;
   

`;


export const Nav = styled.nav`

    ul{
        display: flex;
        align-items: center;
        gap: 25px;
    }

    ul li {
        list-style-type: none;
    }


    ul li a {
        text-decoration: none;
        color: salmon;
        font-weight: bold;
        font-size: 25px;
    }

`;