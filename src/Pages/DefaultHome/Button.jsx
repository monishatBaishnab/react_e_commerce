import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
const Button = ({ category }) => {
    return (
        <NavLink to={`/categoryData/${category}`} className='capitalize px-4 py-2 rounded-md transition-all delay-75 hover:text-white hover:bg-green-500'>{category}</NavLink>
    );
};

Button.propTypes = {
    category: PropTypes.string,
}

export default Button;