import { GrInstagram, GrTwitter, GrLinkedin, GrFacebook } from 'react-icons/gr';

const Footer = () => {
  const date = new Date();
  let year = date.getFullYear();
  return (
    <div className="footer">
      <div className="logo">W</div>
      <div className="footer-main">
      <div className="footer-cta">
        <p>About</p>
        <p>Help</p>
        <p>Terms of Service</p>
        <p>Privacy</p>
      </div>
      <div className="socials-cta">
        <h3>Follow us on: </h3>
        <div className="socials">
        <GrInstagram />
        <GrTwitter />
        <GrLinkedin />
        <GrFacebook />
        </div>
      </div>
      <span>Copyright &copy; {year}. All rights reserved.</span>
      </div>
    </div>
  )
}

export default Footer