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
        sTitle: 'Efficient Call Handling',
        slug: 'Efficient-Call-Handling',
        sImg:simg1,
        Icon:'flaticon-pie-chart',
        sIcon:sIcon1,
        des:'Our SaaS product, Call Center, offers a streamlined solution for managing incoming and outgoing calls.',
    },
    {
        Id: '2',
        sTitle: 'Multi-Channel Support',
        slug: 'Multi-Channel-Support',
        sImg:simg2,
        sIcon:sIcon2,
        Icon:'flaticon-line-chart',
        des:'Call Center supports multiple communication channels, including voice calls, SMS, and live chat.',
    },
    {
        Id: '3',
        sIcon:sIcon3,
        sTitle: 'Robust Analytics',
        slug: 'Robust-Analytics',
        sImg:simg3,
        Icon:'flaticon-bar-chart',
        des:'Our product provides detailed analytics and reporting capabilities to track call metrics.',
    },
    {
        Id: '4',
        sTitle: 'Customizable IVR',
        slug: 'Customizable-IVR',
        sImg:simg4,
        sIcon:sIcon1,
        Icon:'flaticon-search-1',
        des:'Call Center offers a flexible and customizable IVR (Interactive Voice Response) system and call flows.',
    },
    {
        Id: '5',
        sTitle: 'Integration with CRM',
        slug: 'Integration-CRM',
        sImg:simg5,
        Icon:'flaticon-gear',
        des:'Integration with CRM and Business Tools: Our SaaS product seamlessly integrates with popular CRM systems and business tools.',
    },
    {
        Id: '6',
        sTitle: 'Scalable and Secure',
        slug: 'Scalable-Secure',
        sImg:simg6,
        Icon:'flaticon-cloud-computing',
        des:'Call Center is built on a scalable infrastructure that can accommodate the needs of businesses of all sizes.',
    }
]

export default Services;