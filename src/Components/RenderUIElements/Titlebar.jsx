import '../Css/Titlebar.css';
import { Link } from 'react-router-dom';
import { IoLogoGithub, IoMdInformationCircle } from 'react-icons/io';

export const Titlebar = () => {
  return (
    <div className='bar-container'>
      <div className='nav-container'>
        <div className='logo-wrapper'>
          <div className='logo-container'>
            <Link className='logo-text' to='/' data-testid='homeLink'>
              Random Raid Generator
            </Link>
          </div>
        </div>
        <div className='link-wrapper'>
          <Link to='/info' className='link-text' data-testid='infoLink'>
            <IoMdInformationCircle />
          </Link>
          <Link
            to='https://github.com/joonaspo/tarkov-gear-generator'
            target='_blank'
            className='link-text'>
            <IoLogoGithub />
          </Link>
        </div>
      </div>
    </div>
  );
};
