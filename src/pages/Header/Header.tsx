import './Header.css';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/images/icons8-home.svg';
const Header = () => {
  return (
    <div className='headerContainer'>
      <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to={'/'}>
        <Logo className='homeButton' />
      </Link>
    </div>
  );
};

export default Header;
