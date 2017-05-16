# Week 5 

### C Sharp Snippets 

Add these to your WebApiConfig.cs:

```sh
            var appXmlType = config.Formatters.XmlFormatter.SupportedMediaTypes.FirstOrDefault(t => t.MediaType == "application/xml");
            config.Formatters.XmlFormatter.SupportedMediaTypes.Remove(appXmlType);

            var jsonFormatter = config.Formatters.OfType<JsonMediaTypeFormatter>().First();
            jsonFormatter.SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();
```

- removes XML formatter
- adds JSON formatter
- adds Camel Casing serializer

To resolve the CORS issue you might run into when calling your API from Angular:

https://www.asp.net/web-api/overview/security/enabling-cross-origin-requests-in-web-api

* Install the following NuGet package `Microsoft.AspNet.WebApi.Cors`

* And add the following code to `WebApiConfig.cs` at the beginning of the `Register` method

var policy = new EnableCorsAttribute("*", "*", "*");
config.EnableCors(policy);

