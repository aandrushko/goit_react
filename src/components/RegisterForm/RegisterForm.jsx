
import { Component } from 'react';


const initialState = {
    name: '',
    radio: '1',
    color:[],
}

class RegisterForm extends Component {
    state = {
        ...initialState
    }
    handleInputChange = (event) => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
    }
    handleFormSubmit = (event) => {
        event.preventDefault() ;
        console.log(this.state)
    }

    handleColorUpdate = (event) => {
        // const new
        this.setState((prev) => ([...prev]))
    }

    render () {
        return(
        <div>
         <form onSubmit={this.handleFormSubmit}>

         
        
        <label htmlFor='inputname'> nasdfsgsdfhsdf</label>
            <input id='inputname' name="name" value={this.state.textFieldValue} type="text" onChange={this.handleInputChange}/>
        
             <input  onChange={this.handleInputChange} name="radio" value="1" type='radio'/>
             <input  onChange={this.handleInputChange} name="radio" value="2" type='radio'/>
             <input  onChange={this.handleInputChange} name="radio" value="3" type='radio'/>
             <input type="checkbox" name='red'/>



             <input onChange={this.handleColorUpdate} type="checkbox" name='green'/>
             <input type="checkbox" name='yellow'/>
             <input type="checkbox" name='brown'/>



             <input type='submit' ttitle="submitForm"/>
             </form> 
        </div>)
        
    }
}
export default RegisterForm;