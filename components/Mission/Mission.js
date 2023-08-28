import React from 'react'
import mImg1 from '/public/images/resource/mission.png'
import mImg2 from '/public/images/icons/mission-1.png'
import mImg3 from '/public/images/icons/mission-2.png'
import mImg4 from '/public/images/icons/mission-3.png'
import Image from 'next/image'

const Mission = (props) => {

    return (
        <section className={`mission-section ${props.sClass}`}>
            <div className="auto-container">
                <div className="row clearfix">
                    <div className="image-column col-lg-6 col-md-12 col-sm-12">
                        <div className="inner-column">
                            <div className="image wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                                <Image src={mImg1} alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="content-column col-lg-6 col-md-12 col-sm-12">
                        <div className="inner-column">
                            <div className="sec-title">
                                <div className="title">WHO WE ARE</div>
                                <h2>To Change Your View For <br /> FasTech Our Mission</h2>
                            </div>
                            <div className="bold-text">FasTech Systems is a pioneering SAAS product company driving digital innovation and revolutionizing software solutions.</div>
                            <ul className="mission-list">
                                <li><span className="icon"><Image src={mImg2} alt="" /></span>FasTech pioneers SAAS solutions that transform traditional businesses into tech-driven powerhouses.</li>
                                <li><span className="icon"><Image src={mImg3} alt="" /></span> FasTech's cutting-edge software drives digital transformation, optimizing operations and boosting productivity.</li>
                                <li><span className="icon"><Image src={mImg4} alt="" /></span>FasTech sets trends with innovative products, shaping the future of software and digital innovation.</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Mission;