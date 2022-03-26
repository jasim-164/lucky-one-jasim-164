import React from 'react';
import './Question.css'
const Question = () => {
    return (
        <div>
            <h1>How React Works?</h1>
            <h4 className="answer">React is a very popular JavaScript library. Facebook and an open-source developer community run it. The syntax used by React components is called JSX (JavaScript XML).The JSX itself is usually HTML markup, mixed with custom tags for the React components.Easy creation of dynamic applications: React makes it easier to create dynamic web applications because it requires less coding and offers more functionality. React uses Virtual DOM, thereby creating web applications faster.Components are the building blocks of any React application, and a single app usually consists of multiple components. </h4>
            <h1>What is difference between Props and State?</h1>
            <h4 className="answer">
            Props are used to send data and event handlers to a component's children. The data of the components that must be presented to it store the view in the state. Props are immutable — they can't be modified after they've been set. The data is stored in the state, which might change over time. Both functional and class components can benefit from the use of props. Only class components can use the state.The parent component sets props for the children components. Event handlers are typically responsible for updating the state.
            </h4>
            <h1>
            How useState Works?
            </h1>
            <h4 className="answer">
            useState is a Hook that allows you to have state variables in functional components. You pass the initial state to this function and it returns a variable with the current state value (not necessarily the initial state) and another function to update this value.Whereas the state in a class is always an object, with Hooks, the state can be any type. Each piece of state holds a single value, which can be an object, an array, a boolean, or any other type you can imagine. useState is a named export from react. The useState Hook allows you to declare only one state variable (of any type) at a time.Unlike this.setState in class components, useState doesn’t merge objects when the state is updated. It replaces them
            </h4>
        </div>
    );
};

export default Question;