import React from 'react';
import Link from 'next/link'
import ContactForm from '../ContactFrom'

const Contactpage = () => {

    return (
        <div>
            <div className="contact-info-section">
                <div className="auto-container">
                    <div className="sec-title centered">
                        <div className="title">Follow Our Info</div>
                        <h2>Contact information</h2>
                        <div className="text">Give us a call or drop by anytime, we endeavour to answer all enquiries
                            within 24 hours on business days. <br/> We will be happy to answer your questions.
                        </div>
                    </div>
                    <div className="inner-container">
                        <div className="row clearfix">
                            <div className="column col-lg-6 col-md-6 col-sm-12">
                                <div className="info-box">
                                    <div className="box-inner">
                                        <div className="icon flaticon-clock"></div>
                                        10:00am to 6:00pm <br/> Sunday Closed
                                    </div>
                                </div>
                            </div>
                            <div className="column col-lg-6 col-md-6 col-sm-12">
                                <div className="info-box">
                                    <div className="box-inner">
                                        <div className="icon flaticon-pin"></div>
                                        Dehli Housing Muslim Society,<br/> Sukkur, Sindh Pakistan
                                    </div>
                                </div>
                            </div>
                            <div className="column col-lg-6 col-md-6 col-sm-12">
                                <div className="info-box">
                                    <div className="box-inner">
                                        <div className="icon flaticon-phone-call"></div>
                                        <a href="tel:+92 313 1373109">+92 313 1373109</a><br/>
                                        <a href="mailto:info@fastechsystem.com">info@fastechsystem.com</a>
                                    </div>
                                </div>
                            </div>
                            <div className="column col-lg-6 col-md-6 col-sm-12">
                                <ul className="social-box">
                                    <span>Our Socials Links <i>Print this page to PDF for the complete set of vectors.</i></span>
                                    <li className="facebook"><Link className="fa fa-facebook-f" href="/contact"></Link>
                                    </li>
                                    <li className="twitter"><Link className="fa fa-twitter" href="/contact"></Link></li>
                                    <li className="linkedin"><Link href="/contact" className="fa fa-google-plus"></Link>
                                    </li>
                                    <li className="pinterest"><Link href="/contact"
                                                                    className="fa fa-pinterest-p"></Link></li>
                                </ul>
                            </div>

                        </div>
                    </div>
                    <div className="map-boxed">
                        <div className="map-outer">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.7790325996993!2d68.81840795706928!3d27.724107991968555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3935d4e60abe0af7%3A0x1f28c0c2d54ff91a!2sPRF9%2BQFF%2C%20Sukkur%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1684910649965!5m2!1sen!2s"
                                width="100%" height="560px" frameborder="0" allowFullScreen=""></iframe>
                        </div>
                    </div>

                </div>
            </div>
            <section className="contact-form-section">
                <div className="auto-container">
                    <div className="sec-title centered">
                        <div className="title">Don’t Hasitate To Contact With us</div>
                        <h2>Now Very Easy</h2>
                        <div className="text">Our approach to <b>FasTech</b> is uniquely built around what we know works…and what
                            we know <br/> doesn’t work. With over 200 verified factors in play.
                        </div>
                    </div>
                    <div className="inner-container">
                        <div className="contact-form">
                            <ContactForm/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )

}

export default Contactpage;
