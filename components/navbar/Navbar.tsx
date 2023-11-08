import Wrapper from '../Wrapper';
import MenuToggle from './MenuToggle';
import NavWrapper from './NavWrapper';
import NavLogo from './NavLogo';
import NavLinks from './NavLinks';

const Navbar = () => {
  return (
    <NavWrapper>
      <Wrapper className='flex rtl:flex-row justify-between items-center py-1'>
        <NavLogo />
        <NavLinks />
        <MenuToggle />
      </Wrapper>
    </NavWrapper>
  );
};

export default Navbar;
