import React, {Component} from 'react';
import Display from '../Display/Display';
import ButtonPanel from '../ButtonPanel/ButtonPanel';
import './Main.css';
import calculate from "../../logic/calculate";

class Main extends Component{
state={
    total: null,
    next: null,
    operation: null
}
   
handleClick = buttonName => {
    this.setState(calculate(this.state, buttonName));
  };

   
    render(){
        return(
            <div>
                <Display value={this.state.next || this.state.total || "0"} />
               <ButtonPanel clickHandler={this.handleClick} />
            </div>
        )
    }
}

export default Main;