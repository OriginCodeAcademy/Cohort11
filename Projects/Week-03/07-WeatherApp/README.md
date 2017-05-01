# Weather App

In this assignment, you will be building an Angular application that allows a user to search for weather data using the [OpenWeatherMap](http://openweathermap.org/) in a similar fashion to the following screenshot.

<img src="http://i.imgur.com/vLI7hzb.png" />

## Tasks
1. Create a folder named `WeatherApp` in your `dev` folder.
2. Setup your Git workflow.
  - Initialize an empty git repository in `WeatherApp` by running `git init` in the command prompt.
  - Create a repository on GitHub called `WeatherApp` and follow the instructions to add a remote origin.
3. Request an API license key to use the open weather map API and confirm your ability to make calls to the API using a REST client such as Postman.
4. Setup this project to use live reload and inject file references into your index.html.
5. Make use of the following AngularJS features to build this application.
  - Create a `factory` and inject a `$http` service to be used for calling the OpenWeatherMap API. (Remember, separation of concerns!)
  - Create a `controller` and inject the factory you created above. Figure out the code you'll need to write to facilitate the given requirements.
  - Add an error handler function to both factory and controller.
  - Implement toastr messaging to report success and error messaging to the end user.
  
## Requirements
- Must be able to search for a city by name and see weather for that location.
- Must have a Bootstrap `btn-group` containing a button for each previously searched city. When clicked, each button should load the weather information for that location.
- Must have a search history table that tracks the term entered, the time that the term was entered, and the current temperature in degrees Fahrenheit at that time.
- Must be able to handle errors gracefully (Use the [angular-toaster](https://github.com/Foxandxss/angular-toastr) package to show an error to the user if the call to the API fails. It can be installed in your project using Bower.)
- All temperatures should be displayed using the Fahrenheit temperature scale.

## Extra Credit
- Implement client-side form validation to make the city name input a required field and display a helpful error message such as, "You must enter a city name", if the user clicks the Go! button without entering anything into this field.
- Implement a toggle button to convert degrees Fahrenheit to Centigrade for the whole app.

## Turn in instructions
* Push your changes to GitHub 
* [Click here to create an issue in the class repository](https://www.github.com/OriginCodeAcademy/Cohort11/issues/new?title=07-WeatherApp&body=1.%20Where%20can%20I%20find%20your%20repository%3F%20(Paste%20the%20url%20of%20your%20repository%20below)%0A%0A2.%20How%20was%20it%20working%20with%20APIs%20for%20the%20first%20time%3F%0A%0A3.%20What%20was%20the%20most%20difficult%20part%20about%20working%20with%20an%20API%3F%0A%0A4.%20What's%20your%20favorite%20part%20about%20this%20assignment%3F)
	* Include a link to your repository in the description
	* Answer the questions filled out for you in the description