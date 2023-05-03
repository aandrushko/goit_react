import {Component} from 'react';


import css from './styles.module.css';
import styled from 'styled-components';

const NavButton = styled.button`
    background-color: aliceblue;
    color: blue;

`

class Navigation extends Component {
    handleUpdateActiveTab (tab) {
        this.props.handleTabClick(tab);
    }

    render() {
        console.log(this.props)
        return (
            <nav 
                className={css.navigation_wrapper}>
                <NavButton 
                    className={ this.props.activeTab === 'counter'? css.active: ''}
                    onClick={() =>  this.handleUpdateActiveTab('counter')}
                >
                    Couter
                </NavButton>
                
                <NavButton 
                    className={`${css.button}  ${this.props.activeTab === 'todo_list'? css.active : ""}` }
                    onClick={() => this.handleUpdateActiveTab('todo_list')}>Todo List
                </NavButton>
            </nav>
        )
    }
}

export default Navigation;