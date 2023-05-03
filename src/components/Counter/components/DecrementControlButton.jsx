
import css from '../styles.module.css';
import { createUseStyles } from 'react-jss';

// приклад застосування бібліотеки jss (react-jss)
// детальна документація https://cssinjs.org/?v=v10.10.0
const useStyles = createUseStyles({
    button: {
        fontSize: '20px',
        '&:hover' :{
            backgroundColor: 'green',            
        },
        '& span': {
            color:'red',
        }
    }
});

const DecrementControlButton = ({handleDecrement, value}) => {
    const classes = useStyles();
    return (
        <button onClick={handleDecrement} className={classes.button}><span> test</span> - 1</button>
    )
};

export default DecrementControlButton;