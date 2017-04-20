# Astro Weight Calculator

<img src="http://i.imgur.com/x189kBb.png" />

For this assignment, you've been hired by the NASA Jet Propulsion Laboratory to create a simple weight calculator that would be used by future astronauts to calculate their weight on the surface of the 9 planets (ok, 8 planets and a dwarf!) as well as the moon and the sun of our solar system.

## Tasks

Make sure you have the following software installed on your machine:

- [ ] [NodeJS](https://nodejs.org)
- [ ] [Git](https://git-scm.com)

## Walkthrough

### Install the necessary tools

First things first, you need to install some command line tools to initialize, develop, test, and submit projects moving forward. We've created a command line tool called `oca-cli` that we'll use for this purpose.

Open up a terminal (iTerm on OSX, Command Prompt on Windows), and type `npm install -g oca-cli` followed by the return key.

Next, type `oca-cli -V` (that's a capital V). `-V` is a common flag used by most CLI tools to print out the current version. If you see a version number in the format `X.X.X`, you're good to continue! If you don't see a version number, ask a peer to help you fix the problem.

### Create the project

First, open a terminal and run the following command:

**If you have a MacBook (macOS + Terminal)**<br />
`$ mkdir ~/dev`

**If you have a PC (Windows + Command Prompt)**<br />
`> mkdir C:\dev`

This `dev` folder is where you'll store this project and all future projects for this course.

Next, type the following command and hit return.

`oca-cli start astro-weight`

This will generate a folder called astro-weight. This is the root folder for the project. It contains all the core folders and files that make up your project. Let's take a minute to understand what each file does in this folder.

### Understand the folder structure

The folder structure is familiar to frontend web developers.  (An _idiomatic_ folder structure). Here's an overview of what each file/folder does:

<table>
  <thead>
    <tr>
      <th width="25%">File/Folder Name</th>
      <th width="75%">Description</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>.git</td>
      <td>This is where git stores the files it needs to keep a history of changes made to this folder. You can learn more about the .git folder by reading <a href="http://stackoverflow.com/a/42928684/700439">this Stack Overflow answer.</a></td>
    </tr>
    <tr>
      <td>libs node_modules test</td>
      <td>We keep utility code / tests in these folders. You're encouraged to poke around and see what's in these folders, but don't change too much or the tests won't work!</td>
    </tr>
    <tr>
      <td>.eslintrc.js</td>
      <td>This file specifies rules for ESLint to use to validate your code. ESLint is like having another developer looking over your shoulder to help you write clean code as you go.</td>
    </tr>
    <tr>
      <td>.gitignore</td>
      <td>There are some files that don't need to be commited to GitHub in this project. This particular .gitignore file tells Git not to include the node_modules folder, because we can simply run npm install to download the contents of this folder between machines.</td>
    </tr>
    <tr>
      <td>index.html</td>
      <td>This is where you'll write your markup to layout the necessary elements to implement the features of the application.</td>
    </tr>
    <tr>
      <td>main.js</td>
      <td>This is where you'll write your JavaScript to implement the features of the application.</td>
    </tr>
    <tr>
      <td>package.json</td>
      <td>Most projects contain a file, usually in the project root called package.json - this file holds various metadata relevant to the project. This file is also used to give information to npm that allows it to identify the project (author name, description etc) as well as handle the project's dependencies. (Dependencies are the inclusion of pre-written code into your project.)</td>
    </tr>
  </tbody>
</table>

### Run the unit tests and briefly learn about Test Driven Development.

A unit test is code written written by the developer to ensure that his/her code is bug free and does everything that it's supposed to do. For example, if we create an add function like this:

```js
function add(x, y) {
	return x + y;
}
```

We can write tests for this function that looks like this (take a minute to read this code over a few times):

```js
// Describe a function to be tested
describe('add function', function() {

	// Unit Test 1
	it('should return 4 when x = 2, y = 2', function() {
		var expected = 4;
		var actual = add(2,2);

		should.equal(expected, actual);
	});

	// Unit Test 2
	it('should return 6 when x = 3, y = 3', function() {
		var expected = 6;
		var actual = add(3,3);

		should.equal(expected, actual);
	});

});
```

These tests give us a degree of confidence in our code. Ideally, we strive to write tests before we start writing our code (this is known as [Test Driven Development](https://en.wikipedia.org/wiki/Test-driven_development)).

For this project, you've been provided with some tests to guide your development efforts and grade your assignment. The goal is to make all or as many tests pass as you can, and show you the value of having tests to "show you where to go". You should be checking to see if your tests pass as you work through the assignment.

In terminal, type `npm test` and hit enter. You should see with the following screen.

<img src="http://i.imgur.com/VWZPXEd.png" />

Right now, all the tests are failing because there's nothing to test yet! Let's go ahead and add some HTML to get a test to pass.

Add the following HTML element as a child to the `<body>` element in `index.html`, then run `npm test` in the terminal once again.

```html
<input id="userWeight" type="text" placeholder="Weight (lbs)" />
```

If you put the input element in the right place, you should see the following output.

<img src="http://i.imgur.com/XMkmccG.png" />

Nice job, you just got your first unit test to pass! Go ahead and make the other two HTML tests pass then come back.

Before we continue, let's put our new Git skills to good use and track the progress of the project. Open up a terminal/command prompt, navigate to your project folder using the `cd` command then run the following commands to create your first commit.

```
$ git init    
$ git add .
$ git commit -m "Initial Commit - first test passing"
```

Making regular commits using Git is a really good habit to get into early in your career. This will save you many future head-aches!

### Previewing the HTML

Once the tests are passing, you probably want to open a browser to see how it looks. Here's how you do that:

First, we need to install a lightweight HTTP server called `node-static`. If you haven't done so already, open up a terminal, type the following command and hit enter:

`npm install -g node-static`

Next, `cd` into your project

**macOS**<br />
`$ cd ~/dev/astro-weight`

**Windows**<br />
`> cd C:\dev\astro-weight`

Then type `static .` and hit enter to start the HTTP web server on port 8080. The console should notify of this, and you can now view the result by going to `http://localhost:8080` in Chrome.

Note: node-static is a program that keeps running so it can answer all requests. To stop the server, use the keyboard shortcut `Ctrl + C`.

### Store information about the planets in a JavaScript 2D Array

Ok, let's switch gears for a moment and open up `index.js`.

First up, you need to create the following data structure to hold the values of each planet's surface gravity multiplier in relation to Earth's surface gravity. This will be useful for several reasons, including dynamically adding option elements to the select dropdown, and for calculating the user's weight.

For this scenario, let's use a [two-dimensional array](https://processing.org/tutorials/2darray/) to store this information.

Add and complete the following code in `index.js`.

```js
var planets = [
  ['Pluto', 0.06],
  ['Neptune', 1.148],
  ['Uranus', 0.917],
  ['Saturn': 1.139],
  // Use the data from this article to fill in the rest of the planets
  // https://scratch.mit.edu/projects/1616353/
];
```

Once you've completed the array, let's commit what we've done so far using Git. Open up a terminal and navigate to your project using `cd`.

```
$ git add .
$ git commit -m "Added planets array"
```

Notice the commit message in quotes. It summarizes what just changed between this commit and the previous commit made earlier. In this case, we added a planets array.

### Challenge: Dynamically generate the planets dropdown

The challenge here is to use the data in the 2D array to populate the select element you made earlier with options for each planet. You will need to use the `.reverse` JavaScript method to reverse the array before generation, as well as the `document.createElement` function paired with a `for` loop to generate the options.

Once you finish, go ahead and commit your progress to git.

```
$ git add .
$ git commit -m "Added code to dynamically generate planets dropdown"
```

### Create your "Business Logic"

> Business Logic: A buzz term meaning the logic that takes the user's input, transforms it and then either returns or stores the new data. Its the 'meat' of the project.

Next, you need to add a function called `calculateWeight` to hold our business logic, which is a function that accepts two parameters, weight and planetName, and returns the product of that weight multiplied by the given planet's relative gravity. We already have the weight entered by user, but we need to find the relative gravity of the planet based on the planet's name that was passed in so we can do the multiplication. So this function needs to do 3 things:

1. Find the relative gravity of the selected planet in the planets array.
2. Multiply that gravity by the weight of the user.
3. Return the final result.

Inside this function, add a for loop that iterates over the planets array, searching for the planet name using [array indexing](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array). Once the planet name is found (think conditional statement here), you can use the current index of the for loop to locate the planet's relative gravity and assign it to a variable.  Next, multiply the relative gravity times the weight parameter that was passed in and return this value as output for the function.

If you want to get fancy, [break](https://www.w3schools.com/js/js_break.asp) out of the for loop once you locate the relative gravity in the loop.

Its a good time to check our unite tests. Once the 'calculateWeight' unit test passes, don't forget to commit!

```
$ git add .
$ git commit -m "Added core business logic"
```

### Handle the click event fired when the user clicks calculate weight.

At this point you should have a working `calculateWeight` function that passes the unit tests. (Great job!)

The final phase of this project is to write JavaScript that will listen for events fired by the user (such as a button click event) and change the state of the DOM accordingly. Here's a visual representation of what needs to happen.

![](http://i.imgur.com/XTgOyCc.png)

Add the following code to `index.js` as a starting point and complete the 4 challenges highlighted in comments, running unit tests along the way.

```js
document.getElementById('calculateWeight').onclick = function handleClickEvent(ev) {
  alert('hello!');
  // 1. Assign the value property of the userWeight input element to a variable called userWeight.
  // Hint: research and use the `document.getElementById` function and it's .value property.

  // 2. Assign the selected option value of the planets select element to a variable called planetName.
  // Hint: use Google to search "how to grab the text of a selected option using JavaScript"

  // 3. Assign the result of calling the calculateWeight function with the above variables as input called planetWeight
  // Hint: you wrote this function, now you're calling it!

  // 4. Assign the planetWeight variable to the innerHTML property of the <p id="output"> element.
  // Hint: research and use the `document.getElementById` function and it's .innerHTML property.
}
```

### Project Submission

At this point, your tests should all be passing (Hurray!) and you're ready to submit your project.

Before submitting, commit your latest changes if you haven't already. Here's an example:

```
$ git add .
$ git commit -m "Added click handler and finished project"
```

Next, go to GitHub, click on the `+` icon in the top right of the menu bar and select _New Repository_.

![](http://i.imgur.com/qFLxpA3.png)

Name your repository `astro-weight` and enter a unique description. Here's what you should have filled out on the screen before clicking _Create repository_.

![](http://i.imgur.com/AZ82e2U.png)

Once the repository is created, open up a terminal and navigate to your project using `cd`. Enter the commands shown under _Or push your existing repository from the command line_. See the example below, making sure to replace `cameronwilby` for your username in the `git remote add origin` command.

![](http://i.imgur.com/XKrIcoj.png)

Finally, create an issue in GitHub to let your instructor know that you've finished by [clicking here](https://www.github.com/OriginCodeAcademy/Cohort11/issues/new?title=Astro%20Weight%20Calculator&body=1.%20Where%20can%20I%20find%20your%20repository%3F%20(Paste%20a%20link%20below)%0A%0A2.%20How%20difficult%20did%20you%20find%20this%20project%3F%20(1-10)%0A%0A3.%20What%20was%20the%20best%20thing%20you%20learned%20in%20this%20project%3F%0A%0A4.%20Did%20you%20run%20into%20any%20trouble%20using%20the%20%60oca-cli%60%20tool%3F).
