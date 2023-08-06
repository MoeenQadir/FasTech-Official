import simg1 from '/public/images/resource/service-1.jpg'
import simg2 from '/public/images/resource/service-5.jpg'
import simg3 from '/public/images/resource/service-6.jpg'
import simg4 from '/public/images/resource/service-7.jpg'
import simg5 from '/public/images/resource/service-8.jpg'
import simg6 from '/public/images/resource/service-9.jpg'

import sIcon1 from '/public/images/icons/service-1.png' 
import sIcon2 from '/public/images/icons/service-2.png' 
import sIcon3 from '/public/images/icons/service-3.png' 



const Services = [
    {
        Id: '1',
        sTitle: 'Website Design & Development',
        slug: 'Content-Marketing',
        sImg:simg1,
        Icon:'flaticon-pie-chart',
        sIcon:sIcon1,
        des:'Transforming your vision into captivating websites with seamless user experiences.',
    },
    {
        Id: '2',
        sTitle: 'Web 3.0 Solutions',
        slug: 'Social-Marketing',
        sImg:simg2,
        sIcon:sIcon2,
        Icon:'flaticon-line-chart',
        des:'Embrace decentralization and blockchain integration for secure, transparent, and innovative digital solutions.',
    },
    {
        Id: '3',
        sIcon:sIcon3,
        sTitle: 'App Development', 
        slug: 'App-Development',
        sImg:simg3,
        Icon:'flaticon-bar-chart',
        des:'Create, publish, and promote engaging content to generate more traffic and build a dedicated community.',
    },
    {
        Id: '4',
        sTitle: 'SEO Optimization', 
        slug: 'SEO-Optimization',
        sImg:simg4,
        sIcon:sIcon1,
        Icon:'flaticon-search-1',
        des:'Get more website traffic, more customers, and more online visibility with powerful SEO services.',
    },
    {
        Id: '5',
        sTitle: 'AI, ML & Data Science',
        slug: 'Web-Development',
        sImg:simg5,
        Icon:'flaticon-gear',
        des:'Empowering businesses with intelligent automation, predictive insights, and personalized customer experiences.',
    },
    {
        Id: '6',
        sTitle: 'Custom Software',
        slug: 'PPC-Advertising',
        sImg:simg6,
        Icon:'flaticon-cloud-computing',
        des:'Tailored software solutions that optimize operations, enhance productivity, and drive business growth.',
    }
]

export default Services;