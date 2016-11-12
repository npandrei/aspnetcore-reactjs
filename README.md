# aspnetcore-reactjs
This is a simple application that shows how you can integrate React.js with AspNetCore. 

# create bunldes

Open a terminal and navigate to src/npandrei.demos.aspNetCore. There run

npm install

to download all the dependencies.

Then, you have to run

webpack

in order to generate the bundles. If you do not have webpack installed, please install it using:

npm install webpack -g

# build aspnetcore

navigate to the root directory, and run:

dotnet restore

to download all dependencies. After that, you can run

dotnet run

to start the project. You can use http://localhost:5000 to access the demo
