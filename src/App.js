import './App.css';
import { Component } from 'react';
import Todolist from  './components/TodoList/components/TodoList/Todolist';
import Counter from './components/Counter/Counter';
import Navigation from './components/Navigation/Naigation';
import RegisterForm from './components/RegisterForm/RegisterForm';

class App extends Component {
// приклад ініціалізації стейту в конструкторі  
// constructor() {
//   super();
//   this.state = {
//     activeTab: 'counter',
//   }
// }
// state= {acriveTab: 'constructor'};
state = {
  name: '',
  lastName: '',
  hairColor: '',
  isMaried: false

}


handleInputChange = (event) => {
  const {name, value } = event.target;
  console.log(name, value)

  this.setState({
    [name]: value
  })
}

handleFormSubmit = (event) => {
 event.preventDefault();
 console.log(this.state);
}
handlerCheckbox = (event) => {
  console.log(event.target.checked)
  // const {name, checked } = event.target;
  this.setState({isMaried: event.target.checked})
}

// handleNameChange = (event) => {
//     this.setState({
//       name: event.target.value
//     })
// }
// handleLNameChange = (event) => {
//   this.setState({
//     lastName: event.target.value
//   })
// }

// handleTabClick = (tab) => {
//   this.setState({
//     activeTab: tab
//   })
// };
render() {
  return (  
    <>
      {/* <Navigation handleTabClick={this.handleTabClick.bind(this)} activeTab={this.state.activeTab} />
      {this.state.activeTab === 'counter' && <Counter/>}
      {this.state.activeTab === 'todo_list' && <Todolist/>} */}
      <Todolist/>
      {/* <RegisterForm/> */}
      {/* <form onSubmit={this.handleFormSubmit}> 
        <label htmlFor='name-id'>
          Name
        </label>
        <input
          id='name-id'
          value={this.state.name} 
          onChange={this.handleInputChange} 
          name="name"
          type="text" />
    
      <br/>
      <br/>
      <br/>
      <label>
        Last name
        <input 
          value={this.state.lastName} 
          onChange={this.handleInputChange} 
          name="lastName"
          type="text" />
      </label>
       */}
      {/* <label>
        red
        <input onChange={this.handleInputChange}  name='hairColor' type='radio' value="red"/>
      </label>
      <label>
      blonde
        <input onChange={this.handleInputChange}  name='hairColor' type='radio' value="blonde"/>
      </label>
      <label>
        black
        <input onChange={this.handleInputChange}  name='hairColor' type='radio' value="black"/>
      </label> */}
      {/* <label>
        Maried
        <input onChange={this.handlerCheckbox}  name='isMaried' checked={this.state.isMaried} type='checkbox'/>
      </label>

      Hobbie
      <label>
       Fishing
        <input onChange={this.handlerCheckbox}  name='hobbie' checked={this.state.isMaried} type='checkbox'/>
      </label>
      <label>
       Driving
        <input onChange={this.handlerCheckbox}  name='hobbie' checked={this.state.isMaried} type='checkbox'/>
      </label>

        <input type="submit" title='Submit form'/>
        
      </form> */}
    </>

  );
}
}

export default App;
