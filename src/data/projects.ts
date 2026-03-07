
export interface Project {
  pk: number;
  title: string;
  description: string;
  categories: string[];
  tags: string[];
  cover_image: string;
  dialog_body: ProjectDialog;
}

export interface ProjectDialog {
  overview: string[];
  features: string[];
  learnings: string[];
  challenges: string[];
  links: Social[];
  gallery: Image[];
}

export interface Social {
  name: string;
  url: string;
}

export interface Image {
  ref: string;
  caption: string
}

export const PORTFOLIO_PROJECTS: Project[] = [
  {
    pk: 1,
    title: "Carbon Footprint Tracker",
    description: `A social media platform for users track their carbon footprint
                  emissions from travel and \"race\" others users for the lowest 
                  weekly footprint`,
    categories: ["Software"],
    tags: ["Django (Python)", "HTML & CSS", "Javascript", "SQL"],
    cover_image: "src/data/images/coverCftracker.png",
    dialog_body: {
      overview: [
        `On August 9th, 2021, the Intergovernmental Panel on Climate Change (IPCC)
         released the first part of their sixth assessment of the climate crisis. 
         The report highlighted how human activity has increased the global average 
         surface temperature by 1.50 degrees celsius since 1850. The report's central 
         conclusion to limiting future human-induced global warming is to limit 
         cumulative carbon dioxide emmisions. This is because scientists have 
         found a near-linear link between cumulative anthropogenic carbon dioxide 
         emissions and the global warming they cause.`,

        `The objective of this project was to design and build a web application 
         that allows users to track their carbon dioxide emissions for increased 
         self-awareness of personal emmisions and incentivize lifestyle changes 
         to limit global warming. The project, named GreenFoot, must allow users 
         to track their carbon footprint, input how far they travelled & by what 
         method to calculate carbon dioxide emissions, and add friends to compare 
         weekly carbon dioxide emissions. GreenFoot was built using a MySQL 
         database, Django (Python) backend, and a HTML, CSS & JavaScript frontend.`,

        `This project was submitted as a final capstone project in the Harvard
        University’s CS50 Web Programming Course with Python and JavaScript. The 
        requirements from the course were that the project be an original, complex 
        web application that uses an SQL Database, Django (Python) back-end, 
        JavaScript front-end, and be mobile responsive.`
      ],
      features: [
        "Full-stack social media platform using MySQL, Django, & JavaScript",
        "Let users 'race' against friends in weekly competitions for lowest emission",
        "User authentication system using JWT, with password resetting via email",
        "CSRF prevention using Django libraries",
        "Plots of weekly user emissions using Chart.js library"
      ],
      learnings: [
        "My first full-stack web-development project",
        "Gained proficiency in responsive design w/ pagination for large requests",
        "Improved my understanding of efficient data storage in relational databases",
      ],
      challenges: [
        "Maintaining responsive UI for mobile devices with Chart.js plots",
        "Managing friend requests and temporary records with a SQL database",
      ],
      links: [
        { 
          name: "Github", 
          url: "https://github.com/adamiantorno/carbon-footprint-tracker" 
        },
      ],
      gallery: [
        {
          caption: "Input Page",
          ref: "src/data/images/cftrackerInput.png"
        },
        {
          caption: "Friends Page",
          ref: "src/data/images/cftrackerFriends.png"
        },
        {
          caption: "Race Page",
          ref: "src/data/images/cftrackerShow.png"
        },
        {
          caption: "Race list Page",
          ref: "src/data/images/cftrackerRaces.png"
        },
        {
          caption: "Profile Page",
          ref: "src/data/images/coverCftracker.png"
        },
      ]
    }
  },
  {
    pk: 2,
    title: "Arduino Quadcopter",
    description: `A remote controlled quadcopter with auto-levelling functionality
                  - powered by an Arduino, gyroscope, and brushless motors`,
    categories: ["Electrical", "Software"],
    tags: ["C++", "Arduino", "Soldering", "Sourcing Components"],
    cover_image: "src/data/images/coverQuad.png",
    dialog_body: {
      overview: [
        `As I was exposed to new aspects of engineering from my co-ops, I realized 
         that I was still quite unfamiliar with electronics, firmware, and 
         printed circuit boards (PCBs). Since I would not get much exposure to 
         these concepts during my mechanical engineering degree, I decided to 
         build an arduino-powered quadcopter.`,

        `As a starting point, I found an electrical schematic for an arduino-powered 
         quadcopter online, and based my project on it. I wanted to avoid pre-built 
         drone kits to properly learn the engineering concepts I was applying 
         and experience sourcing individual components for a project which is a key
         component of professional engineering.`,

        `From there I assembled and soldered all of the components,
         and programmed the Arduino Uno to respond to a controller's inputs and 
         auto-level the quadcopter.`
      ],
      features: [
        "Remote-controlled quadcopter based on Arduino Uno & gyroscope sensor",
        "Auto-levelling functionality using pin change interrupts",
        "Calibrated electronic speed controllers (ESCs) for weight-distribution",
      ],
      learnings: [
        "Developed pin change interrupts and setting an interrupt service routine",
        "Learned to send and receive data using the I2C communication protocol",
        "Enhanced prototyping skills with delicate soldering of ICs to Arduino"
      ],
      challenges: [
        "Calibrating ESCs based on PID correction calculations",
        "Troubleshooting random voltage drops from ESC pulses",
        "Fine-tuning motor speeds based on battery placement and weight-distribution of quadcopter"
      ],
      links: [],
      gallery: [
        {
          caption: "Quadcopter reference electrical schematic",
          ref: "src/data/images/quadCircuitSchema.jpg",
        },
        {
          caption: "Quadcopter components",
          ref: "src/data/images/quadComponents.jpg",
        },
        {
          caption: "Connection between Arduino and Gyro",
          ref: "src/data/images/quadCircuitBoard.png",
        },
        {
          caption: "Quadcopter cover photo",
          ref: "src/data/images/coverQuad.png",
        }
      ]
    }
  },
  {
    pk: 3,
    title: "Sheet Metal Brackets",
    description: `Designed and created drawings of sheet metal mounting brackets 
                  for pneumatic cylinders that will be placed on heavy-duty vehicle.`,
    categories: ["Mechanical"],
    tags: ["SolidWorks", "Sheet Metal", "Engineering Drawings"],
    cover_image: "src/data/images/coverBracket.jpg",
    dialog_body: {
      overview: [
        `For this project I modelled two different metal brackets in Solidworks 
         that would support large pneumatic cylinders for a prototype. I then 
         created engineering drawings of both brackets in SolidWorks to be sent 
         to an overseas manufacturer.`,

        `The brackets were manufactured, passed quality assurance, and installed 
         on a commerical vehicle for a pilot program.`
      ],
      features: [],
      learnings: [],
      challenges: [],
      links: [],
      gallery: [
        {
          caption: "Bracket drawings & built",
          ref: "src/data/images/bracketDisplay.png",
        },
        {
          caption: "Bracket Installed",
          ref: "src/data/images/coverBracket.jpg",
        },
      ]
    }
  },
  {
    pk: 4,
    title: "Arduino Enclosure",
    description: `A custom enclosure with LCD integration and hardware UI to 
                  control a test fixture.`,
    categories: ["Mechanical"],
    tags: ["SolidWorks", "I2C", "3D Printing", "Soldering", "Sourcing Components"],
    cover_image: "src/data/images/coverArduino.jpg",
    dialog_body: {
      overview: [
        `This was a subproject for my Hardware-in-Loop (HIL) Test fixture project.`,

        `After the HIL test fixture had been initially assembled and tested, 
         there were three main areas of improvement. First, the operator's switches 
         were too small and soldered too close together which made it difficult to 
         toggle one switch without affecting another. Second, the LCD was also 
         tilted at an angle that made it difficult to see when standing above 
         the test fixture. Finally, all wiring should be hidden or strapped down 
         to prevent it from interfering with the test fixture’s main electrical
         harness.`,

        `As a solution, I designed and 3D printed an enclosure to ergonomically
         mount the LCD screen & switches, and conceal the Arduino & its wiring 
         from the test fixture.`
      ],
      features: [
        "3D-printed enclosure for Arduino Nano with mounting slots for switches and LCD screen",
        "Secure mounting point for Arduino Nano using threaded inserts",
        "Latching mechanism to easily remove top half of enclosure for easy access to internal components",
      ],
      learnings: [
        "Improved assembly & prototyping skills by soldering Arduino and wires to solderboard",
        "Developed understanding of aesthetic and user-centric design",
        "Enhanced understanding of I2C using it for LCD display"
      ],
      challenges: [
        "Designing robust 3D printed latching mechanism for enclosure",
        "Troubleshooting data bus speeds for LCD display"
      ],
      links: [],
      gallery: [
        {
          caption: "Initial implementation of test fixture Arduino",
          ref: "src/data/images/arduinoInitial.png",
        },
        {
          caption: "3D CAD of Arduino enclosure",
          ref: "src/data/images/arduinoCad.png",
        },
        {
          caption: "Arduino inside mounted enclosure",
          ref: "src/data/images/arduinoSolder.jpeg",
        },
        {
          caption: "Final version of the product",
          ref: "src/data/images/coverArduino.jpg",
        },
      ]
    }
  },
  {
    pk: 5,
    title: "Hardware-in-Loop Test Fixture",
    description: `A pneumatic and electrical fixture to verify PCB design and 
                  firmware logic before integrating them into a production environment`,
    categories: ["Mechanical", "Electrical", "Software"],
    tags: ["C++", "Arduino", "SolidWorks", "Altium365", "CAN (J1939)"],
    cover_image: "src/data/images/coverHil.jpg",
    dialog_body: {
      overview: [
        `During my co-op, the engineers at Electrans Technologies had completed 
         the design of their robotic system and were transitioning to its assembly 
         and integration into commercial vehicles. The system would be an Electronic 
         Control Unit (ECU) on the vehicle’s CAN network. As Electrans makes this 
         transition, it is crucial that they verify the design of the printed 
         circuit board (PCB), firmware, and hardware implementations before they 
         are integrated in the final system. This lets engineers detect faults in 
         their design early in a lower-risk environment, and prevents bottlenecks 
         in the verification process by waiting for the full assembly.`,

        `The objective of this project was to design and build a Hardware-in-Loop 
        (HIL) Test fixture that verifies the design and functionality of the 
        ECU’s PCB and firmware. The details of the ECU are confidential and 
        therefore are not included below.`,

        `The project involved reducing the number of hardware components to a 
         model that produces an equivalent environment and electrical signals, 
         mounting all components ergonomically for an operator to easily manage,
         and developing an interface for the operator to mimic the interactions 
         that the ECU would have with a heavy-duty vehicle on the CAN network.`
      ],
      features: [
        "A pneumatic & electrical circuit that replicate core sensors and actuators of the system's state-machine",
        "Operator interface using external switches and LCD screen to replicate heavy-duty vehicle states and outgoing messages",
        "Custom Arduino function that converts switch states into outgoing CAN messages (SAE J1939)",
        "Custom 3D-printed mounting brackets to securely house all actuators and sensors"
      ],
      learnings: [
        "Applied bit manipulation to efficiently create CAN messages from C++ variables",
        "Learned new communication protocol and created custom function to transmit its messages",
        "Learned to design complex electrical harnesses in CircuitMaker",
        "Increased ability to modularize code by having different sensors inherit same base class"
      ],
      challenges: [
        "Recuding total number of hardware components and circuit size while keeping core functionality.",
        "Managing power distribution for all components while limiting current draw and preventing inductive kickback",
        "Sourcing alternative components at a low budget that still meet funcitonal requirements",
      ],
      links: [],
      gallery: [
        {
          caption: "3D-printed mounts for pneumatic cylinders, proximity sensors, latch, and motor",
          ref: "src/data/images/hilMounts.png",
        },
        {
          caption: "Full CAD of HIL Fixture",
          ref: "src/data/images/hilCad.png",
        },
        {
          caption: "HIL Electrical Circuit Breadboard",
          ref: "src/data/images/hilArduinoBread.jpg",
        },
        {
          caption: "HIL Electrical Schematic",
          ref: "src/data/images/hilArduinoCircuit.png",
        },
        {
          caption: "Final version of the product",
          ref: "src/data/images/coverHil.jpg",
        },
      ]
    }
  },
  {
    pk: 6,
    title: "Autonomous Robot Arm",
    description: `A pick-and-place robotic arm that uses object detection and 
                  inverse kinematics calculations to move objects autonomously`,
    categories: ["Software", "Electrical"],
    tags: ["Python", "C++", "Arduino", "Motor Drivers", "OpenCV"],
    cover_image: "src/data/images/coverRobotArm.png",
    dialog_body: {
      overview: [
        `My favourite course during my 3rd year at the University of Waterloo 
         was definitely ME380 – Mechanical Engineering Design Workshop. The 
         course revolved around a term project where each group of students had 
         to design and build a pick-and-place robotic arm that follows a set of 
         constraints and requirements, and two additional requirements chosen by 
         the groups.`,

        `Our team chose to design a manipulator that was also autonomous and 
         capable of dealing with objects that had complex geometries. This meant 
         that the manipulator needed to detect objects, calculate the required 
         movements to get to the object, and handle objects that are difficult 
         to grasp.`,

        `In our group, I was focused on the electric and firmware aspects of the 
         manipulator, including computer vision, circuit design, and motor control 
         based on inverse kinematics. However, everyone on the team was very 
         multi-disciplinary and involved in all major design decisions.`,

        `Our final product was a 6-DOF robot arm that had 2 stepper motors 
         and 3 servo motors. The gripper and linkages were mainly 3D-printed. A 
         laptop was connected to a camera to perform object detection and inverse 
         kinematics calculations, with control commands sent from the laptop to 
         an Arduino through UART.`,
      ],
      features: [
        "6-DOF robot arm that can autonomously pick-and-place complex objects",
        "Object detection algorithm based on HSV contrast using OpenCV Python",
        "Bonus program to control robot manipulator using laptop keyboard",
      ],
      learnings: [
        "Enhanced understanding of fine-motor control through H-Bridges and PWM",
        "Applied inverse kinematics equations using jacobian matrices in NumPy",
        "Leveraged pytest to verify code before mechatronic assembly was complete"
      ],
      challenges: [
        "Developing and troubleshooting inverse kinematics algorithm",
        "Calibrating servo motors to share single PWM source",
        "Efficiently sending command signals from computer to Arduino"
      ],
      links: [
        { name: "Github", url: "https://github.com/adamiantorno/robotarm-380" }
      ],
      gallery: [
        {
          caption: "Robot Arm Final Product",
          ref: "src/data/images/RobotArmBody.png",
        },
        {
          caption: "Engineering Spec",
          ref: "src/data/images/robotArmEngSpec.png",
        },
        {
          caption: "Gripper Designs",
          ref: "src/data/images/robotArmGripperDesigns.png",
        },
        {
          caption: "Manipulator Designs",
          ref: "src/data/images/robotArmManipulatorDesign.png",
        },
        {
          caption: "Full Robot Arm Circuit",
          ref: "src/data/images/robotArmBreadboardCircuit.png",
        },
        // {
        //   caption: "Robot Arm Software Diagram",
        //   ref: "src/data/images/robotArmSoftwareFlow.png",
        // },
        // {
        //   caption: "Robot Arm Inverse Kinematics Equations",
        //   ref: "src/data/images/robotArmKinematics.png",
        // },
        {
          caption: "Robot Arm HSV POC",
          ref: "src/data/images/robotArmObjectDetect.jpg",
        },
      ]
    }
  },
  {
    pk: 7,
    title: "Automated Pressure Relief Mattress",
    description: `A 16-cell air mattress with automated inflation to prevent 
                  pressure ulcers, featuring a mobile app for real-time 
                  monitoring and manual control`,
    categories: ["Electrical", "Software"],
    tags: ["Python", "Raspberry Pi", "I2C", "Multithreading", "PCB Design"],
    cover_image: "src/data/images/coverTurnCare.JPEG",
    dialog_body: {
      overview: [
        `Pressure ulcers, also known as bed sores, are an affliction that breaks 
         down the skin and underlying tissue when an area of skin is placed under 
         consistent pressure. Despite being a preventable affliction, pressure 
         ulcers still affect 3 million adults in the U.S., costing hospitals 
         and patients an average of $37 800 per hospital stay.`,

        `For my engineering capstone project, my group and I built a smart mattress 
         topper, with over a dozen air cells that use pressure sensors and 
         compressed air to improve blood flow and comfort by autonomously adjusting 
         the pressure in the appropriate air cell. The system was paired with a 
         mobile app that we developed to allow real-time monitoring and control.
         Our goal was to reduce both the labour-intensive nature of pressure ulcer 
         care, and provide a solution that can also be used outside of the hospital,
         for instance at nursing homes and private residences.`,

        `For this project, I led the firmware implementation, while supporting 
         electrical integration and system integration with the mobile app. The 
         system consisted of 16 piezoresistive sensors & one-way valves 
         which were interfaced with a Raspberry Pi and Arduino using I2C and 
         solenoid drivers, respectively. The Raspberry Pi acted as a server for 
         the mobile app to connect with using REST APIs.`,
      ],
      features: [
        `Air-cell mattress topper with piezoresistive sensors to identify 
         vulnerable areas with stangnant presure against patient`,

        `16 pneumatic one-way valves autonomously controlled by solenoid driver ICs`,

        `React Native mobile app integration with REST API allowing real-time 
         monitoring and individual cell control`
      ],
      learnings: [
        `Designed PCB for piezoresistive sensor ICs custom footprint for air-cells`,

        `Grey understanding of Python multithreading to allow automatic 
         control while listening for mobile app requests`,

        `Built pneumatic & electrical circuits with minimal footprint to fit within mattress footprint`,

        `Used separate power supply for solenoids to protect against inductive loads`,
      ],
      challenges: [
        `Implementing power-switched multiplexing to poll multiple sensors that have the same hardcoded I2C address`,
        `Effectively managing mutex lock for two threads in Python program`,
        `Sourcing solenoid driver IC that can actuate several solenoids at once`
      ],
      links: [
        { name: "Github", url: "https://github.com/adamiantorno/turncare-backend" }
      ],
      gallery: [
        {
          caption: "In-progress POC Mattress and Pneumatic Circuit",
          ref: "src/data/images/capstonePrototypeMattress.png",
        },
        {
          caption: "Assembling Air Cell",
          ref: "src/data/images/capstoneAssemblyAirCell.png",
        },
        {
          caption: "Live App data with High Cell Pressure",
          ref: "src/data/images/capstoneAppComparison.png",
        },
        {
          caption: "CAD of Sensor Housing for Air Cell",
          ref: "src/data/images/capstoneSensorHousing.png",
        },
        {
          caption: "Mounted Pressure Sensor in Housing",
          ref: "src/data/images/capstonePressureSensorHousing.png",
        },
        {
          caption: "Software Sequence Diagram",
          ref: "src/data/images/capstoneSequenceDiagram.png",
        },
        {
          caption: "Capstone Symposium Poster",
          ref: "src/data/images/capstonePoster.png",
        }
      ]
    }
  }

]