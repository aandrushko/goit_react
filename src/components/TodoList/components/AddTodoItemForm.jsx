import { Component } from "react";


const TODO_LISTI_ITEM_STATE = {
    IN_PROGRES: 'in_progress',
    COMPLETE: 'complete',
    PLANNED: 'planned',
    NOT_STARTED: 'not_started'
}
const initState = {
    title: '',
    status: TODO_LISTI_ITEM_STATE.PLANNED,
    bold: false,
}

class AddTodoListItemForm extends Component {

    state = { 
        ...initState            
    }

   
    handleInputChange = (event) => {
      const {name, value } = event.target;
      console.log(name, value)
    
      this.setState({
        [name]: value
      })
    }
    submitHandler = (event) => {
        event.preventDefault();
        this.props.addNewItemHander(this.state);
        this.setState(initState);
    }

    render() {
       return <form onSubmit={this.submitHandler}>
                <label> 
                    Title
                    <input 
                        type="text" 
                        onChange={this.handleInputChange} 
                        name="title" 
                        value={this.state.title}
                     />
                </label>
                <label htmlFor="status">
                    Item status
                </label>       
                <select 
                    id="status" 
                     name="status" 
                    value={this.state.status}
                     onChange={this.handleInputChange} 
                    > 
                    {Object.keys(TODO_LISTI_ITEM_STATE).map((key) => (
                        <option >{TODO_LISTI_ITEM_STATE[key]}</option>
                    ))}
                </select>
                <label>
                    Is hight priority
                    <input 
                        name="bold"
                        type="checkbox" 
                        onChange={
                            (event) => {this.setState({ bold: event.target.checked})}} 
                         checked={this.state.bold}

                         /> 
                </label>
                <input type="submit" value="Add new todo item" />
            </form>
    }

}

export default AddTodoListItemForm