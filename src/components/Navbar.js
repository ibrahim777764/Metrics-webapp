import { NavLink } from 'react-router-dom';
import { AiFillSetting } from 'react-icons/ai';
import { BsFillMicFill } from 'react-icons/bs';
import { FaLessThan } from 'react-icons/fa';

const todayDate = new Date().toISOString().slice(0, 10);

const Nav = () => (
  <div className="nav">
    <nav className="same">
      <ul className="nav-link">
        <nav className="span-date">
          <NavLink href="https://coviid.netlify.app/" className="home" activeclassname="selected" to="/">
            <FaLessThan />
          </NavLink>
          <span>{todayDate}</span>
        </nav>
        <p>Country&apos;s Covid details.</p>
        <nav className="icons">
          <BsFillMicFill className="icon" />
          <AiFillSetting />
        </nav>

      </ul>
    </nav>
  </div>
);

export default Nav;
