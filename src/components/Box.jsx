
import PropTypes from 'prop-types';

const Box = (props) => {  
    return (<li>{props.text}, legth = {props.text.length}</li>)
};

Box.propTypes = {
    text: PropTypes.string,
};

export default Box;