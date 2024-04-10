import "./topbar.scss";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div>
      <div className={"topbar " + (menuOpen && "active")}>
        <div className="wrapper">
          <div className="left">
            <a href="#intro" className="logo">
              PORTFOLIO.
            </a>
            <div className="itemContainer">
              <div className="icon">
                <FaPhoneSquareAlt />
              </div>
              <span>+91 6205660556</span>
            </div>
            <div className="itemContainer">
              <div className="icon">
                <MdEmail />
              </div>
              <span>vishalg@gmail.com</span>
            </div>
          </div>

          <div className="right">
            <div className="hamburger " onClick={() => setMenuOpen(!menuOpen)}>
              <span className="line1"></span>
              <span className="line1"></span>
              <span className="line1"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
