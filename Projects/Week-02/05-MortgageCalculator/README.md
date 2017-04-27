# Mortgage Calculator

The San Diego real estate market is an excellent place to invest your extra cash. Lets build a mortgage calculator using Javascript to calculate your monthly payment on a home mortgage. For this you will need to build a form that accepts the loan balance, interest rate, loan term in years and period (either monthly or bi-monthly) and a calculate button.

## Helpful Images

<img src="http://i.imgur.com/Pn1GDZu.png" />
<img src="http://i.imgur.com/t8aMaja.png" />

## Tasks

1. Create a folder named `MortgageCalculator` in your `dev` folder.
2. Setup your Git workflow.
  2a. Initialize an empty git repository in `MortgageCalculator` by running `git init` in the command prompt.
  2b. Create a repository on GitHub called `MortgageCalculator` and follow the instructions to add a remote origin.
3. Open this folder in your favorite text editor.
4. Create an `index.html` file, a `styles.css` file and an `app.js` file. Link the js and css files to `index.html`
5. Create a basic HTML page, and make sure it has the following HTML elements.
    - An `input` element for the user to enter the mortgage loan balance in US dollars.
   - An `input` element for the user to enter the annual percentage rate of charge (APR).
   - An `input` element for the user to enter the loan term in years.
   - A `select` element for the user to select a period, populated with `option` elements where the value attribute is set to the available periods, in the case, either 'monthly' or 'bimonthly', and the content inside of the `option` elements represents the corresponding number of periods over a year (12 or 6).
   - A `button` element for the user to calculate their monthly mortgage payment based on the above inputs.
   - A `p` element to display the expected output.
   - Use your knowledge of Bootstrap templates to match the mockup.
7. Also make sure you reference your `app.js` just before the `</body>` tag.
8. Angular bootstrapping - add the following to your index.html file:
  - an ng-app directive in the `<html>` tag.
  - an ng-controller directive in the `<body>` tag.
9. Write the following JavaScript in your `app.js` file:
  - Create an Angular module using Angular snippets and name your app, `app`.
  - Create an Angular controller named `MortgageController` using Angular snippets. Write the following JavaScript in your `app.js` file
   - Create a `calculateMortgage` function that will be called when the user clicks on the `button` element you added to your HTML.
   - This function should grab the values entered by the user from the `input` elements and the `select` element and then calculate the monthly payment.
    - We can break this formula into 5 local variable 'buckets' for read-ability:
        
5 Local Variables

        // monthly interest rate       
        monthlyInterestRate = (interestRate / 100) / period          

        // number of payments
        numberOfPayments = loanTerm * period

        // compounded interest rate
        compoundedIntestRate = Math.pow((1 + monthlyInterestRate), numberOfPayments)  
        
        // interest quotient
        interestQuotient  = (monthlyInterestRate * compoundedInterestRate) / (compoundedIntestRate - 1)
        
        // final calculation
        monthlyPayment = loanBalance * interestQuotient;


For extra credit, make all input fields required and validate them according to the data type needed using HTML5. So, for example, the mortgage loan balance field should only accept numeric values and, when the calculate button is clicked, the application should trap the error and prompt the user if they enter a non-numeric value into this field.

## Turn In Instructions
* Push your changes to GitHub using `git push origin master`
* [Click here to create an issue in the class repository](https://www.github.com/OriginCodeAcademy/Cohort11/issues/new?title=05-MortgageCalculator&body=1.%20Where%20can%20I%20find%20your%20repository%3F%20(Paste%20the%20url%20of%20your%20repository%20below)%0A%0A2.%20What%20was%20your%20biggest%20struggle%20in%20this%20assignment%3F%0A%0A2.%20What%20was%20your%20biggest%20accomplishment%20in%20this%20assignment%3F)
    * Include a link to your repository in the description
    * Answer the questions filled out for you in the description