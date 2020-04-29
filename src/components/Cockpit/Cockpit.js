import React, { useEffect, useRef, useContext } from 'react';
import classes from './Cockpit.css'
import AuthContext from '../../context/auth-context'

const cockpit = props => {

    const toggleRef = useRef(null);
    const context = useContext(AuthContext);

    useEffect(() => {
      console.log('in the use effect!')

      setTimeout(() =>{
        // alert('data saved into the cloud!')
        toggleRef.current.click();
      },2000);
      

      return () => {
        console.log('clean up work in progress')
      };
    },[]);

    useEffect(() => {
      console.log('I am in the second useeffect')
      return () => {
        console.log('clean up in 2nd work in progress')
      };
    });


    let btnClass = '';
    if(props.showPerson){
        btnClass = classes.Red;
    }

    const assignedClasses = [];
    if ( props.personLength <= 2 ) {
      assignedClasses.push( classes.red ); // classes = ['red']
    }
    if ( props.personlength <= 1 ) {
      assignedClasses.push( classes.bold ); // classes = ['red', 'bold']
    }

    return (
        <div className = {classes.Cockpit}>
            <h1>{ props.title }</h1>
            <p className={assignedClasses.join( ' ' )}>This is really working!</p>
            <button
            className={btnClass}
            onClick={props.clicked}
            ref = {toggleRef}>Toggle Persons</button>
            {/* <AuthContext.Consumer>{ 
              context => <button onClick = {context.login}>Login</button> 
              }
            </AuthContext.Consumer> */}
            <button onClick = {context.login}>Login</button>
        </div>
    );

};

export default React.memo(cockpit);