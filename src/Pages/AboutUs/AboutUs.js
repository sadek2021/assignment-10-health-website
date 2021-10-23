import React from 'react';
import image from './../../Images/medicare.png'
import './AboutUs.css'

const AboutUs = () => {
    return (
        <div>
            <div className="mb-5 banner-2 text-center">
                <h1 className="about-title fw-bold text-danger">ABOUT US</h1>
                <h5>Exceptional quality professional health care services offered at affordable rates.</h5>
            </div>
            <div className="container">
                <div className="row mx-auto g-5 align-items-center">
                    <div className="col-lg-5">
                        <img className="img-fluid" src="https://ar-coder.com/demos/meddoctors/assets/images/about/01_about.jpg" alt="" />
                    </div>
                    <div className="col-lg-7">
                        <h5>Welcome To Best Medical & Health Care</h5>
                        <h1 className=" fw-bold text-danger mb-5">Get Best & Amazing Experice With Our Professional Doctors</h1>
                        <h6 className="mb-4">MedDoctors Are A Medical And Health Department Provider Institutions. Suitable For Healthcare, Medical, Doctor, Dental, Dentist, Pharmacy, Health And Any Related Medical Care Field.</h6>
                        <div className="my-4">
                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item rounded">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            <strong>Professional Doctors</strong>
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse show"
                                        aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Internal medicine physicians are experts in illnesses and medical conditions that affect the "inner" systems of the body.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item mt-3 border-top rounded">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            <strong>Online Schedule</strong>
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Schedule Builder Online, SBO, is a free web application, for creating weekly/daily schedules for any activity.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item mt-3 border-top rounded">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseThree" aria-expanded="false"
                                            aria-controls="collapseThree">
                                            <strong> High Packages</strong>
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse"
                                        aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Abdominal Hysterectomy Package (With or without BSO) High Risk with Epidural.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item mt-3 border-top rounded">
                                    <h2 className="accordion-header" id="headingFour">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseFour" aria-expanded="false"
                                            aria-controls="collapseFour">
                                            <strong>Digital Laboratory</strong>
                                        </button>
                                    </h2>
                                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            The digital lab in pharma refers to the digitalization of laboratory operations and the digitization of data processes.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item mt-3 border-top rounded">
                                    <h2 className="accordion-header" id="headingFive">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseFive" aria-expanded="false"
                                            aria-controls="collapseFive">
                                            <strong>Leading Technology</strong>
                                        </button>
                                    </h2>
                                    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Leading Technologies offre soluzioni di alto livello tecnologico per diversi settori di mercato, dal musicale al Broadcast.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item mt-3 border-top rounded">
                                    <h2 className="accordion-header" id="headingSix">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseSix" aria-expanded="false"
                                            aria-controls="collapseSix">
                                            <strong>24/7 Online Support</strong>
                                        </button>
                                    </h2>
                                    <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            24/7 support (also popularly known as 24/7 customer service or 24/7 tech support) is a customer service strategy.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-lg-flex align-items-center my-5">
                    <div className="m-5">
                        <h1 className=" fw-bold text-danger">City Medicare Clinic</h1>
                        <br />
                        <h5>Our clinic is open Monday to Friday. Please visit the Location & Hours page for detailed information.</h5>
                        <p>City Medicare Clinic and Vaccination Clinic is located in the heart of the Melbourne CBD. We have been providing quality GP and vaccination services to CBD workers, students and visitors since we opened in 2012. We are currently accepting new patients.</p>
                    </div>
                    <img className="img-fluid" width="600" src={image} alt="" />
                </div>
            </div>
        </div>
    );
};

export default AboutUs;