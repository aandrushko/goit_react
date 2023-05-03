import DecrementControlButton from "./DecrementControlButton";
import IncrementControlButton from "./IncrementControlButton";
import css from '../styles.module.css';
import { Component } from "react";

class ControlButtons extends Component { 
    //Буде підхоплюватись якщо компонент не отримав проп від батьківського компоненту
    static defaultProps = {
        value: 888,
    }

    render () { 
        return (
            <div className={css.button_container}>
                <DecrementControlButton handleDecrement={this.props.handleDecrement}  value={this.props.value}/>
                <IncrementControlButton handleIncrement={this.props.handleIncrement}  value={this.props.value}/>           
            </div>
        )
}
}
export default ControlButtons;