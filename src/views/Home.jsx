import { Container } from 'react-bootstrap';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'; // Importa los íconos de Instagram y WhatsApp

export default () => {
  return (
    <Container className='text-center pt-5'>
      <h1 className='mb-2' style={{ color: 'brown' }}>Bienvenidos a 
        <span className='fw-bold'>HAPPY CAKE SWEET</span>
      </h1>
      <p className='ms-4' style= {{ color: 'brown' }}>El lugar más delicioso en pasteles </p>
      <img
        className='imgHome'
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPoddkpjeE1aj69klRrurElKrLajEd9MC57Q&s'
        alt="home"
        style={{ width: 500 }}
      />
  
         
    </Container>


  );
};