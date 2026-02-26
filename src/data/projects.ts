
export interface Project {
    pk: number;
    title: string;
    description: string;
    categories: string[];
    tags: string[];
    cover_image: string;
    diaglog_body: ProjectDialog;
}

export interface ProjectDialog {
    overview: string[];
    features: string[];
    learnings: string[];
    challenges: string[];
    links: Social[];
    gallery: string[];
}

export interface Social {
    name: string;
    url: string;
}

export const PORTFOLIO_PROJECTS: Project[] = [
    {
        pk: 1,
        title: "Carbon Footprint Tracker",
        description: "A social media platform for users to carbon footprint from travel and \"race\" others users for the lowest weekly footprint",
        categories: ["Software"],
        tags: ["Django (Python)", "HTML & CSS", "Javascript"],
        cover_image: "src/data/images/coverCftracker.png",
        diaglog_body: {
            overview: [
                "STUFF",
            ],
            features: [
                "STUFF"
            ],
            learnings: [
                "STUFF"
            ],
            challenges: [
                "STUFF"
            ],
            links: [
                {name: "Github", url: "URL"}
            ],
            gallery: [
                "img"
            ]
        }
    },
    {
        pk: 2,
        title: "Arduino Quadcopter",
        description: "A self-balancing quadcopter powered by arduino, gyro, and brushless motors",
        categories: ["Electrical", "Software"],
        tags: ["C++", "Arduino", "Soldering", "Sourcing Components"],
        cover_image: "src/data/images/coverQuad.png",
        diaglog_body: {
            overview: [
                "STUFF",
            ],
            features: [
                "STUFF"
            ],
            learnings: [
                "STUFF"
            ],
            challenges: [
                "STUFF"
            ],
            links: [
                {name: "Github", url: "URL"}
            ],
            gallery: [
                "img"
            ]
        }
    },
    {
        pk: 3,
        title: "Sheet Metal Brackets",
        description: "Design and drawings of mounting brackets for pneuamtincs cylinders on truck.",
        categories: ["Mechanical"],
        tags: ["SolidWorks", "Sheet Metal", "Engineering Drawings"],
        cover_image: "src/data/images/coverBracket.jpg",
        diaglog_body: {
            overview: [
                "STUFF",
            ],
            features: [
                "STUFF"
            ],
            learnings: [
                "STUFF"
            ],
            challenges: [
                "STUFF"
            ],
            links: [
                {name: "Github", url: "URL"}
            ],
            gallery: [
                "img"
            ]
        }
    },
    {
        pk: 4,
        title: "Arduino Enclosure",
        description: "A custom enclosure with LCD intergration and hardware UI to control a test fixture.",
        categories: ["Mechanical"],
        tags: ["SolidWorks", "I2C", "3D Printing", "Soldering", "Sourcing Components"],
        cover_image: "src/data/images/coverArduino.jpg",
        diaglog_body: {
            overview: [
                "STUFF",
            ],
            features: [
                "STUFF"
            ],
            learnings: [
                "STUFF"
            ],
            challenges: [
                "STUFF"
            ],
            links: [
                {name: "Github", url: "URL"}
            ],
            gallery: [
                "img"
            ]
        }
    },
    {
        pk: 5,
        title: "Hardware-in-Loop Test Fixture",
        description: "A pneuamtic and electrical fixture to verify PCB design and firmware logic before integrating them into a production environment",
        categories: ["Mechanical", "Electrical", "Software"],
        tags: ["C++", "Arduino", "SolidWorks", "Altium365", "CAN (J1939)"],
        cover_image: "src/data/images/coverHil.jpg",
        diaglog_body: {
            overview: [
                "STUFF",
            ],
            features: [
                "STUFF"
            ],
            learnings: [
                "STUFF"
            ],
            challenges: [
                "STUFF"
            ],
            links: [
                {name: "Github", url: "URL"}
            ],
            gallery: [
                "img"
            ]
        }
    },
    {
        pk: 6,
        title: "Autonomous Robot Arm",
        description: "A pick-and-place manipulator that uses object detection and inverse kinematics to move objects autonomously",
        categories: ["Software", "Electrical"],
        tags: ["Python", "C++", "Arduino", "Motor Drivers"],
        cover_image: "src/data/images/coverRobotArm.png",
        diaglog_body: {
            overview: [
                "STUFF",
            ],
            features: [
                "STUFF"
            ],
            learnings: [
                "STUFF"
            ],
            challenges: [
                "STUFF"
            ],
            links: [
                {name: "Github", url: "URL"}
            ],
            gallery: [
                "img"
            ]
        }
    },
    {
        pk: 7,
        title: "Automated Pressure Relief Mattress",
        description: "A 16-cell air mattress with automated inflation to prevent pressure ulcers, featuring a mobile app for real-time monitoring and manual control",
        categories: ["Electrical", "Software"],
        tags: ["Python", "Raspberry Pi", "I2C", "Mutlithreading", "PCB Design"],
        cover_image: "src/data/images/coverTurnCare.JPEG",
        diaglog_body: {
            overview: [
                "STUFF",
            ],
            features: [
                "STUFF"
            ],
            learnings: [
                "STUFF"
            ],
            challenges: [
                "STUFF"
            ],
            links: [
                {name: "Github", url: "URL"}
            ],
            gallery: [
                "img"
            ]
        }
    }

]