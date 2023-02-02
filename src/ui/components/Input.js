import PropTypes from "prop-types";

const Input = (props) => {
  return (
    <div>
      {props.title !== undefined && <p>{props.title}</p>}
      <input
        type="text"
        className="input"
        onChange={(e) => props.onChange(e.target.value)}
        value={props.value}
      />
    </div>
  );
};

Input.propTypes = {
  title: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Input;
