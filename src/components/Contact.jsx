import React from 'react';

// icons
import { FiArrowUpRight, FiMail, FiMapPin, FiPhone, FiSend } from 'react-icons/fi';

import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import SocialLinks from './SocialLinks';
import { profile } from '../assets/content';

// styles
import { ContactWrapper } from '../styles/Contact.styles';

const Contact = () => {
  return (
    <ContactWrapper id="contact" className="section">
      <div className="container">
        <SectionHeading index="05" eyebrow="Contact" title="Let's build something that ships.">
          Have a product to build, a team to join or an idea to pressure-test?
          My inbox is open — I usually reply within a couple of days.
        </SectionHeading>

        <div className="contact-grid">
          <Reveal className="details">
            <a className="email" href={`mailto:${profile.email}?subject=Let's work together`}>
              {profile.email}
              <FiArrowUpRight />
            </a>

            <ul className="info">
              <li>
                <FiMail />
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </li>
              <li>
                <FiPhone />
                <a href={`tel:${profile.phone}`}>{profile.phone}</a>
              </li>
              <li>
                <FiMapPin />
                <span>{profile.location}</span>
              </li>
            </ul>

            <SocialLinks className="socials" size={20} />
          </Reveal>

          <Reveal delay={120}>
            <form
              className="form"
              action={`https://formsubmit.co/${profile.email}`}
              name="contactForm"
              method="POST"
            >
              {/* Honeypot */}
              <input type="text" name="_honey" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
              {/* Disable Captcha */}
              <input type="hidden" name="_captcha" value="false" />
              {/* Redirect */}
              <input type="hidden" name="_next" value="https://edun.vercel.app/thanks.html" />

              <div className="row">
                <div className="field">
                  <label htmlFor="contact-name">Name</label>
                  <input id="contact-name" type="text" name="Name" autoComplete="name" required />
                </div>

                <div className="field">
                  <label htmlFor="contact-email">Email</label>
                  <input id="contact-email" type="email" name="Email" autoComplete="email" required />
                </div>
              </div>

              <div className="field">
                <label htmlFor="contact-subject">Subject</label>
                <input id="contact-subject" type="text" name="Subject" />
              </div>

              <div className="field">
                <label htmlFor="contact-message">Message</label>
                <textarea id="contact-message" name="Message" rows="6" required></textarea>
              </div>

              <button type="submit" className="button button-primary submit">
                Send message <FiSend />
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </ContactWrapper>
  );
};

export default Contact;
