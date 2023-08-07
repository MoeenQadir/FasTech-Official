import React, { Fragment } from 'react';
import Navbar2 from '../../components/Navbar2/Navbar2'
import Hero5 from '../../components/hero5/hero5';
import WhyChoose3 from '../../components/WhyChoose3/WhyChoose3';
import FunFact3 from '../../components/FunFact3/FunFact3';
import CtaSectionS2 from '../../components/CtaSectionS2/CtaSectionS2';
import Testimonial2 from '../../components/Testimonial2/Testimonial2';
import FaqSection from '../../components/FaqSection/FaqSection';
import PartnerSection from '../../components/PartnerSection';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Footer2 from '../../components/footer2/Footer2';
import ServiceSectionS3 from "../../components/ServiceSectionS3/ServiceSectionS3";
import Pricing from "../../components/Pricing/Pricing";

const HomePage5 = () => {
    return (
        <Fragment>
            <Navbar2 />
            <Hero5 />
            <WhyChoose3 />
            <FunFact3 />
            <ServiceSectionS3/>
            <CtaSectionS2 s2Class={'s2'}/>
            <Pricing />
            <FaqSection />
            <Footer2 />
            <Scrollbar />
        </Fragment>
    )
};
export default HomePage5;