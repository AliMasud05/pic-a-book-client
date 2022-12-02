import React from 'react';

const Blog = () => {
    return (
        <div className='font-serif'>
            <div>
                <h1 className='text-2xl'>What are the different ways to manage a state in a React application?</h1>
                <p>There are four main types of state you need to properly manage in your React apps:</p>
                <ul>
                    <li>Local state</li>
                    <li>Global state</li>
                    <li>Server state</li>
                    <li>URL state</li>
                </ul>
    
            </div>
            <div>
                <h1 className='text-2xl'>How does prototypical inheritance work?</h1>
                <p>Prototype inheritance in javascript is the linking of prototypes of a parent object to a child object to share and utilize the properties of a parent class using a child class.

                    Prototypes are hidden objects that are used to share the properties and methods of a parent class to child classes.</p>
            </div>
            <div>
                <h1 className='text-2xl'>What is a unit test? Why should we write unit tests?</h1>
                <p>Unit Testing is a type of software testing where individual units or components of a software are tested. The purpose is to validate that each unit of the software code performs as expected. Unit Testing is done during the development (coding phase) of an application by the developers. Unit Tests isolate a section of code and verify its correctness. A unit may be an individual function, method, procedure, module, or object.</p>
                <p>Unit Testing is important because software developers sometimes try saving time doing minimal unit testing and this is myth because inappropriate unit testing leads to high cost Defect fixing during System Testing, Integration Testing and even Beta Testing after application is built. If proper unit testing is done in early development, then it saves time and money in the end.</p>
            </div>
            <div>
                <h1 className='text-2xl'>React vs. Angular vs. Vue?</h1>
                <p> React is a UI library, Angular is a fully-fledged front-end framework, while Vue.js is a progressive framework.React and Vue.js are mainly declarative, and while Angular could also be declarative, it's really more imperative.Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option. Angular is a complete toolbox that offers you everything from development to testing while building a web app.</p>

            </div>
            
        </div>
    );
};

export default Blog;