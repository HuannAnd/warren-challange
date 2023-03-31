import * as HeaderS from './styles'

const Header = () => {
  return (
    <HeaderS.NavStyled>
      <HeaderS.ImageStyled src='src\assets\warren-logo.png' />
      <HeaderS.SpanStyled>Warren</HeaderS.SpanStyled>
    </HeaderS.NavStyled>
  );
}

export default Header;