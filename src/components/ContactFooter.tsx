import { socialLinks, siteConfig } from "../data/site";
import { ContactForm } from "./ContactForm";

export function ContactFooter() {
  return (
    <>
      <section id="contact" className="contact-section">
        <div className="contact-panel">
          <span className="section-eyebrow">Get In Touch</span>
          <h2>Let&apos;s Create Magic</h2>
          <p>Ready to bring your vision to life? Send us a message below.</p>
          <ContactForm />
        </div>
      </section>

      <footer>
        <div className="footer-content">
          <a href={`mailto:${siteConfig.contactEmail}`} className="email-link" data-cursor-hover>
            {siteConfig.contactEmail}
          </a>
          <div className="socials">
            {socialLinks.map((social) => (
              <a
                key={social.id}
                href={social.href}
                target="_blank"
                rel="noreferrer noopener"
                data-cursor-hover
              >
                {social.label}
              </a>
            ))}
          </div>
          <div className="copyright">
            &copy; {siteConfig.copyrightYear} {siteConfig.name}. All rights
            reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
