import React,{useState} from 'react'
import Link from 'next/link'
import ModalVideo from 'react-modal-video'
import hero1 from '/public/images/resource/banner-1.png'
import Image from 'next/image'
import CallSenseModal from "../callsense/CallSenseModal";

const Hero5 = () => {

    const [isOpen, setOpen] = useState(false)

    return (
        <section className="banner-section-two">
            <div className="auto-container">
                <div className="row clearfix">
                    <div className="image-column col-lg-6 col-md-12 col-sm-12">
                        <div className="inner-column">
                            <div className="image">
                                <Image src={hero1} alt="CallSense" />
                                <div className="play-box">
                                    <span onClick={()=> setOpen(true)} className="lightbox-image play-icon wow bounceIn" data-wow-delay="0ms" data-wow-duration="1500ms"><span className="flaticon-play"></span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="content-column col-lg-6 col-md-12 col-sm-12">
                        <div className="pattern-layer-one" style={{ backgroundImage: `url(${'/images/icons/icon-11.png'})` }}></div>
                        <div className="pattern-layer-two" style={{ backgroundImage: `url(${'/images/icons/icon-12.png'})` }}></div>
                        <div className="pattern-layer-three" style={{ backgroundImage: `url(${'/images/icons/icon-13.png'})` }}></div>
                        <div className="pattern-layer-four" style={{ backgroundImage: `url(${'/images/icons/icon-15.png'})` }}></div>
                        <div className="pattern-layer-five" style={{ backgroundImage: `url(${'/images/icons/icon-14.png'})` }}></div>
                        <div className="inner-column">
                            <div className="title">Best for You</div>
                            <h1>CallSense<br /> One Click Analyzer</h1>
                            <div className="text">CallSense is an advanced AI tool that intelligently analyzes audio, particularly call recordings,<br /> to provide accurate insights into the behavioral emotions expressed within the conversation.</div>
                            <div className="clearfix">
                                <CallSenseModal/>
                                <div className="phone-box">
                                    <span className="phone-icon fa fa-phone"></span>
                                    <a className="phone" href="tel:+92 313 1373109">+92 313 1373109</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="kxPCFljwJws" onClose={() => setOpen(false)} />
        </section>
    )
}

export default Hero5;