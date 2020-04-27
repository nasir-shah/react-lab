import React, { Component } from 'react';


import Cockpit from '../components/Cockpit/Cockpit'


// import styled from 'styled-components'

// import Radium, { StyleRoot } from 'radium'

import classes from './App.css';
import Persons from '../components/Persons/Persons'

// const StyledButton = styled.button`
//   cursor: pointer;
//   background-color: ${props => props.alt ? 'red' : 'salmon'};
//   padding: 8px;
//   border: 1px solid #cccccc;
//   font: outline;

//   &:hover{
//     background-color: lightgreen;
//     color: black;
//   }
// `;

class App extends Component {
  state = {
    persons: [
      { id: 'id1', name: 'Max', age: 28 },
      { id: 'id2', name: 'Manu', age: 29 },
      { id: 'id3', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPerson: false
  }

  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    this.setState( {
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    } )
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p =>{
      return p.id === id
    });
    const person = {
      ...this.state.persons[personIndex]
    }
    //const person = Object.assign({}, this.state.persons[personIndex])
    
    person.name = event.target.value;
    const persons = this.state.persons.slice();
    //const persons = [...this.state.persons]
    persons[personIndex] = person
    this.setState( { persons: persons } )
  }

  togglePersonName = () => {
    let currentPersonNameState = this.state.showPerson
    this.setState({
      showPerson : !currentPersonNameState
    })
  };

  deletePerson = (index) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons]
    persons.splice(index,1)
    this.setState({ persons })
  }

  render () {

          // const style = {
          //     cursor: 'pointer',
          //     backgroundColor: '#888888',
          //     padding: '8px',
          //     border: '1px solid #cccccc',
          //     font:'outline',
          //     ':hover': {
          //       backgroundColor: 'lightgreen',
          //       color:' black'
          //     }
          //  };

    let person = null;

    if (this.state.showPerson) {
      person = 
          <Persons 
          persons = {this.state.persons} 
          clicked = {this.deletePerson} 
          changed = {this.nameChangedHandler}/>;
    }
    

    return (
      
        <div className={classes.App}>
          <Cockpit 
          showPersons = {this.state.showPerson} 
          persons = {this.state.persons}  
          click = {this.togglePersonName}/>
          { person }
        </div>
      
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

// export default Radium(App);
export default App;









// import React, { useState } from 'react';
// import './App.css';
// import Person from './Person/Person'

// const app =  props => {
//   const [personState, setPersonState] = useState({
//     person :[
//       {name:'Nasir', age: '28'},
//       {name:'Jasir', age: '21'},
//       {name:'Rasir', age: '12'},
//     ]
//   });

//   const [otherState, setOtherState] = useState('This is the main content')

//   console.log(personState, otherState)

//   const switchNameHandler =  (name) => {
//     //console.log('I am called')
//      setPersonState({
//       person : [
//         {name, age: '28'},
//         {name:'mudasir', age: '88'},
//         {name:'rasik', age: '90'},
//       ]
//     });
//   }


//   const nameChangeHanler = (event) => {
//     setPersonState({
//       person : [
//         {name: 'Maxmillian', age: '28'},
//         {name: event.target.value, age: '88'},
//         {name:'rasik', age: '90'},
//       ]
//     });
//   }

//   const style = {
//     cursor: 'pointer',
//     backgroundColor: '#888888',
//     padding: '8px',
//     border: '1px solid #cccccc',
//     font:'outline'
//   }
//     return (
//       <div className="App">
//         <h1> I am in the react app!</h1>
//         <button style = {style} onClick = {switchNameHandler.bind(this,'max')}>Switch Name</button>
//         <Person 
//         name = {personState.person[0].name} 
//         age= {personState.person[0].age}/>
//         <Person name = {personState.person[1].name} 
//         age= {personState.person[1].age}
//         click = {() => switchNameHandler('lisa') } nameChange = {nameChangeHanler}>My hobby is horse riding</Person>
//         <Person name = {personState.person[2].name} 
//         age= {personState.person[2].age}/>
//       </div>
//     );
//     //return React.createElement('div', {className: 'App'} ,React.createElement('h1',null, 'I am in the react app'))
// }

// export default app;


