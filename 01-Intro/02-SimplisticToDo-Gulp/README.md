# Dependency Management

Install all build dependencies and front-end assets of the project:

	npm install
	bower install
	
# Run the Build (linting, asset processing)

	gulp
	
Inspect the result in `dist`


# Run the Unit Tests

	gulp test
	
Or run Karma in continuous mode:

	karma start
	
Or run Karma from WebStrom.


# Run the End-to-End Tests

Make sure that protractor and the selenium server are installed globally:

	npm install -g protractor
	webdriver-manager update


Open three terminals:

### 1. Serve the app

	gulp serve

Check that the application is available at: `http://localhost:8000`


### 2. Run the selenium server

	webdriver-manager start


### 3. Run the protractor test

	protractor e2e/protractor.conf.js
	


## Options
If you want to omit step 2, protractor can be configured to automatically start/stop the selenium server.

For this install protractor locally in your project (in this example already done via package.json).

Then also install selenium locally by running the local webdriver-manager:

	./node_modules/protractor/bin/webdriver-manager update 
	
Now you should have the selenium server jar locally in your project:

	./node_modules/protractor/selenium/selenium-server-standalone-2.45.0.jar
	
(version number may be different).

Adjust the file `e2e/protractor.conf.js`:
- Comment out `seleniumAddress`
- Comment in `seleniumServerJar` and set the correct path from above.
