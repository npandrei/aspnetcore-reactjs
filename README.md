# aspnetcore-reactjs
This is a simple application that shows how you can integrate React.js, readux and react-router with AspNetCore. 

# create bundles

Open a terminal and run

```
cd src/npandrei.demos.aspNetCore
npm install
```

to download all the dependencies.

Then, you have to run

```
webpack
```

in order to generate the bundles. If you do not have webpack installed, please install it using:

```
npm install webpack -g
```

# build aspnetcore

navigate to the root directory, and run:

```
cd ../../
dotnet restore
```

to download all dependencies. After that, you can run

```
cd src/npandrei.demos.aspNetCore
dotnet run
```

to start the project. You can use http://localhost:5000 to access the demo.

# project

There are 2 main goals for this project:
- configure an AspNetCore project from scratch & reference another project. Using Visual Studio is simple, if you use the default template, but this one started from scratch and it was developed with Visual Studio Code, so it should contain the minimum of dependencies required.
- configure React.js, redux and react-router to work together, and simulate some server-side work.
