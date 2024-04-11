import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='mt-auto bg-dark text-white py-4'>
      <div className="container d-flex justify-content-between align-items-center">
        <div>
          <img
            src="ruta-a-tu-logo.png"
            alt="Logo de Happy Cake"
            style={{ height: '50px', marginRight: '10px' }}
          />
          <span>¡Contáctanos!</span>
        </div>
        <div>
          <a href="enlace-a-instagram" className="text-decoration-none me-3">
            <FaInstagram size={24} />
          </a>
          <a href="enlace-a-whatsapp" className="text-decoration-none">
            <FaWhatsapp size={24} />
          </a>
        </div>
      </div>
      <div className="container mt-3">
        <p>Encuéntranos también en Instagram y WhatsApp</p>
      </div>
    </footer>
  );
};

export default Footer;