// Software Developed by Adam Iantorno for Portfolio Website 2024

import IMLogo from './logos/IMLogo.png'
import ElectransLogo from './logos/ElectransLogo.png'
import GrantMatchLogo from './logos/GrantmatchLogo.png'
import UwaftLogo from './logos/UwaftLogo.jpg'
import FLogo from './logos/416Logo.jpg'
import JuniorAILogo from "./logos/JuniorAILogo.png"

const ExpData = [
    {
        id: 0,
        company: 'JuniorAI',
        title: 'Sofware Engineering Intern',
        period: 'May - December 2023',
        link: 'https://www.getjuniorai.com',
        img: JuniorAILogo,
        desc: [
        'Building core functionality and infrastructure for custom Microsoft Word Add-in that uses machine learning to perform operations on document based on user command/queries',
        'Spearheaded development of autocomplete/predictive text feature of user queries based on n-gram natural language algorithm; built with Python and Flask API.',
        'Programming key UI features and updating back-end functionality based on user feedback',
        ],
        techonologies: ['React', 'Python', 'Machine Learning (Natual Language Processing)', 'REST APIs'],
    },
    {
        id: 1,
        company: "Impossible Metals",
        title: "Robotics Developer",
        period: "September - December 2022",
        link: "https://impossiblemetals.com/",
        img: IMLogo,
        desc: ["Developping vehicle control, state estimation, and simulation codes working within ROS and Python. Improving the performace of third iteration of vehicle leading to testing infront of customers.",
                "Testing sensors such as high grade DVL/USBL/Depth, that will be integrated into third and fourth iteration of vehicle.",
                "Assisting in vehicle deployments on the Geogian by activating vehicle housings, setting control system parameters, and record ros bag files."],
        techonologies: ['Python', 'ROS (2 Foxy)', 'Rasberry Pi']
        
    },
    {
        id: 2,
        company: "Electrans",
        title: "Mechatronics Engineer",
        period: "January - April 2022",
        link: "https://electranstech.com/",
        img: ElectransLogo,
        desc: ["Designed and built fixture with custom firmware to test sensors and pneumatics before being integrated into final system by creating SolidWorks model, designing schematic in Altium, and sourcing components.",
                "Programmed Arduino to convert UART signals to J1939 CAN to communicate wth vehicle CAN bus.",
                "Designed automotive wire harness with diagramming software and sourced IP6k9k connectors.",
                "Created 3D models and engineering drawings using SolidWorks of sheet metal brackets for product fixture."],
        techonologies: ['Solidworks', 'Arduino & C++', 'Circuit Maker']
    },
    {
        id: 3,
        company: "GrantMatch",
        title: "Junior Software Engineer",
        period: "May - October 2021",
        link: "https://us.grantmatch.com/grantmatch",
        img: GrantMatchLogo,
        desc: ["Created web application using Python and Rest APIs to track and process client invoices and legal documents.",
                "Led software team and collaborated with data team in design for new SaaS product for small businesses.",
                "Developed referral form software with VueJS front-end framework to acquire new clients for company."],
        techonologies: ['Python (Django)', 'VueJS', 'SQL']
    },
    {
        id: 4,
        company: "UWAFT",
        title: "Sensor Diagnostics Team Lead",
        period: "September 2019 - August 2020",
        link: "https://uwaterloo.ca/sedra-student-design-centre/directory-teams/university-waterloo-alternative-fuels-team-uwaft",
        img: UwaftLogo,
        desc: ["Programmed C++ radar diagnostics algorithm in ROS which was implemented into vehicles autonomous driving architecture.",
                "Analyzed collected sensor data using MATLAB to determine sensor error values and ranges.",
                "Designed unit test cases for sensors and diagnostic algorithm by performing DFMEA anaysis."],
        techonologies: ['C++', 'ROS']
    },
    {
        id: 5,
        company: "416 Automation",
        title: "Quality Assurance Engineer",
        period: "January - April 2020",
        link: "https://www.416automation.com/",
        img: FLogo,
        desc: ["Developped Python script wth NumPy & Pandas to analyze data from over 1000 machine operations for setting error ranges of ultrasonic sensors.",
                "Operated ultrasonic machine to perform quality assurance test and generate machine sequence files.",
                "Created product marketing card with Microsoft Office, attracting 2 large automotive clients for business. "],
        techonologies: ['Python (Numpy & Pandas)', 'Microsoft Excel']
    },
    
]

export default ExpData