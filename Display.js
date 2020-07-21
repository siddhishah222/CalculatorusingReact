import React, {Component} from 'react';
import propTypes from 'prop-types';
import classes from './Display.css';

class Display extends Component{
    static propTypes={
        value: propTypes.string,
    }

    render(){
        return(
            <div className={classes.Display}>
                {this.props.value}
            </div>
        )
    }
}

export default Display;


//PropTypes is a library that helps in minimizing this problem in React
//by checking the types passed in the props object against a specification we set beforehand 
//and to raise a warning if the types passed don't match the types expected.