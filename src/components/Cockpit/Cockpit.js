import React from 'react';
import classes from './Cockpit.css'


const cockpit = props => {
    const classses = [];

    let btnClass = '';
    
    if (props.showPersons){
        btnClass = classes.Red;
    }

    if(props.persons.length <=2){
      classses.push(classes.red);
    }
    if(props.persons.length <=1){
      classses.push(classes.bold);
    }
    console.log(btnClass)

    return (
        <div className = 'classes.Cockpit'>
            <h1>Hi, I'm a React App</h1>
            <p className = { classses.join(' ') }>This is really working!</p>
            <button className = { btnClass }  onClick={props.click}>Toggle Person</button>
        </div>
    )
};

export default cockpit;