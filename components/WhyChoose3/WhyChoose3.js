import React from 'react';
import Link from 'next/link'


const WhyChoose3 = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    
    return (

        <section className="services-section-three">
            <div className="pattern-layer-one" style={{ backgroundImage: `url(${'/images/icons/icon-8.png'})` }}></div>
            <div className="pattern-layer-two" style={{ backgroundImage: `url(${'/images/icons/icon-9.png'})` }}></div>
            <div className="pattern-layer-three" style={{ backgroundImage: `url(${'/images/icons/icon-10.png'})` }}></div>
            <div className="auto-container">
                <div className="row clearfix">
                    <div className="blocks-column col-lg-6 col-md-12 col-sm-12">
                        <div className="inner-column">
                            <div className="row clearfix">
                                <div className="service-block-three col-lg-6 col-md-6 col-sm-12">
                                    <div className="inner-box wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                                        <div className="icon-box">
                                            <span className="icon flaticon-badge"></span>
                                        </div>
                                        <h5><Link onClick={ClickHandler} href="/services">Real-time Speech Analysis</Link></h5>
                                        <div className="text">Provide real-time analysis of audio during calls, allowing supervisors or agents to monitor customer.</div>
                                    </div>
                                </div>
                                <div className="service-block-three col-lg-6 col-md-6 col-sm-12">
                                    <div className="inner-box wow fadeInUp" data-wow-delay="150ms" data-wow-duration="1500ms">
                                        <div className="icon-box">
                                            <span className="icon flaticon-chat-3"></span>
                                        </div>
                                        <h5><Link onClick={ClickHandler} href="/services">Behavioral Scoring</Link></h5>
                                        <div className="text">Implement a scoring system that assigns a percentage or rating to different behaviors exhibited during the call.</div>
                                    </div>
                                </div>
                                <div className="service-block-three col-lg-6 col-md-6 col-sm-12">
                                    <div className="inner-box wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                                        <div className="icon-box">
                                            <span className="icon flaticon-growth"></span>
                                        </div>
                                        <h5><Link onClick={ClickHandler} href="/services">Keyword Detection</Link></h5>
                                        <div className="text">Automatically detect and highlight specific keywords or phrases during the call.</div>
                                    </div>
                                </div>

                                <div className="service-block-three col-lg-6 col-md-6 col-sm-12">
                                    <div className="inner-box wow fadeInUp" data-wow-delay="150ms" data-wow-duration="1500ms">
                                        <div className="icon-box">
                                            <span className="icon flaticon-management"></span>
                                        </div>
                                        <h5><Link onClick={ClickHandler} href="/services">Greate Support</Link></h5>
                                        <div className="text">To generate highly focused leads ready to purchases our service</div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="content-column col-lg-6 col-md-12 col-sm-12">
                        <div className="inner-column">
                            <div className="sec-title">
                                <div className="title">WHY CallSense CHOOSE NOW</div>
                                <h2>CallSense Provide the Best <br/> Facilities For Call Center</h2>
                            </div>
                            <div className="bold-text">CallSense is an all-in-one AI tool equipped with emotion detection, speech recognition, sentiment analysis, and behavioral insights.</div>
                            <ul className="list-style-three">
                                <li>Emotion Detection: CallSense can accurately detect and analyze emotions expressed in audio</li>
                                <li>Speech Recognition: The tool employs sophisticated speech recognition algorithms to transcribe call audios.</li>
                                <li>Sentiment Analysis: CallSense goes beyond emotion detection and provides sentiment analysis.</li>
                                <li>Behavioral Insights: By combining emotion detection and sentiment analysis, CallSense generates valuable behavioral insights.</li>
                            </ul>
                            <Link onClick={ClickHandler} href="/contact" className="theme-btn btn-style-five"><span className="txt">Learn More</span></Link>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}


export default WhyChoose3;