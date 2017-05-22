# Property Manager

This week, you'll be building a property manager application for people looking for places to rent as well as landlords. Landlords should be able to create an account and add places to rent. Renters need to be able to create an account as well, search for places to rent and keep an interest list of places they like.

Let's get to work!

## Toolbox
You will be using everything you have learned in the last 5 weeks to complete this project. 

**Required Tools**
```
--Backend--
SQL Server
Entity Framework
ASP Web API

--Frontend--
HTML5
CSS Frameworks (You do not HAVE to use Bootstrap)
Angular
Angular-UI-Router
Angular-Toastr
Angular-Local-Storage
```

## App Requirements
- All users need to be able to register for an account by providing the their name and email and also indicate if they are a landlord or a renter.
- Users that register as tenants will be able to search for any available properties and also keep a personal interest list that will hold their search history.
- Users that register as landlords will be able to add, edit and delete properties for rent on their own property dashboard page and also run searches on available properties on the main search page. However, landlords will not have the ability to keep an interest list on this page.
- Anonymous, unregistered users should be be able to search for any available properties but will not be able to keep an interest list or access the landlord dashboard.

## Pages
- Main Search Page
	- Sign In field
	- Sign In button
	- Register Link
	- City field
	- Zip Code field
	- Rent field
	- Square Footage field
	- Bedrooms field
	- Bathrooms field
	- Pet Friendly field (yes or no)
	- Search Button
- Registration Page
	- First Name text field
	- Last Name text field
	- Email field
	- Is Property Manager checkbox field
	- Register button
	- Redirects to Main Search Page if user signs up as a tenant
	- Redirects to the Landlord Dashboard Page if the user signs up as a landlord
- Landlord Dashboard Page
	- Displays an editable table of the signed-in landlord's rental properties
	- Displays a form for adding and editing rental properties to the rental properties table with the following fields:
	- Company / Building Name field
	- Address 1 field
	- Address 2 field
	- City field
	- State field
	- Zip Code field
	- Contact Phone field
	- Rent field
	- Square Footage field
	- Bedrooms field
	- Bathrooms field
	- Pet Friendly field (yes or no)
	- Lease Term field (1  year, 6 mo's, monthly)
	- Property image field
	- Use HTML5 input attributes to enforce data type input into this form

# Development Worklow

## Create the backend

### Step by Step

- Take a second and create an Entity Relationship Diagram now, before you continue coding. This will go a long way in helping you build your application.

- Create a Visual Studio solution with a Web API Project
- Configure your api
	- Remove XML formatting
	- JSON Camel Case conversion
	- CORS
- Create the models you described in our ERD diagram 
	- User (below the field properties, add an ICollection entity relationship mapping to Property)
	- Property (below the field properties, add an entity relationship mapping User)
	- UserPropertySearch (you'll need this to define the type of the parameter object passed into multi-criteria property searches)
- Create an Entity Framework data context
	- Constructor that defines the base "PropertyManager"
	- IDbSet statements for Users and Properties
	- OnModelCreating with logic that maps users to properties
		- `User` 1-* `Property` relationship
- Migrations
	- Enable-Migrations
	- Add-Migration InitialMigration
	- Update-Database
- Add Controllers
	- Create controllers for `User` and `Property` by selecting "Web API 2 Controllers with Actions using Entity Framework"
	- In the Property controller, you will need to add a custom method in order to do property searches using one or multiple property fields
	- In the Property controller, you should also add a separate, custom method to do property searches by user

## Data Models

`User`

```
UserId
FirstName
LastName
EmailAddress
IsPropertyName
UserName
```

`Property`

```
PropertyId
UserId
PropertyName
Address1
Address2
City
State
ZipCode
ContactPhone
Rent
SquareFootage
Bedroom
Bathroom
PetFriendly
LeaseTerm
PropertyImage
```

`PropertySearch`

```
City
ZipCode
MinimumRent
MaximumRent
Bedroom
Bathroom
```

## Create the frontend

### Step by Step

#### Project Setup

- Create a folder for the web project
- Build out the following app folder structure

```
|_ app (folder)
	|_ core (folder)
		|_ user.factory.js (file)
		|_ property.factory.js (file)
		|_ localstorage.factory.js
	|_ user (folder)
		|_ user.controller.js (file)
		|_ register.html (file)
	|_ property (folder)
		|_ property.controller.js (file)
		|_ property.detail.html (file)
		|_ property.grid.html (file)
	|_ search (folder)
		|_ signIn.html (file)
		|_ search.controller.js (file)
		|_ search.html (file)
		|_ search.grid.html (file)
	|_ app.js (file)
```

#### Development
- Implement your app.js file as follows
	- Add a config section with the needed states using ui-router
	- Add a value to manage your property manager API url
- Implement [localStorage](https://github.com/grevory/angular-local-storage) first by adding it to your project using Bower. Add a factory that injects it with all the needed methods to:
	- set a boolean property called isPropertyManager based on the user's signin
	- get and return the value of isPropertyManager for use in your navigational and show/hide decision logic

## Extra Credit

Instead of just storing the tenant's interest list on the vm object, save the search history into an Interest List table. This will give you practice with the many-to-many relationship:

`InterestList`

```
PropertyId PK FK
UserId PK FK
```

## Turn in instructions
* Push your changes to GitHub 
* [Click here to create an issue in the class repository](https://www.github.com/OriginCodeAcademy/Cohort11/issues/new?title=11-PropertyManager&body=1.%20Where%20can%20I%20find%20your%20repository%3F%20(Paste%20the%20url%20of%20your%20repository%20below)%0A%0A2.%20What%20extras%20could%20you%20add%20to%20this%20assignment%20given%20the%20time%3F%0A%0A3.%20What%20was%20the%20most%20valuable%20thing%20you%20learned%20in%20this%20assignment%3F)	
	* Include a link to your repository in the description
	* Answer the questions filled out for you in the description
	