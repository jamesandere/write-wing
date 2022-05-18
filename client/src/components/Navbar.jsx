import { FaBloggerB, FaBars } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { useState } from "react";

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
          <span>Home</span>
          <span>About</span>
          <span>Write</span>
          <span>Sign in</span>
          <button>Register</button>
        </div>
      </>
    </div>
  );
};

export default Navbar;
