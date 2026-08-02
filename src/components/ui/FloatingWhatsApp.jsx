import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp = () => (
  <a
    href="https://wa.me/916375060566"
    target="_blank"
    rel="noopener noreferrer"
    className="floating-whatsapp"
    aria-label="Chat with Dune Explorer on WhatsApp"
  >
    <MessageCircle size={26} aria-hidden="true" />
  </a>
);

export default FloatingWhatsApp;
