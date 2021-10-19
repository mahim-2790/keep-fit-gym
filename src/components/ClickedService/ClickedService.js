import { faClock, faUser } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import Rating from 'react-rating';
import { useParams } from 'react-router';

const ClickedService = () => {

    const clock = <FontAwesomeIcon icon={faClock}></FontAwesomeIcon>
    const avatar = <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
    const { id } = useParams();
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("https://mahim-2790.github.io/data/gymData.json")
            .then(res => res.json())
            .then(data => setServices(data))
    }, [id]);
    const singleService = services.find(service => Number(service.id) === Number(id));
    return (

        <div className="my-5 pt-5 d-flex justify-content-center">
            <Card className="card-size">
                <Card.Img variant="top" src={singleService?.image} className="img-height" />
                <Card.Body>
                    <Card.Title>Course Name: {singleService?.name}</Card.Title>
                    <Card.Text>
                        <p>{singleService?.description}</p>
                        <h5>Trainer: {singleService?.trainer}</h5>
                        <h3>${singleService?.price}</h3>
                        <p>Session: {singleService?.period}</p>
                        <p>Registration Fee: {singleService?.reg}</p>
                        <Rating
                            emptySymbol="far fa-star icon-color"
                            fullSymbol="fas fa-star icon-color"
                            initialRating={singleService?.rating}
                            readonly
                        >
                        </Rating><br />
                    </Card.Text>

                </Card.Body>
                <Card.Footer>
                    <div className="d-flex justify-content-between">
                        <small>{clock} {singleService?.duration}H</small>
                        <small>{avatar} {singleService?.trainee}</small>
                    </div>
                </Card.Footer>
            </Card>
        </div>

    );
};

export default ClickedService;