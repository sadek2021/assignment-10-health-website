import React from 'react';
import { Row } from 'react-bootstrap';
import useServices from '../../Hooks/useServices/useServices';
import ServiceItem from '../Item/ServiceItem';

const Services = () => {
    const { services } = useServices();
    return (
        <div className="container">
            <div className="mt-5 text-center">
                <h1 className="text-danger">Our Medical Services</h1>
                <p>Medical Services is a leading provider of insourcing services throughout the <br /> United Kingdom. We have the ability to provide a full 7-day service.</p>
            </div>
            <div className="container my-5">
                <Row xs={1} md={3} className="g-5 p-4">
                    {
                        services.map(service => <ServiceItem key={service.id} service={service}></ServiceItem>)
                    }
                </Row>
            </div>
        </div>
    );
};

export default Services;