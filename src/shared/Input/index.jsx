import './styles.css';

export const Input = ({ errorMessage, className = '', register, name, rules, label, ...props }) => {
  return (
    <div>
      {label && <p className="inputLabel">{label}</p>}
      <input
        className={`input${className && ` ${className}`}`}
        {...props}
        {...(register && register(name, rules))}
      />
      {errorMessage && <p className="errorMessage">This field is required</p>}
    </div>
  );
};
