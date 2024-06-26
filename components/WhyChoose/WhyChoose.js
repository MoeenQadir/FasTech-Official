import React from 'react';
import Link from 'next/link';
import cImg2 from '/public/images/resource/business.png'
import cImg3 from '/public/images/resource/business-arrow.png'
import Image from 'next/image';


const WhyChoose = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (

        <section className="business-section">
            <div className="pattern-layer"
                 style={{backgroundImage: `url(${'/images/background/pattern-23.png'})`}}></div>
            <div className="auto-container">
                <div className="sec-title light">
                    <div className="title">WHY US CHOOSE NOW</div>
                    <h2>We Provide the Best Facilites For Business</h2>
                    <div className="text">From keyword research to technical auditing to site migration, our team of
                        technical <br/> SEOs are true experts in their field.
                    </div>
                </div>
                <Link nClick={ClickHandler} href="/about" className="theme-btn btn-style-three"><span className="txt">Lets Start</span></Link>
                <div className="inner-container">
                    <div className="row clearfix">
                        <div className="image-column col-lg-6 col-md-12 col-sm-12">
                            <div className="inner-column">
                                <div className="image wow slideInUp">
                                    <Image src={cImg2} alt=""/>
                                </div>
                                <div className="arrow-image wow fadeInRight">
                                    <Image src={cImg3} alt=""/>
                                </div>
                            </div>
                        </div>

                        <div className="content-column col-lg-6 col-md-12 col-sm-12">
                            <div className="inner-column">
                                <div className="business-block">
                                    <div className="inner-box">
                                        <div className="box-number">01</div>
                                        <div className="icon-box">
                                            <span className="icon flaticon-safe"></span>
                                        </div>
                                        <div className="content">
                                            <h4>Cutting-Edge Security</h4>
                                            <div className="text">Fastech ensures top-tier security measures for robust
                                                protection.
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="business-block">
                                    <div className="inner-box">
                                        <div className="box-number">02</div>
                                        <div className="icon-box">
                                            <span className="icon flaticon-chat-2"></span>
                                        </div>
                                        <div className="content">
                                            <h4>Proven Successes</h4>
                                            <div className="text">Fastech's track record showcases achievements across
                                                diverse industries.
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="business-block">
                                    <div className="inner-box">
                                        <div className="box-number">03</div>
                                        <div className="icon-box">
                                            <span className="icon flaticon-growth"></span>
                                        </div>
                                        <div className="content">
                                            <h4>Agile Innovation</h4>
                                            <div className="text">Fastech adapts and evolves swiftly to integrate the
                                                latest advancements.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="business-block">
                                    <div className="inner-box">
                                        <div className="box-number">04</div>
                                        <div className="icon-box">
                                            <span className="icon flaticon-management"></span>
                                        </div>
                                        <div className="content">
                                            <h4>Seamless Integration</h4>
                                            <div className="text">Fastech's solutions seamlessly merge into various
                                                company workflows.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="business-block">
                                    <div className="inner-box">
                                        <div className="box-number">05</div>
                                        <div className="icon-box">
                                            <span className="icon flaticon-united"></span>
                                        </div>
                                        <div className="content">
                                            <h4>Client-Centric Approach</h4>
                                            <div className="text">Fastech prioritizes client needs, delivering tailored
                                                solutions for maximum impact.
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}


export default WhyChoose;