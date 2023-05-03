import css from './styles.module.css';
import { Component } from 'react';

import ControlButtons from './components/ControlButons';

class Counter extends Component {
    
state = {
    value: 123,
    randomString: 'asdfasgsdf'
}

 handleIncrement = () => {
    this.setState((prevState) => ({...prevState, value: prevState.value + 1}))
 }

// приколад примусової привʼязки контексту за допомогою bind (так як даний метод класу є звичайною функцією то її контекст потрібно прив)
//  handleDecrement()  {
//    this.setState(({value}) => ({value: value - 1}));
// }
 
 handleDecrement = () =>  {
    this.setState(({value}) => ({value: value - 1}));
 }

 componentDidMount(){
    console.log('Component did mount');
 }

 componentDidUpdate(){
    console.log('component did update')
 } 

 componentWillUnmount(){
   console.log('Unmounting')
 }
 
 render() {
    return (
        <div className={css.heading_container}>
            <h1 className=""> Counter </h1>
            <p className={css.state}>{this.state.value}</p>

            <ControlButtons
                handleIncrement={this.handleIncrement}
                value={this.state.value}
                handleDecrement={this.handleDecrement}
                //продовження приколаду привʼязки до контексту у випадках коли метод не є arrow func () =>
                // як бачите тут ми маємо використати слово bind щоб наступні виклики відбувались до привʼязки контексту this,
                // щоб мати доступ до контесту даного класу в тому числі і його стейту (this.state)
                //handleDecrement={this.handleDecrement.bind(this)}
            />            
        </div>
    )
 };
}
export default Counter;
