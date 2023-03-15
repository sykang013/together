import PropTypes from 'prop-types';
import './button2.css';

/**
 * Primary UI component for user interaction
 */
export const Button2 = ({ primary, backgroundColor, size, label, ...props }) => {
  const mode = primary ? 'storybook-button2--primary' : 'storybook-button2--secondary';
  return (
    <button
      type="button"
      className={['storybook-button2', `storybook-button2--${size}`, mode].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

Button2.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button2.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
};
