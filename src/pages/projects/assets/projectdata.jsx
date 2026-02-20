// Software Developed by Adam Iantorno for Portfolio Website 2024

import { Container, Col, Row, Table } from "react-bootstrap";

import uwaftGroup from "./imgs/uwaftGroup.jpg";
import cftrackerGraph1 from "./imgs/cftrackerGraph1.png";
import cftrackerGraph2 from "./imgs/cftrackerGraph2.png";
import cftrackerFlow from "./imgs/cftrackerFlow.png";
import cftrackerInput from "./imgs/cftrackerInput.png";
import coverCftracker from "./imgs/coverCftracker.png";
import cftrackerRaces from "./imgs/cftrackerRaces.png";
import cftrackerShow from "./imgs/cftrackerShow.png";
import cftrackerFriends from "./imgs/cftrackerFriends.png";
import coverBracket from "./imgs/coverBracket.jpg";
import bracketDisplay from "./imgs/bracketDisplay.png";
import quadCircuitSchem from "./imgs/quadCircuitSchem.jpg";
import quadComponents from "./imgs/quadComponents.jpg";
import quadCircuitBoard from "./imgs/quadCircuitBoard.png";
import coverQuad from "./imgs/coverQuad.png";
import quadMotorArm from "./imgs/quadMotorArm.jpg";
import hilCANFrame from "./imgs/hilCANFrame.png";
import hilMounts from "./imgs/hilMounts.png";
import hilCad from "./imgs/hilCad.png";
import hilArduinoBread from "./imgs/hilArduinoBread.jpg";
import hilArduinoCircuit from "./imgs/hilArduinoCircuit.png";
import coverHil from "./imgs/coverHil.jpg";
import arduinoInitial from "./imgs/arduinoInitial.png";
import arduinoCad from "./imgs/arduinoCad.png"; 
import arduinoSolder from "./imgs/arduinoSolder.jpeg";
import coverArduino from "./imgs/coverArduino.jpg";
import robotArmEngSpec from "./imgs/robotArmEngSpec.png";
import robotArmGripperDesigns from "./imgs/robotArmGripperDesigns.png";
import robotArmManipulatorDesign from "./imgs/robotArmManipulatorDesign.png";
import robotArmBreadboardCircuit from "./imgs/robotArmBreadboardCircuit.png";
import robotArmCircuitSchematic from "./imgs/robotArmCircuitSchematic.png";


const ProjData = [
	{
		id: "10",
		title: "Automated Pressure Relief Mattress",
		category_ids: ['Mechanical', 'Electrical', 'Software'],
		date: "2023-2024",
		skills: [
		],
		body: (
			<Container>
				<Row>
					<p className="italics">
						THIS SECTION IS IN PROGRESS! Coming Soon...
					</p>
				</Row>
			</Container>
		)
	},
	{
		id: "9",
		title: "Autonomous Robot Arm",
		category_ids: ['Mechanical', 'Electrical', 'Software'],
		date: "Spring 2023",
		skills: [
			'Arduino',
			'Python (OpenCV)',
			'Motor Control',
			'SolidWorks',
			'3D Printing',
		],
		body: (
			<Container>
				<Row>
					<Col>
						<p>
							My favourite course during my 3rd year at the University of Waterloo 
							was definitely ME380 – Mechanical Engineering Design Workshop. The 
							course was based on a term project where each group of students had to 
							design and build a pick-and-place manipulator following specific 
							constraints and requirements. I really enjoyed how this course pushed 
							groups through each phase of the engineering design process and included 
							the construction of a working prototype. It was also really interesting 
							to see the different groups’ final manipulators and showcasing how group 
							successfully tackled the constraints and requirements in a different manner.
						</p>
						<p>
							Our team chose to design a manipulator that was also autonomous 
							and capable of dealing objects with complex geometries. This meant the 
							manipulator needed to detect objects, calculate required movements, and handle 
							objects ofvarious shapes and sizes, specifically those that are difficult to 
							grasp. For the project, I was mainly focused on the electric and firmware 
							aspects of the manipulator, including computer vision and motor control. 
							However, everyone on the team - Aimen Shaikh, Lauren Kissoon, David Sebastian 
							Acosta Ruiz, Vlad Nica, and Adam Iantorno (myself) – wore many hats and was 
							involved in major design decisions. 
						</p>
					</Col>
				</Row>
				<hr />
				<Row>
					<Col>
						<h2>Need Analysis & Design Criteria</h2>
						<p>
						A need exists for a manipulator to lift and move a complex geometry object from a 
						specified pick-up location to a specified drop-off zone autonomously without user 
						intervention. The system must also feature the capability to handle adversarial objects. 
						The design constraints and criteria related to the course requirements and our team’s 
						own desire for autonomous and adversarial grasps is shown in the table below.
						</p>
						<img src={robotArmEngSpec} alt="Engineering Specifications" />
						<figcaption className="mx-auto italics">Engineering Specifications</figcaption>
					</Col>
				</Row>
				<hr />
				<h2>Design Process</h2>
				<Row>
					<Col md={8}>
						<h4>Gripper Design</h4>
						<p>
							We explored three initial concepts for the gripper, with the focus on being able 
							to pick up challenging and adversarial objects. Each of the designed grippers 
							were to be powered by a micro-servo motor which was mounted into a rack-and-pinion 
							system to translate a cylindrical rod that would open and close the gripper’s 
							prongs through attached levers. All components of the gripper were 3D-printed 
							except for the rack which was aluminum-based, the servo motor, and the bolts to 
							mount the servo motor, this was to reduce the final moment arm of the gripper on 
							the base of the manipulator for easier operation.
						</p>
						<p>
							The final design was a three-pronged gripper with an angled fin edge. This was 
							chosen for its adaptability to various object geometries, as the fins would 
							increase the contact area with the object and ensure grip by scooping the objects. 
							The fins also acted as a cage which prevented the object from falling out of grip 
							during operation of the manipulator – a common issue with the other designs. 
						</p>
					</Col>
					<Col md={4} className="modal-img">
						<img src={robotArmGripperDesigns} alt="Gripper Designs" />
						<figcaption className="mx-auto italics">Initial and Final Gripper Design CAD</figcaption>
					</Col>
				</Row>
				<Row>
					<Col md={4} className="modal-img">
						<img src={robotArmManipulatorDesign} alt="Gripper Designs" />
						<figcaption className="mx-auto italics">Manipulator Design and Assembly</figcaption>
					</Col>
					<Col md={8}>
						<h4>Manipulator Design</h4>
						<p>
							Similarly, three designs were considered for the manipulator. This included 
							a 4-DOF articulated arm, a crane-pulley system, and a 3D prismatic manipulator. 
							Ultimately, the 4-DOF arm was chosen for its ability to lift objects to a higher 
							height at a lower material cost. The arm was powered by two servo motors as the 
							elbow and wrist joint, and two stepper motors at the shoulder and base rotation 
							joint, as shown below. This is because we found from testing that the base and 
							shoulder joints required a larger torque that was beyond the servo motors, 
							therefore steppers were used. This arm was integrated with the three-pronged 
							gripper and controlled by an Arduino microcontroller. The design of the arm 
							focused on achieving precise and smooth movements while maintaining stability 
							by not overextending the arm and created too much of a moment on the base. The 
							use of stepper motors allowed for accurate positioning, which was essential 
							since we were pursuing autonomous operation.
						</p>
					</Col>
				</Row>
				<hr />
				<Row>
					<Col>
						<h4>Electrical & Controls</h4>
						<p>
							Based on the design of the manipulator and gripper, the project requires 2 stepper motors and 3 servo motors. The electrical and software design was then based on the control of these components to achieve the desired engineering specifications. The motors would be controlled by either a microcontroller such as an Arduino or Raspberry Pi. A Raspberry Pi would have been ideal as its increased computing power could be used for the computer vision aspect of the project. 
						</p>
						<p>
						However, Raspberry Pi’s were quite expensive at the time, so an Arduino was selected to be paired with a laptop to process the computer vision. A 5V 10A power supply was sourced and set as the foundation to source our motors upon. The provided servo motors from the University of Waterloo, the T9005 motors, were used since they met the required ratings to operate with the power supply. For stepper motors, two NEMA 17 motors were sourced from the University of Waterloo.
						</p>
					</Col>
				</Row>
				<Row>
					<Col md={6} className="modal-img">
						<img src={robotArmCircuitSchematic} alt="Gripper Designs" />
						<figcaption className="mx-auto italics">Circuit High-Level Schematic</figcaption>
					</Col>
					<Col md={6} className="modal-img">
						<img src={robotArmBreadboardCircuit} alt="Gripper Designs" />
						<figcaption className="mx-auto italics">Breadboard Circuit</figcaption>
					</Col>
				</Row>
				<Row>
					<Col>
						<h4>Software</h4>
						<p className="italics">
							THIS SECTION IS IN PROGRESS!!!!... Coming Soon
						</p>
					</Col>
				</Row>
			</Container>
		)
	},
	{
		id: "1",
		title: "Hardware In Loop Testing Fixture",
		category_ids: ["Mechanical", "Electrical"],
		date: "Winter 2022",
		skills: [
			"SolidWorks",
			"Altium 365",
			"Arduino & C++",
			"CAN Bus & J1939",
			"Sourcing Components",
		],
		body: (
			<Container>
				<Row>
					<Col>
						<p>
							The objective of this project was to design and build a Hardware Testing Fixture for
							the Printed Circuit Boards (PCBs) for a new Electronic Control Unit (ECU) that would
							be integrated into a heavy-duty vehicle's CAN bus. The exact details of the ECU are
							confidential to Electrans Technologies and therefore are not included in this report.
							The test fixture had the same mechanical actuating components and sensors as the final
							system to emulate their integration with the controller in an isolated environment.
						</p>
					</Col>
				</Row>
				<hr></hr>
				<Row>
					<Col md={6}>
						<h3>Background Information</h3>
						<p>
							The Controller Area Network (CAN) is a two-wire vehicle bus that is an international
							standard for the automotive industry known as ISO 11898. Compared to previous
							dedicated wire harnesses used in vehicles, the CAN bus is a high-integrity system that
							reduces wiring cost, complexity, and weight. Components connected through the CAN bus
							are referred to as nodes or electronic control units (ECUs). ECUs communicate by
							broadcasting information, such as sensor data, onto the CAN bus and all others ECU can
							check the data and decide whether to receive or ignore it”. Data broadcasted across
							the CAN bus are sent in packets called frames. A CAN frame consists of 8 parts, which
							in the adjacent figure.{" "}
						</p>
					</Col>
					<Col md={6} className="modal-img">
						<img src={hilCANFrame} alt="Standard CAN Frame" className="img-hil-canframe" />
						<figcaption className="mx-auto italics">Standard CAN Frame</figcaption>
					</Col>
				</Row>
				<Row>
					<Col>
						<p>
							Different vehicles and automotive companies may use different CAN communication
							protocols in their systems. This is because, while standard CAN is extremely effective
							in automotive and smaller embedded applications, it is not alone suitable for networks
							and messages with more than 8 bytes. The Society of Automotive Engineers (SAE)
							developed SAE J1939 which is a higher-layer protocol based on standard CAN
							communication. J1939 is an industry standard heavy-duty vehicles and off-highway
							machines such as construction, material handling, mass transportation, forestry
							machines, agricultural machinery, maritime and military applications. There are
							several key characteristics of the J1939 protocol. Most notably, J1939 extends the CAN
							identifier from 11-bits to 29-bits by adding an 18-bit unique frame identifier known
							as the Parameter Group Number (PGN). As an example, based on the SAE J1939-7
							documentation, a J1939 message with a PGN of 61444 (HEX ID 0F004), represents the
							“Electronic Engine Controller 1 – EEC1”. Additionally, its signals sent in the data
							bytes are identified with Suspect Parameter Numbers (SPN). They can be described in
							terms of their bit start position, bit length, scale, offset and unit.
						</p>
					</Col>
				</Row>
				<hr></hr>
				<Row>
					<Col>
						<h3>Problem Definition</h3>
						<p>
							Electrans Technologies is in the process of the designing a new ECU for heavy-duty
							vehicles. Electrans has completed the 3D CAD model, design the central PCB, and
							programming its firmware. As Electrans transitions to full assembly of the ECU, it is
							imperative that the start-up properly tests the controller’s compatibility with the
							ECU’s hardware - sensors, pneumatics, motors. If not, Electrans risks the chance of
							damaging the assembly or missing key points of improvement. Additionally, by not
							testing their controller in parallel with the assembly of the ECU, Electrans will
							create a bottleneck in their design process. This is because certain changes to the
							controller could be realized now through testing while the ECU is being assembled
							rather waiting for assembly to finish and tsetings afterwards. Therefore, Electrans
							requires a test fixture to test the main controller with the mechanical components of
							the system before adding it to the final assembly.
						</p>
					</Col>
				</Row>
				<Row>
					<Col md={7}>
						<h3>System Requirements</h3>
						<Table>
							<thead>
								<tr>
									<th>Requirment</th>
									<th>Description</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>HILSR-1</td>
									<td>
										The fixture shall have the same set of actuators and sensors as the new ECU to
										emulate their inputs and outputs with the controller board in the main assembly
									</td>
								</tr>
								<tr>
									<td>HILSR-2</td>
									<td>
										The fixture shall use an Arduino and physical switches to create CAN signals to
										mimic CAN communication with a heavy-duty vehicle.
									</td>
								</tr>
								<tr>
									<td>HILSR-3</td>
									<td>
										The fixture shall hold removable metal pieces to activate any pairs of proximity
										sensors together.
									</td>
								</tr>
								<tr>
									<td>HILSR-4</td>
									<td>
										The controller device(s) under test can be placed into or removed from the
										fixture any modifications to the hardware
									</td>
								</tr>
								<tr>
									<td>HILSR-5</td>
									<td>The fixture’s hardware shall have hard emergency e-stop</td>
								</tr>
							</tbody>
						</Table>
					</Col>
					<Col md={5}>
						<h3>Contraints and Criteria</h3>
						<p>
							First, the test fixture must be easy to operate. Engineers will likely be making
							continuous changes to the controller during the design process and should be able to
							make those changes very easily.
						</p>
						<p>
							Secondly, the design process of the test fixture must minimize costs. This will
							increase the profitability of the overall ECU project.
						</p>
					</Col>
				</Row>
				<Row>
					<Col>
						<h3>Design and Building</h3>
						<p>
							Based on HILSR-1, the Hardware-In-Loop (HIL) test fixture must have the same
							mechanical components as the final system. However, in the final system, there are two
							pairs of cylinders which are connected to the same air flow. Therefore, the test
							fixture will require two less cylinders than the ECU since only one cylinder is
							required per pair to demonstrate their behavior. Consequently, there will also be one
							less auto switch on the test fixture since it would be mounted on one of the paired
							cylinders in the final system.
						</p>
						<p>
							The purpose of the test fixture is to analyze the operation controller with mechanical
							components in an isolated environment. Therefore, all of the components were mounted
							onto a horizontal, wooden board. This made it easy to see all of the components at
							once and mount them quickly using screws. This exlcudes the auoswtiches which were
							mounted to the pneuamtic cylinders to indicate the state of the cyclinder with an LED.{" "}
						</p>
						<p>
							To secure the components in an optimal orientation – for instance the cylinders
							oriented horizontally and the stepper motor upwards – mounting brackets were designed
							and 3D printed for nearly all of the components.{" "}
						</p>
					</Col>
				</Row>
				<Row>
					<Col className="modal-img">
						<img src={hilMounts} alt="Cylinder Mount" className="img-centered img-hil-mounts" />
						<figcaption>
							3D Printed mounts for pneumatic cylinders, proximity sensors, latch, and motor
						</figcaption>
					</Col>
				</Row>
				<Row>
					<Col>
						<p>
							The only requirement for the location of the mechanical components on the test fixture
							was that the inductive proximity sensors must react to the cylinders and trigger a
							signal when they are fully extended. Therefore, the proximity sensors were placed
							opposite to the cylinders, 8mm from the fully extended position of the rod. This was
							based on the proximity sensors’ range specification so the sensor would only trigger
							when the cylinder was fully extended. The placement of the rest of the components was
							based on weight distribution and keeping the controller and Arduino along of the edges
							of the fixture. This would make it easier for the engineers to reach the two
							components.
						</p>
					</Col>
				</Row>
				<Row>
					<Col className="modal-img">
						<img
							src={hilCad}
							alt="Full 3D Model of the Fixture"
							class="img-centered img-hil-cad"
						/>
						<figcaption>Full CAD of HIL Fixture</figcaption>
					</Col>
				</Row>
				<Row>
					<Col>
						<h3>Software & CAN Communication</h3>
						<p>
							There are four signals that the ECU will receive from the vehicle's CAN Bus: engine
							speed, current gear, start signal, and latch state. . For each signal, an appropriate
							switch was selected for the HIL Fixture. For the engine speed signal, a linear
							potentiometer was selected since it allows users to choose any value within a set
							interval based on the resistance of the switch. For the current gear signal, a
							3-position rotary encoder was selected to choose between a parked, reverse, and
							forward state. For the start signal, a mom-off (momentarily on/off) push button was
							selected since the start signal only needed to be sent for a moment. Finally, for the
							state of the latch signal, a on-off toggle switch was selected since the latch only
							has two states: connected and disconnected. While the start signal and the latch state
							signal are specific to the ECU, the engine speed and current gear signals can be found
							in the SAE J1939-7 documentation.
						</p>
					</Col>
				</Row>
				<Row>
					<Col>
						<Table>
							<thead>
								<tr>
									<th>Signal</th>
									<th>PGN</th>
									<th>SPN</th>
									<th>Start Position (bit)</th>
									<th>Length (bits)</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>Engine Speed</td>
									<td>61444</td>
									<td>190</td>
									<td>4</td>
									<td>8</td>
								</tr>
								<tr>
									<td>Transmission Current Gear</td>
									<td>61443</td>
									<td>523</td>
									<td>24</td>
									<td>8</td>
								</tr>
							</tbody>
						</Table>
					</Col>
				</Row>
				<Row>
					<Col>
						<p>
							An Arduino Nano was used as the main board for the selected swtiches. The test
							fixture’s Arduino program was separated into three main tasks: initializing and
							updating the switches, updating the LCD display, and sending CAN messages. Each switch
							had its own class, written in its own separate .cpp and header file.. Each switch
							class had both private and public members. The private members included the current
							state of the switch, the switch’s input pin on the Arduino, and, for the
							potentiometer, the interval of values to select from. The public members included the
							switch’s own initialization and update functions, which would be called from the main
							.ino file.
						</p>
						<p>
							The LCD display was connected to the Arduino using Inter-Integrated Circuit (I2C)
							protocol. I2C is a short distance communication bus that only requires two signal
							wires to exchange information: Serial Data (SDA) and Serial Clock (SCL). This is much
							more efficient than connecting directly to the LCD display since that would require
							twelve signal wires. Based on the Arduino pinout, the SDA and SCL wires of the LCD
							were connected to pin 23 and 24 of the Arduino, respectively. In the firmware, the LCD
							was controlled using the Arduino library “LiquidCrystal_I2C” which was written by
							Frank de Brabander and is maintained by Marco Schwartz. In each of the switches update
							function, the LCD was updated to display the current state of the switch being
							updated.{" "}
						</p>
					</Col>
				</Row>
				<Row>
					<Col md={5} className="modal-img">
						<img src={hilArduinoCircuit} alt="Arduino Circuit" />
						<img src={hilArduinoBread} alt="Arduino Breadboard Setup" />
						<figcaption>HIL Arduino Circuit and Breadboard Setup</figcaption>
					</Col>
					<Col md={7}>
						<p>
							{" "}
							To create and send CAN signals from the Arduino, a Serial CAN bus module was connected
							to the circuit. This module was able to turn the Arduino’s UART signals into CAN
							signals that were to be sent to the main controller board. Since the Arduino was
							focused on sending specific signals rather than an entire CAN frame, a custom function
							was created to properly place a switch’s CAN signal into a CAN frame without affecting
							the rest of the data of the frame:
						</p>
						<p>
							As parameters, the function takes an uint8_t array with eight elements (each element
							represents a byte from the original CAN frame) that is passed by reference, the value
							of the signal, the start bit of the signal within the CAN frame, and the length of the
							signal. First, the array is read into a uint64_t variable with an 8-iteration for-loop
							that saves an element of the array into the uint64-t variable then shifts the bits of
							the variable to the left by 8 before repeating the process with the next element of
							the array. After the for-loop, a second uint64-t variable is created equal to the
							value of the signal that was passed as a parameter. This variable is then left shifted
							to the start position of the signal. Then, the original uint64_t variable is passed
							through an AND mask to clear the bits in the position signal, and then passed through
							an OR mask with the uint64_t variable equal to the value of the signal to successfully
							save the signal into the uint64_t variable without affecting any other bits. Finally,
							the uint64_t variable is saved into the array that was passed by reference with
							another 8-iteration for-loop and right shifting the bits.
						</p>
						<p>
							The CAN signals from the Arduino circuit were monitored with a Vector CANalyzer tool
							to ensure that the Serial-to-CAN module and custom CAN message function was working as
							expected. Once all components, connections, and firmware had been tested on the
							breadboard, all components and wires were soldered to a protoboard and mounted to the
							test fixture.
						</p>
					</Col>
				</Row>
				<hr></hr>
				<Row>
					<Col>
						<h3>Final Design and Next Steps</h3>
						<p>
							To connect all of these components to the controller, a wire harness needed to be
							designed and assembled. When examining each of the component's signal wires, the auto
							switches had the smallest wire gauge of 24 AWG, while the rest of the components had a
							22 AWG wire gauge. Therefore, I selected the MCON 1.2 series connector for the wire
							harness since they are compatible with 24-16 AWG wire and extremely durable and safe
							with an IP of 6K9K. Additionally, the MCON connectors range from 2 to 6 position
							connectors, therefore a connector is available for all components except the pneumatic
							manifold. The pneumatic manifold uses a 25-pin D-Sub connector which was also sourced
							externally.{" "}
						</p>
						<p>
							The completed HIL fixture is used only internally at Electrans for engineers to test
							their controllers for the current design of the final system Any new iterations to the
							controller or final ECU product will need to be reflected in the HIL fixture. This
							could be adding or removing a component or changing connectors to the controller.
							Therefore, the test fixture will likely require consistent updates to remain up to
							date and effectively test the controller before it is placed into the vehicle.
						</p>
					</Col>
				</Row>
				<Row>
					<Col className="modal-img">
						<img src={coverHil} alt="Final Product" className="img-centered img-hil-final" />
					</Col>
				</Row>
			</Container>
		),
	},
	{
		id: "2",
		title: "Arduino Enclosure",
		category_ids: ["Mechanical"],
		date: "Winter 2022",
		skills: ["SolidWorks", "Sourcing Components", "Soldering"],
		body: (
			<Container>
				<Row>
					<Col>
						<p>
							This was a subproject for the Hardware Testing fixture project. After the entire HIL
							test fixture had been assembled and was operating as expected, there were three main
							points of improvement. First, the switches were too small and soldered too close
							together which made it difficult to operate one without affecting another. Second, the
							LCD was also tilted at an angle that made it difficult to see when standing above the
							test fixture. Finally, all wiring should be hidden or strapped down to prevent it from
							interacting with or getting confused for the test fixture’s wire harness.{" "}
						</p>
					</Col>
				</Row>
				<Row>
					<Col className="modal-img">
						<img
							src={arduinoInitial}
							alt="Intial Arduino Setup"
							className="img-centered img-arduino-initial"
						/>
						<figcaption>Initial Arduino Setup for HIL Fixture</figcaption>
					</Col>
				</Row>
				<Row>
					<Col>
						<p>
							{" "}
							As a solution, I designed an enclosure that could contain the arduino circuit, support
							the LCD at a softer angle, and have larger switches in a more ergonomic position. The
							enclosure was separated into a bottom half and top half. The bottom half of the
							enclosure had mounts for the protoboard and CAN module, a hole on the rear side for
							output wires, and a lot of extra space to keep all internal wires contained. To
							maximize user experience, the new, larger switches were sourced with the final
							approval from the engineers at Electrans since they would be operating the fixture. To
							connected to bottom and top halves of the enclosure, I designed a custom latching
							system so that the engineers could easily reomve the top half without having to
							unmount the entire enclosure. Additionally, the enclosure was mounted using the same
							screws and design as the aforementioned mounting brackets and screws for the
							mechanical components.
						</p>
					</Col>
				</Row>
				<Row>
					<Col md={6} className="modal-img">
						<img src={arduinoCad} alt="Arduino CAD" />
					</Col>
					<Col md={6} className="modal-img">
						<img src={arduinoSolder} alt="Arduino Soldered to New Enclosure" />
					</Col>
				</Row>
				<Row>
					<Col className="modal-img">
						<img src={coverArduino} alt="Arduino Final Implementation" />
					</Col>
				</Row>
			</Container>
		),
	},
	{
		id: "3",
		title: "Quadcopter Powered by Arduino",
		category_ids: ["Electrical", "Software"],
		date: "Summer 2021",
		skills: ["Arduino & C++", "Soldering", "Design", "Sourcing Components"],
		body: (
			<Container>
				<Row>
					<Col>
						<p>
							As I was exposed to new aspects of engineering from my co-ops, I realized that I was
							very unfamiliar with electronics, firmware, and printed circuit boards (PCBs). Since I
							would not get much exposure to these concepts during my mechanical engineering degree,
							I decided to build an arduino-powered quadcopter. I completed this project during the
							2020 summer and fall term.{" "}
						</p>
					</Col>
				</Row>
				<Row>
					<Col md={8} className="modal-flex">
						<p>
							As a starting point, I found an electrical schematic for an arduino-powered quadcopter
							online, shown to the right, and based my project on it. I wanted to avoid pre-built
							drone kits during so that I could really learn the engineering concepts and experience
							sourcing components for a project as if I was at a start-up or company.
						</p>
					</Col>
					<Col md={4} className="modal-img">
						<img src={quadCircuitSchem} alt="Quadcopter Electricla Schematic" />
						<figcaption>Sourced Arduino Quadcopter Circuit</figcaption>
					</Col>
				</Row>
				<Row>
					<Col>
						<p>
							I sourced all the components from various suppliers such as Amazon, Abra Electronics,
							and Digikey. Since I was sourcing components individually and not buying a whole kit,
							it was imperative that I ensure all of the components would connect properly. A table
							and picture of all of the components are shown below. I also purchased a soldering
							kit, variety resistor pack, and male-to-male breadboard jumper cables.
						</p>
					</Col>
				</Row>
				<Row>
					<Col md={6} className="modal-img">
						<img
							src={quadComponents}
							alt="Quadcopter Components"
							className="img-quad-components"
						/>
						<figcaption>All components Laid Out</figcaption>
					</Col>
					<Col md={6}>
						<Table>
							<thead>
								<tr>
									<th>Component</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>1 x Arduino Uno</td>
								</tr>
								<tr>
									<td>1 x MPU-6050 Gyroscope sensor</td>
								</tr>
								<tr>
									<td>1 x 450 Quadcopter Frame Kit with Integrated PCB Wiring</td>
								</tr>
								<tr>
									<td>4 x 1000KV Brushless Motor Kit with 30A ESC and Propellers</td>
								</tr>
								<tr>
									<td>1 x Flysky FS-i6 6-CH TX Transmitter & Remote Controller</td>
								</tr>
								<tr>
									<td>1 x 2S/3S lipo battery charger</td>
								</tr>
							</tbody>
						</Table>
					</Col>
				</Row>
				<hr></hr>
				<Row>
					<h3>Assembly</h3>
					<Col md={4} className="modal-img">
						<img src={quadMotorArm} alt="Circuit Board Soldering" />
						<figcaption>Brushless Motor Mounted onto Quadcopter Arm</figcaption>
					</Col>
					<Col md={8} className="modal-flex">
						<p>
							After sourcing all of the components, the first step was to assemble them together.
							First, I mounted the motors to the quadcopter's arms with the provided fasteners -
							this is hshown on the figure to the left. From there, I soldered the Electronic Speec
							Controllers (ESCs) to the bottom piece of the integrated wired frame and attached them
							to the bottom of the arms so they can easily connect to the brushless motors. Finally,
							the battery's connector wires were soldered to the bottom frame piece and the arms
							were mounted to the bottom frame with the provided fasteners.
						</p>
					</Col>
				</Row>
				<Row>
					<Col md={8} className="modal-flex">
						<p>
							Once the bottom frame was assemebled, I switched my foucs to connecting the arduino
							and gyro to the assembly. Following the aforementioned schematic, I first soldered my
							wires to the gyroscope. I connected the I2C SDA & SCL wires to the corresponding ports
							on the Arduino Uno, and the ground and power to the bottom frame of the quadcopter. I
							connected two resistors (1.5k and 1k) in series and used them between the connection
							with the battery and arduino's VIN port. When connecting the arduino to the ESCs the
							specific pins used were noted from programming the controls in the next step. The
							remainng wires were integrated following the schematic. Finally, the transmitter was
							mounted to the lower frame using double sided tape.{" "}
						</p>
					</Col>
					<Col md={4} className="modal-img">
						<img src={quadCircuitBoard} alt="Circuit Board Soldering" />
						<figcaption>Connection between Arduino and Gryo</figcaption>
					</Col>
				</Row>
				<hr></hr>
				<Row>
					<Col>
						<h3>Software</h3>
						<p>
							Once assembly was finished, the next step was setting up the software and controls of
							the quadcopter. The biggest hurdle for me during this process was understanding Pin
							change interrupts. Pin change interrupts interrupt a running program when the state of
							a digital pin chagnes. For the Arduino Uno the pin change interrupt will trigger if
							the D8, D9, D10, D11, D12 pins were toggled. Therefore, the receiver inputs for the
							transmitter were connected to pins D8-D11. In terms of software, this meant enabling
							the pin change interrupt by setting the PCIE0 bit to one, and enabling each digital
							pin individually by the PCMSK0 register. Once the interrupts were enabled, I
							researched and figured out that I needed to develop an interupt routine that would
							execute everytime one of the receiver pins changed states. This subroutine would check
							if each input switched on/off; remember the state; and adjust that pins timer
							accordingly. I forked a software library online that would use these input states to
							determine the yaw, roll and pitch of the quadcopter based on these inputs and set the
							ESC's accordingly.{" "}
						</p>
						<p>
							The final step of the quadcopter proejct was integrating the gyro into the system. I
							was using the L3G4200D gyro; based on its documentation, I found that its output was
							an angular rate sensor. The registers that i used in this project were CTRL_REG1,
							CTRL_REG4, and the outputs for the x, y, and z axis. I needed to set the BDU bit of
							CTRL_REG4 since the angular rate data is sent through two bytes, and we need to be
							sure both bytes are from the same semple time. During operation, the arduino is
							reading angualr rate data from the register addresses of the x, y, and z registers.
							Since I would be requesting 6 bytes of data (2 for each axis), I programmed the
							Arduino to wait until all 6 bytes have been received before reading its values.
						</p>
						<p>
							The final task of the quadcopter project was calibrating the ESC's for flight. The
							ESCS are controlled with a 1000us till 2000us pulse - 1000 being off, and 2000 being
							full throttle. Knowing this, the main software loop became:
						</p>
						<ol>
							<li>Read the gyro angular rate data</li>
							<li>Calculate the PID corrections</li>
							<li>Calculate the puls for every sec</li>
							<li>Compensate every pulse for voltage drop</li>
							<li>Send the Calculated pulses (1000-2000) to the ESCs</li>
						</ol>
					</Col>
				</Row>
				<hr></hr>
				<Row>
					<Col>
						<h3>Summary</h3>
						<p>
							In summary, this project was a great learning experience that allowed be to better
							understand electronics and firmware. I was actually surpised how much I learned in
							terms of programming PCB registers and motor controls. This project was very helpful
							when I was working on the Hardware-In-Loop test fixture during my co-op at Electrans.
						</p>
					</Col>
				</Row>
				<Row>
					<Col className="modal-img">
						<img
							src={coverQuad}
							alt="Final Quadcopter Assembly"
							className="img-centered img-quad-final"
						/>
					</Col>
				</Row>
			</Container>
		),
	},
	{
		id: "4",
		title: "Sheet Metal Brackets",
		category_ids: ["Mechanical"],
		date: "Winter 2022",
		skills: ["SolidWorks (Sheet Metal Feature)", "Engineering Drawings"],
		body: (
			<Container>
				<Row>
					<Col>
						<p>
							For this project I modelled two differnet metal brackets in Solidworks that would
							support large pneumatic cylinders for a prototype. I then created engineering drawings
							of both brackets in solidworks to be sent to an overseas manufacturer.
						</p>
					</Col>
				</Row>
				<Row>
					<Col md={4} className="modal-img">
						<img src={bracketDisplay} alt="Bracket Drawing" />
					</Col>
					<Col md={8} className="modal-img">
						<img src={coverBracket} alt="Bracket on Prototype" />
					</Col>
				</Row>
			</Container>
		),
	},
	{
		id: "5",
		title: "Carbon Greenfoot Tracker",
		category_ids: ["Software"],
		date: "Winter 2021",
		skills: ["Web Development", "Django (Python)", "Javascript", "HTML & CSS", "Git"],
		body: (
			<Container>
				<Row>
					<Col>
						<h3 className="modal-subtitle">Summary</h3>
						<p>
							{" "}
							On August 9th, 2021, the Intergovernmental Panel on Climate Change (IPCC) released the
							first part of their sixth assessment of the climate crisis. The report highlighted how
							human activity has increased the global average surface temperate by 1.50C since 1850.
							The report also highlighted potential climate scenarios that could occur; as the
							temperature increased with each scenario, climate extremes, such as heat waves, heavy
							precipitation, droughts, and tropical cyclones became increasingly frequent. The
							reports central conclusion to limiting future human-induced global warming requires
							limiting cumulative carbon dioxide emissions. This is because scientists have found a
							near-linear link between cumulative anthropogenic CO2 emissions and the global warming
							they cause.{" "}
						</p>
						<p>
							The objective of the project is to design and build a web application that
							incentivizes users to track their carbon dioxide emissions to increase their
							self-awareness of their emissions and make lifestyle changes to limit global warming.
							The project, named GreenFoot, must allow users to track their carbon footprint, input
							how far they travelled with what method to calculate carbon dioxide emissions, and add
							friends to compare weekly carbon dioxide emissions. GreenFoot was built using a MySQL
							relational database, Django (Python) backend, and a HTML, CSS & JavaScript frontend.
							The code for this project can be found on my Github{" "}
							<a href="https://github.com/adamiantorno/capstone">here</a>.
						</p>
						<p>
							Outside of this report, this project was submitted as a{" "}
							<span className="bolden">
								final capstone project in the University of Harvard’s CS50 Web Programming Course
								with Python and JavaScript.
							</span>{" "}
							The requirements from the course were that the project be an original, complex web
							application that uses an SQL Database, Django (Python) back-end, JavaScript front-end,
							and be mobile responsive.
						</p>
					</Col>
				</Row>
				<hr></hr>
				<Row>
					<Col>
						<h3 className="modal-subtitle">Background Information</h3>
						<p>
							On August 9th, 2021, the Intergovernmental Panel on Climate Change (IPCC) released{" "}
							<a href="https://www.unep.org/resources/report/climate-change-2021-physical-science-basis-working-group-i-contribution-sixth">
								the first part of their sixth assessment of the climate crisis
							</a>
							. The report was divided into four parts: the current state of the climate, possible
							climate futures, climate information for risk assessment per region, and limiting
							future climate change.
						</p>
					</Col>
				</Row>
				<Row>
					<Col md={8} className="modal-flex">
						<p>
							The first section, the current state of the climate, presented how human activity has
							affected the earth’s climate and is causing both current and future consequences.
							Human activity has increased average global surface temperatures by approximately
							1.50C since 1850. The first section of the report also highlighted the current
							consequences of global warming. Globally averaged precipitation has likely increased
							since 1950. There are observed changes in near-surface ocean salinity, mid-latitude
							storms, and the global retreat of glaciers since the 1990s. Global mean sea level has
							increase by 0.20 m between 1901 and 2018. Climate zones have shifted poleward in both
							hemispheres. Weather and climate extremes, such as “heat waves, heavy precipitation,
							droughts, and tropical cyclones”, have become increasingly frequent. It is “extremely
							likely” that each of these anomalies have human activity as the main driver.
						</p>
					</Col>
					<Col md={4} className="modal-img">
						<img src={cftrackerGraph1} alt="Graph" />
						<figcaption>
							Change in global surface temperature (annual average) as observed and simulated using
							human & natural and natural factors
						</figcaption>
					</Col>
				</Row>
				<Row>
					<Col md={6} className="modal-img">
						<img src={cftrackerGraph2} alt="Near Linear" />
						<figcaption>
							Figure 2: Near-linear relationship between cumulative CO2 emissions and the increase
							in global surface temperature.
						</figcaption>
					</Col>
					<Col md={6} className="modal-flex">
						<p>
							The second section of the report, possible climate futures, examined five potential
							scenarios that could occur based the potential differences in global surface
							temperature between 1850-1900 to 2081-2100. The five scenarios are SSP1-1.9, SSP1-2.6,
							SSP2-4.5, SSP3-7.0 and SSP5-8.5 and their differences are 1.0 to 1.80C, 1.3 to 2.40C,
							2.1 to 3.50C, 2.8 to 4.60C, 3.3 to 5.70C, respectively. Unfortunately, despite these
							varying temperature differences, each scenario has global surface temperatures
							increase until at least the mid-century. Additionally, many climate changes from past
							and future greenhouse gas emissions are “irreversible for centuries to millennia,
							especially changes in the ocean, ice sheets and global sea level”. When examining each
							of the scenarios, there is a direct relation between the level of changes in a climate
							system and the increase in global warming. In other words, the worse the scenario, the
							greater the frequency and intensity of hot extremes, marine heatwaves, heavy
							precipitation, agricultural and ecological droughts, and more.
						</p>
					</Col>
				</Row>
				<Row>
					<Col>
						<p>
							The reports central conclusion to limiting future human-induced global warming
							requires limiting cumulative carbon dioxide emissions - reaching at least net zero
							emissions. This is because scientists have found a near-linear link between cumulative
							anthropogenic CO2 emissions and the global warming they cause..
						</p>
					</Col>
				</Row>
				<hr></hr>
				<Row>
					<Col>
						<h3 className="modal-subtitle">My Solution: GreenFoot</h3>
					</Col>
				</Row>
				<Row>
					<Col>
						<h4>Problem Definition</h4>
						<p>
							The IPCC’s report describes a clear link between global warming and increasing carbon
							dioxide emissions, and that these emissions are coming from an increase in human
							activity. The transportation sector represents the largest share of greenhouse gas
							emissions with 29% of total emissions. This is from the burning of fossil fuels for
							vehicles such as cars, trucks, and planes. Therefore, it is likely that humans can
							lower their carbon dioxide emissions by reducing the amount they travel or altering
							their transportation methods. A study in New Zealand examined climate change awareness
							and its link with travel related decision-making found that climate change awareness
							does not appear to influence travel-related decisions. Unfortunately, this study was
							limited to aviation travel and did not examine daily travel with cars, trucks, trains,
							etc. Therefore, citizens need a method to exactly see how much carbon dioxide they are
							emitting with their travels in order to reflect and make a lifestyle change.
						</p>
						<p></p>
					</Col>
				</Row>
				<Row>
					<Col md={6}>
						<h4>Main Functions</h4>
						<p>
							First, the user must be able to view their carbon dioxide emissions, henceforth carbon
							footprint. The user should be able to view both their total carbon footprint and their
							carbon footprint on a smaller scope such as per week or month.
						</p>
						<p>
							Second, users must be able to input how far they travelled (km/h) and their method of
							travel. Once inputted, the web app will calculate the amount of carbon dioxide emitted
							based on the method of travel and add that value to their carbon footprint. This
							allows users to consistently track their emissions every time they travel.
						</p>
						<p>
							Third, the user should be able to compete in weekly bouts with their friends to see
							which user has the lowest carbon footprint for the week. These races will socially
							incentivize users to decrease their carbon footprint while having fun competing with
							friends. This function also creates a sub-function within the web app to allow users
							to add or remove other users as friends.
						</p>
						<p>
							Finally, the web app needs to have an authentication form for users to sign in or
							create an account. This allows each user to have their own saved profile that they can
							access from any network or device.
						</p>
					</Col>
					<Col md={6}>
						<h4>Constraints and Criteria</h4>
						<p>
							{" "}
							The constraints and criteria of a project are imperative, as they not only ensure the
							project’s design encompasses a client’s vision, but also create a means to allow the
							comparison between other possible designs.{" "}
						</p>
						<p>
							The constraints represent requirements that must be met in order for a design to be
							successful. First, the web app must have a simplistic design. A simple design allows
							users to quickly understand how to use the web app. Therefore, each page of the web
							app should only have on main function; for instance, the input page should only have
							the form to input the distance travelled and method of travel. Secondly, the web
							application must be secure from web attacks. Since the web application handles a
							user’s progress as well as their personal information such as email addresses, it is
							imperative that the application be secure to protect that information.
						</p>
						<p>
							The criteria of a project act as a guide to its completed state, as they are typically
							measurable attributes. The only criterion for this web app is for it to be responsive
							to all devices – including mobile. This constraint is imposed by Harvard’s CS50 Web
							Programming Course with Python and JavaScript.{" "}
						</p>
					</Col>
				</Row>
				<hr></hr>
				<Row>
					<h3>Design</h3>
					<Col md={6} className="modal-flex">
						<p>
							When designing GreenFoot, the main functions, constraint, and criteria acted as
							guidelines. To maintain a simple design, a unique page was created for each
							requirement: an Input page for users to input their travels, a Profile Page for users
							to see their total and weekly carbon footprint, a Friends page where users can add or
							remove other users as friends, a Races page where users can view all races and also
							request to start a race with a friend, and a unique Race page for each race. Each page
							will be accessible to each other with a common nav bar at the top of each page.
							Additionally, to add a first layer of security, there will be an initial sign-in or
							sign-up page to authenticate users and protect their account.
						</p>
					</Col>
					<Col md={6} className="modal-img">
						<img src={cftrackerFlow} alt="GreenFoot Flow Chart" className="img-gf-flow" />
						<figcaption>GreenFoot Web Application Flow Chart</figcaption>
					</Col>
				</Row>
				<Row>
					<Col>
						<Table className="center-table">
							<thead>
								<tr>
									<th>Web Application Page</th>
									<th>Functions</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>Input</td>
									<td>
										<ul>
											<li>
												Input form for users to submit how far they travelled and their method of
												travel
											</li>
											<li>
												Calculate gallons of CO2 per km based on form submission and add to profile
												and the user’s races
											</li>
										</ul>
									</td>
								</tr>
								<tr>
									<td>Profile</td>
									<td>
										<ul>
											<li>Display total emissions by user</li>
											<li>Display weekly emmisions by user</li>
										</ul>
									</td>
								</tr>
								<tr>
									<td>Friends</td>
									<td>
										<ul>
											<li>Display all users</li>
											<li>If the user is a friend, current user can remove the user as a friend</li>
											<li>
												If the user is not a friend, current user can send the user a friend requset
											</li>
										</ul>
									</td>
								</tr>
								<tr>
									<td>Race List</td>
									<td>
										<ul>
											<li>Display all races, user can click a race to be taken to its race page</li>
											<li>Send a race reqeust to a friend to start a race</li>
											<li>Accept or decline current user's race requests</li>
										</ul>
									</td>
								</tr>
								<tr>
									<td>Race</td>
									<td>
										<ul>
											<li>Show each users emissions for the race</li>
											<li>If the race is over, display the winner</li>
										</ul>
									</td>
								</tr>
							</tbody>
						</Table>
					</Col>
				</Row>
				<Row>
					<Col>
						<p>
							A well-designed database dictates the robustness and scalability of its web
							application. The Harvard course requires that the web application use a SQL relational
							database. Therefore, GreenFoot database will have related tables, known as models. The
							essential models for GreenFoot are User, Race, and Footprint. The User model will have
							fields like username, email, password, and friends. The friends will be an SQL
							many-to-many relationship between other User models. The Race model will have a
							timestamp, two users, and an end date. Finally, the Footprint model will have a total
							emissions integer field, a start date to track their point in the week, and seven
							integer fields for the emission of each the day of the week.{" "}
						</p>
						<p>
							The Django framework that was used in the project is a Model-Template-View framework
							(MTV). The backend will query the database and render the required page based on the
							request made by the user. For instance, if the current user clicks the link to the
							Profile page on the navbar, the request will be sent to the server and the app will
							run the function specific to the profile view and send the appropriate data (HTML &
							CSS, JavaScript) to the client. The Input page has two functions based on the type of
							request. A get request has the web app create two forms with Django Form library and
							renders those forms to the client. A post request has the web app acquire the data
							sent from the client, validates the data and then calculates the data to add it to the
							user’s carbon footprint.
						</p>
						<p>
							Greenfoot’s frontend was developed with HTML & CSS, and vanilla JavaScript. No
							framework was used since the Harvard course only taught vanilla JavaScript. The
							frontend also used Bootstrap, an open-source CSS library, since its design
							functionality allows for easier mobile-responsiveness. For simple designs, each page
							will have a nav bar on top to link each of the pages together. One of the main aspects
							is the display of weekly carbon footprint. The display could be completed with a line
							graph, pie chart, or histogram. It was decided to use a histogram to give a clean and
							simple comparison as well as show a separation between the days. This histogram was
							created using the Chart JS open-source library.
						</p>
					</Col>
				</Row>
				<hr></hr>
				<Row>
					<Col>
						<h3>Final Result</h3>
						<p>
							Images of finished web app's UI are shown below. I chose different shades of green for
							the main colour scheme since the web app's purpose was to protect the environment and
							stop climate change. I really enjoyed working on this application alongside the
							Harvard Web Dev course because it introduced me to the full stack of Web Development
							and allowed me to attain my next co-op job working as a web developper at GrantMatch.
						</p>
					</Col>
				</Row>
				<Row>
					<Col md={6} className="modal-img">
						<img src={cftrackerInput} alt="Input Page" />
						<figcaption>Input Page</figcaption>
					</Col>
					<Col md={6} className="modal-img">
						<img src={cftrackerFriends} alt="Friends Page" />
						<figcaption>Friends Page</figcaption>
					</Col>
					<Col md={6} className="modal-img">
						<img src={cftrackerShow} alt="Race List Page" />
						<figcaption>Race List Page</figcaption>
					</Col>
					<Col md={6} className="modal-img">
						<img src={cftrackerRaces} alt="Races Page" />
						<figcaption>Races Page</figcaption>
					</Col>
				</Row>
				<Row>
					<Col className="modal-img">
						<img src={coverCftracker} alt="Profile Page" className="img-centered img-gf-final" />
						<figcaption>Profile Page</figcaption>
					</Col>
				</Row>
			</Container>
		),
	},
	{
		id: "6",
		title: "Sensor Diagnostics Algorithm",
		category_ids: ["Software"],
		date: "Summer 2020",
		skills: ["Robotics Operating Software (ROS)", "C++", "CAN", "Git"],
		body: (
			<Container>
				<Row>
					<Col>
						<p>
							The Univeristy of Waterloo Alternative Fuels Team (UWAFT) is a design team with the
							goal of turning a gas-powered car into a hybrid electric vehicle with level 3
							autonomous capabilities. During the 2020 summer term, I was promoted to lead the
							Sensor Diagnostics sub-team - a group of three including myself - with the summer
							project of programming the sensor diagnositcs algorithm in a C++ ROS node.
						</p>
						<p>
							To do this, we first analyzed all collected sensor data by generating a MATLAB script.
							The script tabulated each sensor's data where each row is a frame and each column is a
							sensor's signal. To formulate the columns each sensor's signals were seperated into
							appropriate bits based on each sensor's documnetation. After examining each sensor's
							table and documentation, the error ranges for all sensor's diagnostics signals were
							detemrined
						</p>
						<p>
							Once the error ranges were determined, they were used to develop the sensor
							diagnostics ROS Node. The node checks each sensor's frame and compares the diagnostic
							signals with the defined error ranges. The results are then communicated to the sensor
							fusion and controls node via service call, and the master node via
							publisher/subscriber connection.
						</p>
					</Col>
				</Row>
				<Row>
					<img src={uwaftGroup} alt="test" className="img-centered" />
				</Row>
			</Container>
		),
	},
	{
		id: "7",
		title: "This Website",
		category_ids: ["Software"],
		date: "Ongoing Improvements",
		skills: ["ReactJS", "HTML & CSS", "Git", "UI Design"],
		body: (
			<Container>
				<Row>
					<Col>
						<p>
							This website was originally built while I was taking Harvard’s CS50W: Introduction to
							Web Development Course as an additional project. The first iteration was built purely
							with HTML, CSS and Vanilla JavaScript – can be found on v1 branch of repository. After
							my first job in web development at GrantMatch, I decided to apply my new skills to
							rebuild the website with ReactJS and an updated design.
						</p>
						<p>
							The repository for this website can be found on my GitHub here:{" "}
							<a href="https://github.com/adamiantorno/adamiantorno.github.io">
								Adam Iantorno Portfolio Website Respository
							</a>
						</p>
						<p>
							I am constantly tinkering with the website and adding new features. My current task is
							to add a blog section where I can post about my latest travels, books, and other
							interesting topics.
						</p>
					</Col>
				</Row>
			</Container>
		),
	},
	{
		id: "8",
		title: "High School Chapel Speech",
		category_ids: ["Other"],
		date: "Winter 2019",
		skills: [],
		body: (
			<Container>
				<Row>
					<Col>
						<p>
							This is a speech I gave during my senior year of high school reflecting on the
							greatest influences beyond school, specifically my experience with competitive dance.
						</p>
					</Col>
				</Row>
				<Row>
					<Col className="video-responsive">
						<iframe
							width="560"
							height="315"
							src="https://www.youtube.com/embed/3byoBwhONW0"
							title="YouTube video player"
							frameborder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowfullscreen
						></iframe>
					</Col>
				</Row>
			</Container>
		),
	},
];

export default ProjData;
