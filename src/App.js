import './App.css';
import { Component } from 'react';
import Todolist from  './components/TodoList/components/TodoList/Todolist';
import Counter from './components/Counter/Counter';
import Navigation from './components/Navigation/Naigation';


class App extends Component {
// приклад ініціалізації стейту в конструкторі  
constructor() {
  super();
  this.state = {
    activeTab: 'counter',
  }
}
state= {acriveTab: 'constructor'};
handleTabClick = (tab) => {
  this.setState({
    activeTab: tab
  })
};
render() {
  return (  
    <>
      <Navigation handleTabClick={this.handleTabClick.bind(this)} activeTab={this.state.activeTab} />
      {this.state.activeTab === 'counter' && <Counter/>}
      {this.state.activeTab === 'todo_list' && <Todolist/>}
      
    </>    

  );
}
}

export default App;
