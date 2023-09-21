import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
const Button = ({ category }) => {
    return (
        <NavLink to={`/categoryData/${category}`} className='capitalize text-white bg-green-500 px-4 py-2 rounded-md'>{category}</NavLink>
    );
};

Button.propTypes = {
    category: PropTypes.string,
}

export default Button;