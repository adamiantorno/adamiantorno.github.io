---
project_id: 4
title: "Arduino Enclosure"
description: "A custom enclosure with LCD intergration and hardware UI to control a test fixture."
categories: ["Mechanical"]
tags: ["SolidWorks", "I2C", "3D Printing", "Soldering", "Sourcing Components"]
image: "assets/coverArduino.jpg"
date_string: "Winter 2022"
---
# Overview

This was a subproject for the Hardware Testing fixture project. After the entire HIL test fixture had been assembled and was operating as expected, there were three main points of improvement. First, the switches were too small and soldered too close together which made it difficult to operate one without affecting another. Second, the LCD was also tilted at an angle that made it difficult to see when standing above the test fixture. Finally, all wiring should be hidden or strapped down to prevent it from interacting with or getting confused for the test fixture’s wire harness.

![Initial implementation of test fixture arduino](/assets/arduinoInitial.png)
*Initial implementation of test fixture arduino*

# Solution

As a solution, I designed an enclosure that could contain the arduino circuit, support the LCD at a softer angle, and have larger switches in a more ergonomic position. The enclosure was separated into a bottom half and top half. The bottom half of the enclosure had mounts for the protoboard and CAN module, a hole on the rear side for output wires, and a lot of extra space to keep all internal wires contained. To maximize user experience, the new, larger switches were sourced with the final approval from the engineers at Electrans since they would be operating the fixture. To connected to bottom and top halves of the enclosure, I designed a custom latching system so that the engineers could easily reomve the top half without having to unmount the entire enclosure. Additionally, the enclosure was mounted using the same screws and design as the aforementioned mounting brackets and screws for the mechanical components.

![3D CAD of Arduino enclosure](assets/arduinoCad.png)

![Arduino inside mounted enclosure](assets/arduinoSolder.jpeg)

![Final version of the product](assets/coverArduino.jpg)