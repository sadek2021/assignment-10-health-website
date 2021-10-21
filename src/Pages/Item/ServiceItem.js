import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ServiceItem = (props) => {
    const { id, img, name, detail } = props.service;
    return (
        <div>
            <Col className="shadow-lg text-center">
                <Card >
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <div>
                            <p>{detail}</p>
                        </div>
                        <Link to={`/services/${id}`}>
                            <button type="button" className="btn btn-outline-primary btn-sm">Read More</button>
                        </Link>
                    </Card.Body>

                </Card>
            </Col>
        </div>
    );
};

export default ServiceItem;