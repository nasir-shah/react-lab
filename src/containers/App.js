import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit'
import AuthContext from '../context/auth-context'

import withComponent from '../hoc/withClass'
import Aux from '../hoc/Auxiliary'
// import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

class App extends Component {

  constructor(props){
    console.log('I am insite the constructor');
    super(props);

    this.state = {
      persons: [
        { id: 'asfa1', name: 'Max', age: 28 },
        { id: 'vasdf1', name: 'Manu', age: 29 },
        { id: 'asdf11', name: 'Stephanie', age: 26 }
      ],
      otherState: 'some other value',
      showPersons: false,
      showCockpit: true,
      changeCounter: 0,
      isAuthenticated: false
    }

  }

  static getDerivedStateFromProps(props, state){
    console.log('I am in the get derived state from props');

    return state;
  }

  componentDidMount(){
    console.log('I am in the did component mpunt')
  }
  

  nameChangedHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex( p => {
      return p.id === id;
    } );

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( (prevState , props) => {
      return { persons: persons, changeCounter :prevState.changeCounter + 1 }
    } );
  }

  deletePersonHandler = ( personIndex ) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice( personIndex, 1 );
    this.setState( { persons: persons } );
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState( { showPersons: !doesShow } );
  }

  loginHandler = () => {
    this.setState(
      (prevProps,props) => {
        return prevProps.isAuthenticated = true;
      }
    );

  }

  render () {

    console.log('I am in the render method');
    let persons = null;

    if ( this.state.showPersons ) {
      persons = <Persons 
                  persons = {this.state.persons}
                  clicked = { this.deletePersonHandler}
                  changed = { this.nameChangedHandler}
                  isAuthen = {this.state.isAuthenticated}/>
    }

    return (
     
      <Aux >
        
       <button onClick ={() => {
        this.setState({showCockpit: false});
      }}>
        Remove Cockpit
      </button>
      
      <AuthContext.Provider value = {{isAuthenticated: this.state.isAuthenticated, login : this.loginHandler}}>
      { this.state.showCockpit ?
        <Cockpit 
        showPerson = {this.state.showPersons}
        clicked = {this.togglePersonsHandler}
        personLength = {this.state.persons.length}
        title = {this.props.title} 
        // login = {this.loginHandler}
        />: null}
      {persons}
      </AuthContext.Provider>
      </Aux>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default withComponent(App, classes.App);
