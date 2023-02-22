import PropTypes from "prop-types";

const Input = (props) => {
  return (
    <div className="input-wrapper">
      {props.title !== undefined && (
        <p className="input-title">{props.title}</p>
      )}
      <input type="text" className="input" {...props.register} />
    </div>
  );
};

Input.propTypes = {
  title: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Input;
