import './WhatsappButton.css'

import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

const WhatsAppButton = ({ phoneNumber, message }) => {
    const formattedPhone = phoneNumber.replace(/\D/g, '');

    const encodedMessage = encodeURIComponent(message || 'Hola! Me gustaría...');

    const whatsappUrl = `https://wa.me/${formattedPhone}?text=${encodedMessage}`;

    return (
        <Button
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="whatsapp-button"
            className="whatsapp-float"
            variant="success"
            style={{
                position: 'fixed',
                width: '60px',
                height: '60px',
                bottom: '40px',
                right: '40px',
                backgroundColor: '#25d366',
                color: '#FFF',
                borderRadius: '50px',
                textAlign: 'center',
                fontSize: '30px',
                boxShadow: '2px 2px 3px #999',
                zIndex: 100,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <i
                className="fa-brands fa-whatsapp"
                style={{ color: '#ffffff' }}
            ></i>
        </Button>
    );
};

WhatsAppButton.propTypes = {
    phoneNumber: PropTypes.string.isRequired,
    message: PropTypes.string
};

WhatsAppButton.defaultProps = {
    message: 'Hola! Me gustaría...'
};

export default WhatsAppButton;