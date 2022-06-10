import { FaBloggerB, FaBars } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { useState } from "react";
import {Link, useNavigate} from 'react-router-dom';

const Navbar = () => {
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <Link to="/">
      <div className="logo">W</div>
      </Link>
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
          <Link to="/login">
          <span>Sign in</span>
          </Link>
          <button onClick={()=>navigate("/register")}>Register</button>
        </div>
      </>
    </div>
  );
};

export default Navbar;
