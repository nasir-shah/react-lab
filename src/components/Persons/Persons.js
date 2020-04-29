import React, { PureComponent } from 'react';
import Person from './Person/Person'

class Persons extends PureComponent {
        // static getDerivedStateFromProps(props, state){
        //         console.log('[persons.js] is derived state from props');
        //         return state
        // }

        // shouldComponentUpdate(nextProps, nextState){
               
        //         if(nextProps.persons !== this.props.persons 
        //                 || nextProps.changed !== this.props.changed 
        //                 || nextProps.clicked || this.props.clicked){

        //                 console.log('[persons.js] I am in the should component update')
        //                 return true;
        //         }else{
        //                 return false;
        //         }
        // }

        getSnapshotBeforeUpdate(prevProps, prevState){
                console.log('[persons.js] I am in the get snapshot');
                return {message: 'snapshot'}
        }

        componentDidUpdate(prevProps, prevState, snapshot){
                console.log(snapshot)
                console.log('[persons.js] I am in the did update')
        }

        render() {
                console.log(' I am in the child render method')
        return (
                this.props.persons.map( ( person, index ) => {
                        return < Person
                                click= {() => this.props.clicked( index )}
                                name= {person.name}
                                age= {person.age}
                                key = {person.id}
                                changed={( event ) => this.props.changed( event, person.id )}
                                // isAuth = {this.props.isAuthen} 
                                />
                  } )
        );
        }
};


export default Persons;