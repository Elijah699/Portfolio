import React from 'react';

// icons
import { IoRocketOutline } from 'react-icons/io5';
import { BsTelephone, BsEnvelope } from 'react-icons/bs';
import { BiMapPin } from 'react-icons/bi';
import { FaWhatsapp } from 'react-icons/fa';
import { FiGithub, FiTwitter, FiLinkedin } from 'react-icons/fi';

// styles
import { ContactWrapper } from '../styles/Contact.styles';

const Contact = () => {
  // const handleClick = () => {};

  return (
    <ContactWrapper id="contact" className="contact">
      <div className="con-container">
        <div className="section-title">
          <h2>CONTACT</h2>
        </div>

        <div className="con-info">
          <div className="flex">
            <div className="con-1 animate__animated animate__fadeInLeft">
              <div className="basic-contact">
                <BsTelephone />
                <div>
                  <h3>Call Me</h3>
                  <span>+2349072334063</span>
                </div>
              </div>

              <div className="basic-contact">
                <BsEnvelope />
                <div>
                  <h3>Email</h3>
                  <span>edunelijah18@gmail.com</span>
                </div>
              </div>

              <div className="basic-contact">
                <BiMapPin />
                <div>
                  <h3>Location</h3>
                  <span>Lagos, Nigeria.</span>
                </div>
              </div>

              <div className="contact-icons">
                <a
                  className="social-icon"
                  href="https://github.com/Elijah699"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiGithub />
                </a>

                <a
                  className="social-icon"
                  href="https://www.linkedin.com/in/edun-elijah-3850081a3/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiLinkedin />
                </a>

                <a
                  className="social-icon"
                  href="https://twitter.com/devCreed"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiTwitter />
                </a>

                <a
                  className="social-icon"
                  href="https://wa.me/2349072334063"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaWhatsapp />
                </a>
              </div>
            </div>
            <div className="con-2 animate__animated animate__fadeInRight">
              <form
                action="https://formsubmit.co/bcdaaf3607100a9da79ec13208a0a815"
                name="contactForm"
                method="POST"
              >
                {/* Honeypot */}
                <input type="text" name="_honey" style={{ display: 'none' }} />
                {/* Disable Captcha */}
                <input type="hidden" name="_captcha" value="false" />
                {/* Redirect */}
                <input
                  type="hidden"
                  name="_next"
                  value="https://edun.vercel.app/thanks.html"
                />

                <div className="contact-field">
                  <label htmlFor="Name">Name</label>
                  <input type="text" name="Name" required />
                </div>

                <div className="contact-field">
                  <label htmlFor="Email">Email</label>
                  <input type="text" name="Email" required />
                </div>

                <div className="contact-field">
                  <label htmlFor="Subject">Subject</label>
                  <input type="text" name="Subject" />
                </div>

                <div className="contact-field">
                  <label htmlFor="Message">Message</label>
                  <textarea
                    name="Message"
                    cols="45"
                    rows="15"
                    spellCheck="false"
                    required
                  ></textarea>
                </div>

                <div className="btn">
                  <button
                    type="submit"
                    className="submit"
                    // onClick={handleClick}
                  >
                    Send Message <IoRocketOutline size={18} />{' '}
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="footer">
            <p>© devCreed 2022. </p>
          </div>
        </div>
      </div>
    </ContactWrapper>
  );
};

export default Contact;
