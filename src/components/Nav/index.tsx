import * as StyledNav from './Styles'

const Nav = () => {
    return ( 
        <StyledNav.NavStyled>
            <StyledNav.ImageStyled src='src\assets\warren-logo.png'/>
            <StyledNav.SpanStyled>Warren</StyledNav.SpanStyled>
        </StyledNav.NavStyled>  
    );
}
 
export default Nav;