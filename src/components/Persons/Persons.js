import React from 'react';
import Person from './Person/Person'

const persons = props => 
    props.persons.map((person,index) => {
            //console.log(index)
            return <Person 
            name = {person.name} 
            age = {person.age} 
            click = { props.clicked.bind(this,index) }
            key = { person.id }
            changed = { (event) => props.changed(event, person.id) }/>
      })



export default persons;