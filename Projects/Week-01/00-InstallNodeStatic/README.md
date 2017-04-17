# Static file server using node-static

node-static is a simple, rfc 2616 compliant file streaming module for Node.js which can be used for making any of your directory a static file server. You can use this as a command-line tool to make a directory to a server or as a library for creating custom file server.

node-static can be easily installed using npm (we'll make it global for using the command-line tool)

## Tasks

1. From the Terminal in Mac or the command prompt in Windows enter:  

`npm install -g node-static`

2. To start the server, navigate to the directory from where you want to serve your files and hit the following command:

`static . ` 

3. You should see the following output:

`serving "." at http://127.0.0.1:8080`

4. This means the server started at port 8080 with the current directory as webroot. Read the node-static documentation to learn more about this library.


Note:  If you are using a Mac and encounter error messages like 'EACCES', you will need to update your user account permissions:

https://docs.npmjs.com/getting-started/fixing-npm-permissions