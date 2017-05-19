# Fun with LINQ Queries

For this exercise, you will learn how to make the same kind of SQL queries you wrote using SQL inside an C# application using Language Integrated Query (or, LINQ!)

You will also be exposed to writing Unit Tests in Visual Studio.

The solution that you'll clone contains two projects.

One is a Visual Studio Test project with tests pre-written for you to verify that the code you write works correctly and meets the specifications. Refer to the demo video to see how to run these.

## Tasks

* You should make sure you have the `NORTHWND` database in your SQL Server instance.
* Fork and Clone the [LINQExercises](https://github.com/cameronoca/LINQ-exercises) repository.
* Open the Controllers folder in LINQExercises.Test and explore the pre-written tests.
* Open the Controllers folder in LINQExercises and explore the pre-written method shells.
* Your task is to implement these method shells using LINQ and make them pass the tests.

## Thoughts on how to complete these exercises

Let's take an example exercise.

```csharp
// GET: api/customers/city/Sacramento
[HttpGet, Route("api/customers/city/{city}"), ResponseType(typeof(IQueryable<Customer>))]
public IHttpActionResult GetAll(string city)
{
    throw new NotImplementedException("Write a query to return all customers in the given city");
}
```

The first thing to do is remove the line of code that throws a `NotImplementedException` so you're left with the following. (It might also be helpful to copy the instructions and keep them in the code in comment form.)

```csharp
// GET: api/customers/city/Sacramento
[HttpGet, Route("api/customers/city/{city}"), ResponseType(typeof(IQueryable<Customer>))]
public IHttpActionResult GetAll(string city)
{
	// Write a query to return all customers in the given city   
}
```

Then, write the code to return the requested data. 

```csharp
// GET: api/customers/city/Sacramento
[HttpGet, Route("api/customers/city/{city}"), ResponseType(typeof(IQueryable<Customer>))]
public IHttpActionResult GetAll(string city)
{
	return _db.Customers.Where(c => c.City == city);
}
```

Ask yourself the following:

**Which table am I querying?** <br />
This helps you start writing your LINQ query. For example, this exercise wants you to return Customers, so start with `return _db.Customers`.

**Which LINQ Extension Method should I use?**<br />
Take a look through some of the links provided below, and try to find an extension method that you think might work to satisfy the exercise instructions.

Here are some less than optimal examples for this particular exercise.

```csharp
return _db.Customers.Average(); // This will.. average the customers? Not a good fit.
```
```csharp
return _db.Customers.Count(c => c.City == city); // this will return the number of customers matching the condition. Not good.
```
```csharp
return _db.Customers.Sum(); // ... this doesn't even compile. Red squiggly lines everywhere.
```

The good example here is to use the `.Where` function, because it returns the actual Customer objects that match the query.

## Helpful Tips
- For visual guidance on how to complete this project, watch today's video. 
- For general help about LINQ extension methods, here are some good resources for picking up the basics of LINQ Extension Methods.

- [Official Microsoft Documentation](https://msdn.microsoft.com/en-us/library/system.LINQ.enumerable_methods.aspx) - Fully comprehensive list of all the LINQ Extension Methods you can use.
- [LINQ Cheat Sheet](https://download.damieng.com/dotnet/LINQToSQLCheatSheet.pdf) - A cheat sheet of various LINQ Extension Methods and when/how to use them.

## Extras
* Write your own controller methods (or, API Endpoints) that return data you think might be useful from the NorthWind database.
* Write matching Unit Tests for these new Controller Methods/API Endpoints.

## Turn In Instructions
* Push your changes to GitHub 
* [Click here to create an issue in the class repository](https://www.github.com/OriginCodeAcademy/Cohort11/issues/new?title=11-FunWithLINQQueries&body=1.%20Where%20can%20I%20find%20your%20repository%3F%20(Paste%20the%20url%20of%20your%20repository%20below)%0A%0A2.%20What%20did%20you%20enjoy%20most%20about%20this%20project%3F%0A%0A3.%20What%20was%20the%20toughest%20part%3F%0A%0A)
    * Include a link to your repository in the description
    * Answer the questions filled out for you in the description