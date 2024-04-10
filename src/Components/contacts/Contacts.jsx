import { useState } from "react";
import "./contacts.scss";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoIosSend } from "react-icons/io";
export default function Contact() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">
            <IoIosSend className="send" /> <h3>Send</h3>
          </button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>

        <div className="social">
          <a href="https://www.linkedin.com/feed/" className="logo">
            <CiLinkedin className="logoStyle" />
          </a>
          <a href="https://github.com/webdevelopervishal" className="logo">
            <FaGithub className="logoStyle" />
          </a>
          <a href="https://www.instagram.com/" className="logo">
            <FaInstagram className="logoStyle" />
          </a>
          <a href="https://twitter.com/?lang=en" className="logo">
            <FaXTwitter className="logoStyle" />
          </a>
        </div>
      </div>
    </div>
  );
}
