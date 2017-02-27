**An Ultralight Sample React Project**

There are many excellent sample React starter kits out there, so why another?  This one attempts to be as small and
simple and explicit as possible.  As well, all the pieces are thoroughly documented (or will be ASAP), so this should
serve as a reasonable learning resource.


**For the Impatient...**

The tl;dr version is:
 
* clone this repo
* open up a terminal shell and `cd` to the `react-ultralight-project` directory
* execute `npm install`
* tweak the existing components in `./src/jsx` or add new ones
* execute `npm run start` to compile and start serving the code up at [http://localhost:8080](http://localhost:8080)
* open up a browser window and point it at [http://localhost:8080](http://localhost:8080) to see your work

And if you want to bundle things up for deployment, use `npm run build` to pack up all the code and resources into the 
`./build` directory.
 

**The Long Version:**

So you're looking at doing some web development, and you've heard about this "React" thing.  It sounds interesting, and
you'd like to give it a try, but most tutorials skip over the basics of setting up a sample project, or they recommend
using some automagic tools or complicated setup that hides what's really going on.  Frustrating, right?  Well, I'll try
to walk through the basics of what you need to know to get started with a simple "Hello React World" example.  Once you
grok the basics, all the other advanced tutorials out there will start to make sense.

Starting at the beginning, React is a Javascript library for building web applications.  React allows you to structure 
your code into components or classes, much like you would create an application in Java, C++, Python, etc.  Components 
can use other components, so you can structure an application in a logical, modular fashion; for example, you could create 
a MainApp component that shows a LoginScreen component or a MainInterface component, depending on the state of the 
MainApp.  Our hypothetical MainApp might look something like the following (omitting some code for clarity).

```javascript
class MainApp extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = { loggedIn: false };
    };
    
    render() {
        if (!this.state.loggedIn) {
            return <LoginScreen />; 
        }
        else {
            return <MainInterface />;
        }
    }
}
```
Sounds great, right?  Well, except that even that little snippet illustrates that React development is a very different
beast from what you may have seen before (even more so for anyone new to React and Javascript).  Some key points to note 
are:

* we're using ES6 syntax to define our class (yes, you can write React apps using ES3 syntax, but ES6 is a LOT nicer, 
 and is seamlessly supported by the build tools)
* the base class of our MainApp component is React.Component, which is provided by the React lib, and provides all the 
 default methods and behaviour needed
* it's pretty easy to extend React.Component and implement the specialized behaviour we need, such as setting state 
 variables and rendering content
* the `<LoginScreen />` and `<MainInterface />` syntax is not Javascript at all; rather it is "JSX" syntax (Javascript 
 XML), which is a custom extension of Javascript
 
That last point about JSX is where things get complicated, unfortunately.  What you, as a web developer, want to do is to
write some Javascript and an HTML file that uses it, and then open the results up in a browser.  With plain old ES3 
Javascript, it was easy to do that; however, ES6 and React are a lot more complicated, and require you to jump through some
hoops before you can load up the results in a browser.  In particular, we need to set up our project to do three things:

1. obtain access to the React library and the underlying libraries it depends on (Dependency Management)
2. convert or "transpile" our ES6/JSX code to ES3 so it will run on all browsers (Transpiling JSX)
3. bundle up our transpiled code and all required libraries into a package that is easy to deploy (Deployment Bundling)
 
Achieving those three things forces us to deal with some build tools, which probably seems annoying, when all you wanted
to do was to tinker with a little Javascript, right?  Fortunately, the tools required are relatively painless to use for 
our simple use case, and this project has things already set up to just work.  You can probably ignore most of the 
following discussion of the build tools for now, and pay attention later, when you try to do some more complicated things.

Anyway, those three topics are discussed in the following sections, so read on...
 
 
**Dependency Management:**

Modern Javascript development relies on a LOT of libraries, and managing those libraries within a project is a non-trivial
undertaking.  Fortunately, `npm` (the Node Package Manager), takes care of all the ugly details of downloading required
libraries and their dependencies.  If you have used `apt` for Linux, `maven` for Java, or `pip` for Python, then `npm` 
will seem very familiar. Basically, all you need to do is to set up a list of the libraries you want to use in your
project, and `npm` will take care of fetching them and their dependencies for you.  The list of required packages is
normally called `package.json` and is saved at the root of the project folder.  If you look at the `package.json` file for
this project, you'll see that it contains a few elements describing things like the name and version of the project.  More
interestingly, it contains `devDependencies` and `dependencies` sections, which define the libraries needed for development
and for runtime deployment.  Here are those sections for reference:

```
  "dependencies": {
    "react": "^15.4.2",
    "react-dom": "^15.4.2"
  },

  "devDependencies": {
    "babel-core": "^6.23.1",
    "babel-loader": "^6.3.2",
    "babel-preset-es2015": "^6.22.0",
    "babel-preset-react": "^6.23.0",
    "copy-webpack-plugin": "^4.0.1",
    "file-loader": "^0.10.1",
    "install": "^0.8.7",
    "webpack": "^2.2.1",
    "webpack-dev-server": "^2.4.1"
  }
```

As you can see, the desired version numbers of the libraries are specified (e.g. "react": "^15.4.2").  The caret symbol
before the version number tells `npm` that we'll accept any version of the package with a major version number equal to 
the specified major version number; for example, a specifier of "react": "^15.4.2" means we will accept a package with
version 15.*.*, as long as it's equal or greater than 15.4.2.

The `package.json` file also includes an interesting `scripts` element that we'll discuss in the next section...


