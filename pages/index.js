import React, { Fragment } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Hero4 from '../components/hero4/hero4';
import Features2 from '../components/Features2/Features2';
import About2 from '../components/about2/about2';
import FunFact from '../components/FunFact';
import ServiceSectionS4 from '../components/ServiceSectionS4/ServiceSectionS4';
import CtaSection from '../components/CtaSection/CtaSection';
import Testimonial from '../components/Testimonial/Testimonial';
import Pricing from '../components/Pricing/Pricing';
import Scrollbar from '../components/scrollbar/scrollbar';
import PartnerSection from '../components/PartnerSection';
import TeamSection from "../components/TeamSection/TeamSection";
import ProjectSection from "../components/ProjectSection/ProjectSection";
import WhyChoose from "../components/WhyChoose/WhyChoose";
import BlogSection2 from "../components/BlogSection2/BlogSection2";
import BuildStep from "../components/BuildStep/BuildStep";
import Footer2 from "../components/footer2/Footer2";


const HomePage4 = () => {
    return (
        <Fragment>
            <Navbar />
            <Hero4 />
            <Features2 />
            <About2 />
            <ServiceSectionS4 />
            <PartnerSection styleClass={'style-three'}/>
            <WhyChoose/>
            <CtaSection />
            <FunFact />
            <BuildStep />
            <Testimonial />
            <TeamSection />
            <Pricing />
            <ProjectSection/>
            <BlogSection2 patClass={'s2'} />
            <Footer2 />
            <Scrollbar />
        </Fragment>
    )
};
export default HomePage4;