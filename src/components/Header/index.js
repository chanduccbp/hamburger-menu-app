// Write your code here
import {Link} from 'react-router-dom'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import './index.css'

const Header = () => (
  <navbar className="navbar">
    <Link to="/">
      <img
        src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
        alt="website logo"
      />
    </Link>
    <Popup
      modal
      trigger={
        <button
          type="button"
          data-testid="hamburgerIconButton"
          className="ham-butt"
        >
          {' '}
          <GiHamburgerMenu className="ham-icon" />{' '}
        </button>
      }
      className="popup-content"
    >
      {close => (
        <div className="modal-cont">
          <button
            type="button"
            data-testid="closeButton"
            className="cross-butt"
            onClick={() => close()}
          >
            {' '}
            <IoMdClose size="30" />{' '}
          </button>
          <ul className="popup-icons">
            <li>
              <Link to="/" className="popup-icon-cont" onClick={() => close()}>
                <AiFillHome size="80" className="p-icon" />
                <p>Home</p>
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="popup-icon-cont"
                onClick={() => close()}
              >
                <BsInfoCircleFill size="80" className="p-icon" />
                <p>About</p>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </Popup>
  </navbar>
)

export default Header
