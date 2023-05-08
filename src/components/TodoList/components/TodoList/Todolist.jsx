import { Component } from "react";
import TodoListItem from "./TodoListItem";
import { uid } from 'uid';
import Header from "./Header";
import AddTodoListItemForm from "../AddTodoItemForm";
class Todolist extends Component {
    state = {
         todoListItemsArray : [
        { 
            id: 1,
            title: ' Learn HTML',
            state: 'complete',
            bold: true,
        },
        { 
            id: 2,
            title: ' Learn CSS',
            state: 'complete',   
            bold: false,             
        },
        { 
            id: 3,
            title: ' Learn JS',
            state: 'complete',  
            bold: true,               
        },
        { 
            id: 4,
            title: ' Learn React',
            state: 'in_progress',  
            bold: false,              
        },
        { 
            id: 5,
            title: 'Learn Node + Express',
            state: 'not_started',  
            bold: false,               
        },
        { 
            id: 6,
            title: 'Start building awesome apps',
            state: 'planned',
            bold: false,
        },
    ]
};

addNewItemHander = (newItem) => {
    this.setState((prevState) => ({
        todoListItemsArray: [...prevState.todoListItemsArray, newItem]
    }));
}

render() {
  return (
    <div>
        <Header/>
        <AddTodoListItemForm addNewItemHander={this.addNewItemHander}/>

        <ul style={{ margin: '10px auto'}}>
            {this.state.todoListItemsArray.map((todoItem) => 
                <TodoListItem key={todoItem.id} itemData={todoItem}/>
            )}            
        </ul>
    </div>
  )
}
}

export default Todolist