import React from 'react';
import cover from '../../images/default.png';
import profile from '../../images/profile.png';
import './About.css';
const AboutUs = () => {
    return (
        <div>
            <div>
                <img src={cover} alt="" className="img-fluid" />
            </div>
            <div className="mx-md-5 px-5">
                <h2 className="mt-3">About Us</h2>

                <div className="d-flex align-items-center mb-5 flex-column">
                    <div className="flex-shrink-0 image-container mx-5 my-md-3 my-1">
                        <img src={profile} alt="..." />
                    </div>
                    <div className="flex-grow-1 ms-3 text-center">
                        <p>Hello we are from keep fit. Our institute provides world class body fitness training under experienced trainer. We also provide wold class nutritionist. All of our equipments are first class. We welcome you to join us.</p>
                    </div>
                </div>
                <div className="my-5">
                    <h4 className="mb-4">Leave Your Comments Here</h4>
                    <div className="contact-form">
                        <form className="d-flex align-items-center justify-content-center flex-column">
                            <input type="text" name="name" id="" placeholder="Your Name" />
                            <input type="email" name="email" id="" placeholder="Your Email" />
                            <textarea name="message" id="" placeholder="Write your message"></textarea>
                            <button type="submit" className="mt-3">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;