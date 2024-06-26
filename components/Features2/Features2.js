import React from 'react'
import Link from 'next/link'
import sIcon from '/public/images/icons/service-pattern.png'
import sIcon2 from '/public/images/icons/service-pattern-2.png'

const Features2 = (props) => {


    const featres = [
        {
            fIcon: 'flaticon-shuttle',
            title: 'Cutting-Edge Innovations',
            des: 'We have seen great successes with everyone companies.',
        },
        {
            fIcon: 'flaticon-globe',
            title: 'Next-Gen SAAS Solutions',
            des: 'We have seen great successes with everyone companies.',
        },
        {
            fIcon: 'flaticon-network',
            title: 'Expertise in Latest Technologies',
            des: 'We have seen great successes with everyone companies.',
        },
        {
            fIcon: 'flaticon-bar-chart',
            title: 'Driving Technological Revolutions',
            des: 'We have seen great successes with everyone companies.',
        },

    ]


    return (
        <section className="services-section margin-top">
            <div className="auto-container">
            <div className="color-layer"></div>
                <div className="row clearfix">
                {featres.map((featres, fitem) => (
                        <div className="service-block col-lg-3 col-md-6 col-sm-12" key={fitem}>
                            <div className="inner-box">
                                <div className="color-layer"></div>
                                <div className="pattern-layer-one" style={{ backgroundImage: `url(${sIcon})` }}></div>
                                <div className="pattern-layer-two" style={{ backgroundImage: `url(${sIcon2})` }}></div>
                                <div className="icon-box">
                                    <span className={`fi ${featres.fIcon}`}></span>
                                </div>
                                <h5><Link href="/services">{featres.title}</Link></h5>
                                <div className="text">{featres.dec}</div>
                                <Link href="/services" className="arrow-icon flaticon-arrow-pointing-to-right"></Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Features2;