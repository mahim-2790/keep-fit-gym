import React from 'react';
import { Row } from 'react-bootstrap';
import useServices from '../../hooks/useServices';
import Service from '../Service/Service';

const Services = () => {
    const [services] = useServices();
    console.log(services);

    return (
        <div>
            <h1 className="mt-5">Services We Provide</h1>
            <p>This are the provided services of our institute</p>
            <Row xs={1} md={3} className="gy-5 gx-1 mx-5 my-4 p-3 d-flex justify-content-center align-items-center">
                {
                    services.map(service => <Service key={services.id} service={service}></Service>)
                }
            </Row>
        </div>
    );
};

export default Services;