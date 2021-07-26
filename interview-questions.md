# ASSESSMENT 3: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.


1. What is `this` in JavaScript?

  Your answer: `this` is a term in Javascript that references a specific object. `this` is also is used to access a value inside an object.

  Researched answer: In Javascript the term `this` references the object that is performing the current function. `this` can be used to create a variable that accesses a value inside the object that is performing the current function. Without a function `this` refers to the global object, which in a web browser is the window. When `this` is used inside an object method, it referes to the object where the method is called.



2. What is yarn? What file(s) are modified in a React application when you run yarn?

  Your answer: Yarn is a package manager created by Facebook. It creates a package.json & yarn.lock file.

  Researched answer: Yarn is a package manager created by Facebook. It allows Web Developers to share snippits of code with other developers. Some snippits of code rely on other snippits of code to run. These are called dependencies which are managed by the package manager yarn. When yarn is run, it creates a node_modules folder, a yarn.lock file, and a package.json file. The package.json file is a javascript object notation file that describes the specific package being run. The package.json file is modified to store information about your project like the dependencies needed to be installed for the project. The yarn.lock file stores the versions of the dependencies being installed with the package.



3. What are props in React?

  Your answer: Props is a term in React that is short for properties. Props allow developers to pass data between components in React.

  Researched answer: Props is a term in React that is short for properties. Props allow developers to pass data down into nested components. Data is passed down in only one direction from a parent component to a child component. Props pass data from the state object of a component. Props can't be updated or change because they are read-only. Props are called using this.props.



4. What is JSX?

  Your answer: JSX is a syntax extension of Javascript that allows a developer to write HTML in React. JSX is short for Javascript XML.

  Researched answer: JSX is a syntax extension of Javascript that allows a developer to write HTML in React. JSX is short for Javascript XML. JSX uses camelCase for attributes. Instead of the class attribute in HTML, JSX uses className. JSX describes what the User Interface should look like. It creates React elements that are rendered by the DOM.



5. What is a DOM event?

  Your answer: A DOM event is any input by a user on the website. When the user changes anything, such as clicking or hovering, that is a DOM event.

  Researched answer: A DOM event is any input by a user on the website. When the user changes anything, such as clicking or hovering, that is a DOM event. The DOM reacts to changes and responds by changing what the user sees depending on the type of event. In JSX there are event listeners that listen for specified interactions on a node. An example of an event listener is onClick that listens for a click event. DOM events are shortened to "e".



6. STRETCH: What is an anonymous function in JavaScript?

  Your answer: An anonmyous function is a function that does not have a name.

  Researched answer: An anonmyous function is a function that does not have a name. Anonymous functions can be passed as arguments in another function. An anonymous function can be a function that is outputed by a higher order function.


## Looking Ahead: Terms for Next Week

1. Conditional rendering: Conditional rendering is a term in React that describes rendering a React component based on a condition of true or false.

2. Ruby: Ruby is a dynamic, object-oriented, open-soure, backend programming language that focuses on simplicity. It is easy to read and write.

3. Object oriented programming: OOP is a programming model that organizes design aroudn objects instead of functions and logic. The four pillars of object oriented programming are Encapsulation, Abstraction, Inheritance, and Polymorphism.

4. Ruby hash: A hash is a data structure that is a collection of specific keys and their values. It is a container for data like an array. The data is stored in key:value pairs.

5. Ruby blocks: Blocks are code that is passed to a method in ruby. Blocks are like anonymous functions in Javascript.
