# bat-robot

This robot is designed to have interactive elements controlled by the user through buttons.

ON/OFF Button: This button toggles the robot's state between ON and OFF. 
When the robot is turned ON, it triggers an alert message saying "Hi, this is Bat-Robot!" indicating its activation. 
The button also changes the appearance of various parts of the robot such as its eyes, mouth, and center circle, creating an animated effect. 
This functionality is achieved through event listeners attached to the button, toggling CSS classes that modify the visual properties of the robot elements.

Random BG Button: This button changes the background color of the webpage to a random color each time it is clicked.
It uses a JavaScript function (changeColor()) to generate a random hexadecimal color code and applies it to the background-color property of the body element.

Animated Eye Closure: The robot's eyes close and reopen periodically every 10 seconds. This is achieved through a JavaScript function that adds and removes a CSS class responsible for changing the size and appearance of the eye elements, simulating blinking.

Responsive Design: The layout of the buttons and robot adapts to different screen sizes using a media query. When the screen width is below 768px, the buttons stack vertically to accommodate smaller screens.
The robot provides an interactive and visually engaging experience for users, allowing them to control its appearance and behavior through simple button clicks.
