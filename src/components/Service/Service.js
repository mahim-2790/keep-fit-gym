import { faClock, faUser } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = (props) => {
    const clock = <FontAwesomeIcon icon={faClock}></FontAwesomeIcon>
    const avatar = <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
    const { name, description, image, rating, price, duration, trainer, trainee, id } = props.service;

    return (
        <div>
            <Col className="d-flex justify-content-center">
                <Card className="card-size">
                    <Card.Img variant="top" src={image} className="img-height" />
                    <Card.Body>
                        <Card.Title>Course Name: {name}</Card.Title>
                        <Card.Text>
                            <p>{description}</p>
                            <h5>By: {trainer}</h5>
                            <h3>${price}</h3>
                            <Rating
                                emptySymbol="far fa-star icon-color"
                                fullSymbol="fas fa-star icon-color"
                                initialRating={rating}
                                readonly
                            >
                            </Rating><br />
                        </Card.Text>
                        <Link className="ms-auto" to={`/clickedservice/${id}`}>
                            <button className="details-btn" >Details</button>
                        </Link>

                    </Card.Body>
                    <Card.Footer>
                        <div className="d-flex justify-content-between">
                            <small>{clock} {duration}H</small>
                            <small>{avatar} {trainee}</small>
                        </div>
                    </Card.Footer>
                </Card>
            </Col>
        </div>
    );
};

export default Service;