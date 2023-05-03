
import css from '../styles.module.css';
import styled from 'styled-components';

//приклад застосуваня styled 
//детальніша документація є доступна тут https://styled-components.com/docs/basics#getting-started
const Button = styled.button`
    background-color: #fff;
    border: none;
    height: 30px;
    font-size: 18px;
    width: 100px;
    cursor: pointer;
`;
const IncrementControlButton = ({handleIncrement}) => {
    return (
        <Button onClick={handleIncrement} className={css.button}> + 1</Button>
    )
};

export default IncrementControlButton;