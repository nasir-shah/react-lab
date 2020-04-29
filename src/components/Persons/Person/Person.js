import React, { Component } from 'react';

import Aux from '../../../hoc/Auxiliary.js'
import withComponent from '../../../hoc/withClass'
import classes from './Person.css';
import PropTypes from 'prop-types';

import AuthContext from '../../../context/auth-context'


class Person extends Component {


    constructor(props) {
        super(props);
        this.inputElRef = React.createRef();
    }

    static contextType = AuthContext;

    componentDidMount (){
        // // document.querySelector('input').focus();
        // this.inputEl.focus();
        this.inputElRef.current.focus()
        console.log(this.context.isAuthenticated)
    }
    render() {
        console.log(' I am in the child render method');
        return (
            <Aux>
                {/* <AuthContext.Consumer>{ (context) => 
                     context.isAuthenticated ? <p>Authenticated</p>: <p>Please login </p>
                }
                </AuthContext.Consumer> */}
                {this.context.isAuthenticated ? <p>Authenticated</p>: <p>Please login </p>}
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input type="text" 
                onChange={this.props.changed} 
                value={this.props.name} 
                // ref = {(el) => { this.inputEl = el}}
                ref = {this.inputElRef}/>
            </Aux>
        )
    
    }
};


Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withComponent(Person, classes.Person);