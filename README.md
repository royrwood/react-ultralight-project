__**An Ultralight Sample React Project**__

There are many excellent sample React starter kits out there, so why another?  This one attempts to be as small and
simple and explicit as possible.  As well, all the pieces are thoroughly documented (or will be ASAP), so this should
serve as a reasonable learning resource.


**For the Impatient...**

The tl;dr version is: clone this repo, add/tweak the components in ./src/jsx/, and use `npm run start` to compile and start
serving the code up at [http://localhost:8080](http://localhost:8080).  Use `npm run build` to pack up all the code and 
resources into ./build.
 

**The Long Version:**

So you're looking at doing some web development, and you've heard about this "React" thing.  It sounds interesting, and
you'd like to give it a try, but most tutorials skip over the basics of setting up a sample project, or they recommend
using some automagic tools or complicated setup that hides what's really going on.  Frustrating, right?  Well, I'll try
to walk through the basics of what you need to know to get started with a simple "Hello React World" example.  Once you
grok the basics, all the other advanced tutorials out there will start to make sense.

So, starting at the beginning, React is a Javascript library for building web applications.  React allows you to structure 
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

That little snippet includes a lot of information for those of you who are new to React and Javascript.  Some key points are:

* we're using ES6 syntax to define our class (yes, you can write React apps using ES3 syntax, but ES6 is a LOT nicer, and is seamlessly supported by the build tools)
* the base class of our MainApp component is React.Component, which is provided by the React lib, and provides all the default methods and behaviour needed
* it's pretty easy to extend React.Component and implement the specialized behaviour we need, such as setting state variables and rendering content
* the `<LoginScreen />` and `<MainInterface />` syntax is not Javascript at all; rather it is "JSX" syntax (Javascript XML), which is a custom extension of Javascript
 
 

