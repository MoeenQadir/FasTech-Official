import React from 'react'
import Link from 'next/link'
import Services from '../../api/CallSense';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';

const ServiceSectionS3 = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    var settings = {
        dots: true,
        arrows: false,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        centerMode: true,
        centerPadding: '0px',
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    return (
        <section className="services-section-five">
            <div className="auto-container">
                <div className="sec-title centered">
                    <div className="title">CallSense PROCESS</div>
                    <h2>Explore the creative process</h2>
                    <div className="text">CallSense processes call audios through advanced AI algorithms to detect emotions <br/>  conduct speech recognition.</div>
                </div>

                <div className="services-carousel">
                <Slider {...settings}>
                        {Services.slice(0, 4).map((service, i) => (
                            <div className="service-block-five" key={i}>
                                <div className="inner-box">
                                    <div className="side-layer-one"></div>
                                    <div className="side-layer-two"></div>
                                    <div className="icon-box">
                                        <div className="border-layer"></div>
                                        <div className="dott-layer"></div>
                                        <span className="icon"><Image src={service.sIcon} alt="" /></span>
                                    </div>
                                    <h5><Link onClick={ClickHandler} href="/service-single/[slug]" as={`/service-single/${service.slug}`}>{service.sTitle}</Link></h5>
                                    <div className="text">{service.des}</div>
                                    <Link onClick={ClickHandler} href="/service-single/[slug]" as={`/service-single/${service.slug}`} className="learn-more">Learn More</Link>
                                </div>
                            </div>
                        ))}
                    </Slider>

                </div>
            </div>
        </section>
    );
}

export default ServiceSectionS3;