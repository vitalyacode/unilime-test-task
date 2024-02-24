import './styles.css';

export const Input = ({ errorMessage, className, register, name, rules, ...props }) => {
  return (
    <div>
      <input
        className={`input${className && ` ${className}`}`}
        {...props}
        {...(register && register(name, rules))}
      />
      {errorMessage && <p className="errorMessage">This field is required</p>}
    </div>
  );
};
