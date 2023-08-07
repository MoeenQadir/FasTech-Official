import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import fImg from '/public/images/resource/faq.png'
import Image from 'next/image';


const FaqSection = (props) => {

    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };


    return (

        <section className="faq-section">
            <div className="auto-container">
                <div className="row clearfix">
                    <div className="accordian-column col-lg-6 col-md-12 col-sm-12">
                        <div className="inner-column">
                            <div className="sec-title">
                                <div className="title">Some Faq’s</div>
                                <h2>Work with a Dedicated CallSense Product</h2>
                            </div>
                            <div className="accordion-box">
                                <div className="accordion block">
                                    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                                        <AccordionSummary
                                            expandIcon={""}
                                            aria-controls="panel1bh-content"
                                            id="panel1bh-header"
                                        >
                                            <Typography>What types of audio recordings can CallSense analyze? <div
                                                className="icon flaticon-right-arrow-1"></div></Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                                CallSense can analyze various types of audio recordings, including call
                                                audios from customer service interactions, sales calls, meetings,
                                                interviews, and more. </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                </div>
                                <div className="accordion block">
                                    <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                                        <AccordionSummary
                                            expandIcon={""}
                                            aria-controls="panel2bh-content"
                                            id="panel2bh-header"
                                        >
                                            <Typography>How accurate is CallSense in detecting emotions?
                                                <div className="icon flaticon-right-arrow-1"></div>
                                            </Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                                CallSense boasts high accuracy in detecting emotions and sentiments,
                                                thanks to its state-of-the-art AI algorithms and continuous training on
                                                vast datasets. However, its effectiveness may vary based on audio
                                                quality and language nuances. </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                </div>
                                <div className="accordion block">

                                    <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                                        <AccordionSummary
                                            expandIcon={""}
                                            aria-controls="panel3bh-content"
                                            id="panel3bh-header"
                                        >
                                            <Typography> Can CallSense be integrated with other communication? <div
                                                    className="icon flaticon-right-arrow-1"></div></Typography>

                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                                Yes, CallSense is designed with flexibility in mind and can be
                                                integrated seamlessly with various communication platforms and call
                                                recording services, providing a versatile solution for
                                                businesses. </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                </div>
                                <div className="accordion block">

                                    <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                                        <AccordionSummary
                                            expandIcon={""}
                                            aria-controls="panel4bh-content"
                                            id="panel4bh-header"
                                        >
                                            <Typography>Is the data analyzed by CallSense stored securely?
                                                <div className="icon flaticon-right-arrow-1"></div>
                                            </Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                                Absolutely, data privacy and security are top priorities for CallSense.
                                                All analyzed data is stored in a secure environment, and the tool
                                                complies with relevant privacy regulations to safeguard sensitive
                                                information.
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="image-column col-lg-6 col-md-12 col-sm-12">
                        <div className="inner-column">
                            <div className="image titlt" data-tilt data-tilt-max="3">
                                <Image src={fImg} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default FaqSection;