import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MessageCircle, Clock } from 'lucide-react';
import MultiStepForm from '../components/form/MultiStepForm';
import { usePageMeta } from '../hooks/usePageMeta';
import AutoImageSlider from '../components/ui/AutoImageSlider';
import { imageManifest } from '../data/imageManifest';
import './Contact.css';

const udaipurImages = imageManifest['udaipur'];

const contactMethods = [
  {
    icon: <Mail size={28} aria-hidden="true" />,
    title: 'Email Us',
    lines: ['info@dunexplore.com'],
    href: 'mailto:info@dunexplore.com',
  },
  {
    icon: <Phone size={28} aria-hidden="true" />,
    title: 'Call Us',
    lines: ['+91 63750 60566'],
    href: 'tel:+916375060566',
  },
  {
    icon: <MessageCircle size={28} aria-hidden="true" />,
    title: 'WhatsApp',
    lines: ['Chat with our travel experts', '+91 63750 60566'],
    href: 'https://wa.me/916375060566',
    external: true,
  },
  {
    icon: <Clock size={28} aria-hidden="true" />,
    title: 'Working Hours',
    lines: ['Mon – Sat', '9:00 AM – 7:00 PM IST'],
  },
];

const Contact = () => {
  usePageMeta({
    title: 'Contact Us | Dune Explorer',
    description:
      'Get in touch with Dune Explorer to plan your dream Rajasthan journey. Email, call, WhatsApp, or send an inquiry — we respond within 24 hours.',
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="contact-page">
      <header className="contact-hero">
        <AutoImageSlider 
          images={udaipurImages} 
          alt="Palace beside Lake Pichola in Udaipur" 
          className="contact-hero-img-slider" 
        />
        <div className="contact-hero-overlay"></div>
        <motion.div
          className="contact-hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="contact-label">Contact Us</span>
          <h1>Let's Plan Your Rajasthan Journey</h1>
          <p className="contact-tagline">
            Reach out and our travel experts will craft a journey as unique as you.
          </p>
        </motion.div>
      </header>

      <section className="contact-methods">
        <div className="container">
          <div className="contact-cards">
            {contactMethods.map((method, index) => (
              <motion.div
                className="contact-card"
                key={method.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <span className="contact-card-icon" aria-hidden="true">{method.icon}</span>
                <h2>{method.title}</h2>
                {method.lines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
                {method.href && (
                  <a
                    href={method.href}
                    target={method.external ? '_blank' : undefined}
                    rel={method.external ? 'noopener noreferrer' : undefined}
                    className="contact-card-link"
                  >
                    {method.external ? 'Start Chat' : 'Get in Touch'}
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-form-section">
        <div className="container">
          <div className="contact-form-layout">
            <motion.div
              className="contact-form-intro"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="section-subtitle">Send an Inquiry</span>
              <h2>Tell Us About Your Dream Trip</h2>
              <p>
                Share your preferences — destinations, travel dates, interests — and our experts will
                get back to you with a personalised itinerary. We usually respond within 24 hours.
              </p>
            </motion.div>

            <motion.div
              className="contact-form-wrap"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <MultiStepForm />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
