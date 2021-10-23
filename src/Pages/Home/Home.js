import React from 'react';
import { Row } from 'react-bootstrap';
import useServices from '../../Hooks/useServices/useServices';
import ServiceItem from '../Item/ServiceItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Home.css';
import { faAmbulance, faCommentMedical, faUserMd, faUserNurse, faHandHoldingUsd, faDoorOpen } from '@fortawesome/free-solid-svg-icons';
import useDoctors from '../../Hooks/useDoctors/useDoctors';
import DoctorsItem from '../Item/DoctorsItem';

const Home = () => {
    const { services } = useServices();
    const servicesNew = services.slice(0, 6)
    const [doctors] = useDoctors()

    /* Icon */
    const briefcase = <FontAwesomeIcon icon={faCommentMedical} />
    const blood = <FontAwesomeIcon icon={faUserNurse} />
    const Ambulance = <FontAwesomeIcon icon={faUserMd} />
    const NotesMedical = <FontAwesomeIcon icon={faHandHoldingUsd} />
    const Heart = <FontAwesomeIcon icon={faDoorOpen} />
    const Stethoscope = <FontAwesomeIcon icon={faAmbulance} />
    return (
        <div>
            <div className="mb-5 banner">
                <div className="content text-center">
                    <h1 className="fw-bold text-danger">CITY MEDICARE CLINIC</h1>
                    <h2>Exceptional quality professional health care services offered at affordable rates.</h2>
                </div>
            </div>
            <div className="container">
                <div className="my-5 text-center">
                    <h1 className="fw-bold text-danger">Our Medical Services</h1>
                    <p>Medical Services is a leading provider of insourcing services throughout the <br /> United Kingdom. We have the ability to provide a full 7-day service.</p>
                </div>
                <div className="container">
                    <Row xs={1} md={3} className="g-5 mb-5 p-4">
                        {
                            servicesNew.map(service => <ServiceItem key={service.id} service={service}></ServiceItem>)
                        }
                    </Row>
                </div>
                <div className="my-5 text-center">
                    <h1 className="fw-bold text-danger">Why Should You Choose Our Clinic?</h1>
                    <p>We Offer Extensive Medical Services For Our Patients Recommend That You Use Officia.</p>
                </div>
                <div className="row row-cols-1 row-cols-lg-2 mx-auto">
                    <div className="col text-lg-end  front-icon">
                        <span className="d-flex justify-content-center">{briefcase}</span>
                        <h3 className="mt-1 text-center">Free Consultation</h3>
                        <p className="text-center">The popular app allows users to ask its team of 35,000 active, U.S.-licensed doctors health-related for free.</p>
                    </div>
                    <div className="col front-icon">
                        <span className="d-flex justify-content-center">{blood}</span>
                        <h3 className="mt-1 text-center">Qualified Nurses</h3>
                        <p className="text-center">Nurses comprise the largest component of most healthcare environments; but there is evidence of international shortages of qualified nurses.</p>
                    </div>
                    <div className="col text-lg-end front-icon">
                        <span className="d-flex justify-content-center">{Ambulance}</span>
                        <h3 className="mt-1 text-center">Professional Expert Doctors</h3>
                        <p className="text-center">Specialists are doctors who have advanced training and degrees in a particular branch of medicine, such as heart health or bone health. Depending on the field, many can also perform surgery.</p>
                    </div>
                    <div className="col front-icon">
                        <span className="d-flex justify-content-center">{NotesMedical}</span>
                        <h3 className="mt-1 text-center">Affordable Price</h3>
                        <p>Just as there are challenges to making health care more affordable, there are many opportunities to reduce costs without compromising care.</p>
                    </div>
                    <div className="col text-lg-end front-icon">
                        <span className="d-flex justify-content-center">{Heart}</span>
                        <h3 className="mt-1 text-center">24/7 Opened</h3>
                        <p className="text-center">24X7 emergency services with 24 Hour emergency doctors available. Our 24 hour open emergency hospital near you is always ready.</p>
                    </div>
                    <div className="col front-icon">
                        <span className="d-flex justify-content-center">{Stethoscope}</span>
                        <h3 className="mt-1 text-center">Emergency services</h3>
                        <p className="text-center">Emergency medical services (EMS), also known as ambulance services or paramedic services.</p>
                    </div>
                </div>
                <div className="my-5 text-center">
                    <h1 className="fw-bold text-danger">Our Specialized Doctors</h1>
                    <p>A medical specialty is a branch of medical practice that is focused on a defined group of patients, <br /> diseases, skills, or philosophy. Examples include children br
                        (paediatrics), cancer (oncology), <br /> laboratory medicine (pathology), or primary care (family medicine).</p>
                </div>
                <div className="container my-5">
                    <Row xs={1} md={3} className="g-5 p-4">
                        {
                            doctors.map(doctor => <DoctorsItem key={doctor.id} doctor={doctor}></DoctorsItem>)
                        }
                    </Row>
                </div>
            </div>
        </div>
    );
};

export default Home;