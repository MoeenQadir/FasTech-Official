import React from 'react';
import cImg from '/public/images/resource/skill.png'
import Image from 'next/image';


const WhyChoose2 = (props) => {
    return (

        <section className="skill-section">
            <div className="auto-container">
                <div className="row clearfix">

                    <div className="counter-column col-lg-6 col-md-12 col-sm-12">
                        <div className="inner-column">
                            <div className="sec-title">
                                <div className="title">Why Choose Us</div>
                                <h2>We dedicate for Company <br /> with SEO work</h2>
                            </div>
                            <div className="text">From keyword research to technical auditing to site migration, our team of technical SEOs are true experts in their field.</div>

                            <div className="skills">

                                <div className="skill-item">
                                    <div className="skill-header clearfix">
                                        <div className="skill-title">Keyword Research</div>
                                        <div className="skill-percentage"><div className="count-box"><span className="count-text" data-speed="2000" data-stop="70">70</span>%</div></div>
                                    </div>
                                    <div className="skill-bar">
                                        <div className="bar-inner"><div className="bar progress-line" style={{width: '70%'}}></div></div>
                                    </div>
                                </div>

                                <div className="skill-item">
                                    <div className="skill-header clearfix">
                                        <div className="skill-title">Technical SEO Audit</div>
                                        <div className="skill-percentage"><div className="count-box"><span className="count-text" data-speed="2000" data-stop="80">80</span>%</div></div>
                                    </div>
                                    <div className="skill-bar">
                                        <div className="bar-inner"><div className="bar progress-line" style={{width: '80%'}}></div></div>
                                    </div>
                                </div>
                                <div className="skill-item">
                                    <div className="skill-header clearfix">
                                        <div className="skill-title">Content Optimization</div>
                                        <div className="skill-percentage"><div className="count-box"><span className="count-text" data-speed="2000" data-stop="60">60</span>%</div></div>
                                    </div>
                                    <div className="skill-bar">
                                        <div className="bar-inner"><div className="bar progress-line" style={{width: '60%'}}></div></div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="image-column col-lg-6 col-md-12 col-sm-12">
                        <div className="inner-column">
                            <div className="image titlt" data-tilt data-tilt-max="3">
                                <Image src={cImg} alt="" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}


export default WhyChoose2;