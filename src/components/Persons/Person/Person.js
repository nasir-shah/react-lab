import React from 'react';
// import './Person.css

import classes from './Person.css'

// import styled from 'styled-components'
//import Radium from 'radium';

// const StyledDiv = styled.div`
//     width: 60%;
//     margin: 8px auto;
//     border: 1px solid #eeee;
//     box-shadow: 0 2px 3px #eeee;
//     padding: 16px;
//     text-align: center;

//     @media (min-width: 500px) {
//         width : 450px;
//     }
  
// `;
const person = ( props ) => {
    // const style = {
    //     '@media (min-width: 500px)':{
    //         width: '450px'
    //     }
    // }
    return (
        <div className = {classes.Person} >
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange = {props.changed} value = {props.name} />
        </div>
            
    )
};

// export default Radium(person);
export default person;





// import React from 'react'
// import './Person.css'

// const person = (props) => {
//         //return <p> I am in the person and I am { Math.floor(Math.random() * 30) } year old</p>
// return <div className = 'Person'> 
//         <p  onClick = {props.click} >I am a person and I am {props.age} year old and my name is {props.name}</p>
//         <input id = 'name' type = 'text' onChange = {props.nameChange} value = {props.name}/>
//         <p>{props.children}</p>
//         </div>
// }


// export default person;