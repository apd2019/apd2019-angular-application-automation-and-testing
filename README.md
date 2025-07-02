<h1>Automate and Test Angular Web Application</h1>

<h2>Project Agenda: To perform E2E testing on a web application using the test automation tool Cypress</h2>

<h3>Description: </h3>
<br>
As part of this project, go ahead and deploy the below-given Angular application on your local:
<br>
https://github.com/Simplilearn-Edu/ATE_PEP1_Testing_Using_Cypress.git
<br>
<br>
This application is based on the most popular Angular dashboard template (ngx-admin) and uses the Nebular module set.
<br>
Once the application is deployed, we will use Cypress to perform E2E testing.
<br>
You will install Cypress and start the Test Runner to perform testing.
<br>
You will compile the cypress.config.js file and create the Cypress project structure.
<br>
In the Cypress folder, create an E2E testing project structure.
<br>
Validate various forms, layouts, modals, overlays, and other components on the application.
<br>
Use different locators to test elements like textboxes, buttons, checkboxes, and radio buttons on the application.
<br>
Use Cypress assertions to validate the code wherever required. Add Cypress wait to the code for synchronization.
<br>
<h3>Tools Required: Nodejs v14.8.0, Cypress, and Visual Studio Code</h3>

<strong>Hint:</strong> Since the lab comes with node v17 by default, use NVM manager to change the version to 14.8.0; for more information, see the project's README.md file

<h3>Set up Scenario: </h3>
<br>
• Use Visual Studio and clone the repository: https://github.com/Simplilearn-Edu/ATE_PEP1_Testing_Using_Cypress.git 
<br>
• Compile the code repository and run the code using npm
<br>
• The application will be available at localhost: 4200
<br>
• In the same folder, install Cypress and start the Cypress test runner 
<br>
• Update the cypress.config.js file with details of specPattern and baseURL 
<br>
• Create a file with the name Test.spec.js and describe your first project

<br>
<br>
<h3>Detailed Scenario 1:</h3>
<br>
• Create test cases to open the website on localhost: 4200
<br>
• In the same test, write code to click on forms and the forms' layout
<br>
• Go to the code of the application ngx-admin in vscode, and edit the attributes of Sign In button, add an attribute and value as data-cy="signInButton"
<br>
• The application will deploy automatically
<br>
• Inspect the button using the new attribute and write Cypress code for the Button element
<br>
• Under the horizontal form, inspect the email and type the text. Inspect the password, type the text, and click on the checkbox
<br>
• Use Cypress Assertion to validate if the form contains a button with the name Sign in
<br>

<h3>Detailed Scenario 2: </h3>
<br>
• Create a test case to open the website on localhost:4200. Under the form layout, write code to find all three radio buttons 
<br>
• Inspect the first radio button, check if it is enabled or not, and then click on it 
<br>
• Now, inspect radio button 2, check if it is enabled or not, and then click on it 
<br>
• Validate that radio button 1 should not be selected. Use cypress assertion 
<br>
• Validate whether radio button 3 is disabled or not. If radio button 3 is disabled, then use Cypress Assertion

<h3>Detailed Scenario 3:</h3>
<br>
• Create a test case to open the website on localhost: 4200
<br>
• Write test code to navigate to modals and overlays, then click on them
<br>
• Inspect the toaster and click on it in the application
<br>
• There are three checkboxes under this. Use the check method to select the checkboxes
<br>
• Again, inspect all three checkboxes and click on only the second checkbox using the click() method
