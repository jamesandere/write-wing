import { FaBloggerB, FaBars } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { useState } from "react";
import {Link} from 'react-router-dom';

const Navbar = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className="navbar">
      <div className="logo">W</div>
      <>
        <input
          type="checkbox"
          id="check"
          checked={isChecked}
          onChange={(e)=>setIsChecked(e.target.checked)}
        />
        <label for="check" className="hamburger">
          {isChecked ? <MdClose /> : <FaBars />}
        </label>
        <div className="nav-links">
          <Link to="/">
          <span>Home</span>
          </Link>
          <span>About</span>
          <Link to="/create-post">
          <span>Write</span>
          </Link>
          <span>Sign in</span>
          <button>Register</button>
        </div>
      </>
    </div>
  );
};

export default Navbar;
