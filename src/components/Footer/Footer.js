import React from 'react';
import './Footer.css';

const Footer = () => {

    return (
        <footer className="d-flex flex-column align-items-center">
            <div className="d-flex justify-content-center">
                <a href="https://www.facebook.com/" ><i className="fab fa-facebook"></i></a>
                <a href="https://web.whatsapp.com/" ><i className="fab fa-whatsapp"></i></a>
                <a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a>
            </div>
            <h6 className="mt-2">&copy; All Rights Reserved 2021</h6>
        </footer>
    );
};

export default Footer;