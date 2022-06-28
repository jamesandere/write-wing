import { FaBloggerB, FaBars } from "react-icons/fa";
import { MdClose, MdOutlineArrowDropDown } from "react-icons/md";
import { useState } from "react";
import {Link, useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../redux/authSlice";

const Navbar = () => {
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  const [dropdown, setDropdown] = useState(true);

  const toggleDropdown = () => {
    setDropdown(!dropdown);
  }

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
          <span onClick={()=>setIsChecked(false)}>Home</span>
          </Link>
          {/* <span>About</span> */}
          <Link to="/create-post">
          <span onClick={()=>setIsChecked(false)}>Write</span>
          </Link>
          {auth._id ?
            <>
            <span className="nav-name" onClick={toggleDropdown}>
            <span>Hi, {auth.firstName}</span>
            <MdOutlineArrowDropDown />
            {<div className={` ${dropdown ? "logout-menu logout-menu-dropdown" : "logout-menu"}`}>
            <ul>
              <li>Profile</li>
              <li>Settings</li>
              <li>Logout</li>
            </ul>
            </div>}
            </span>
            <span className="logout" onClick={()=> {dispatch(logoutUser(null))}}>
              Logout
            </span>
            </>
          
          : (
            <>
            <Link to="/login">
          <span>Sign in</span>
          </Link>
          <button onClick={()=>navigate("/register")}>Register</button></>
          )
}
        </div>
      </>
    </div>
  );
};

export default Navbar;
