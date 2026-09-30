import './Input.css';

export function Input({ icon, after, className = '', ...rest }) {
  return (
    <label className={`ui-input ${className}`}>
      {icon && <span className="ui-input__icon" aria-hidden="true">{icon}</span>}
      <input className="ui-input__field" {...rest} />
      {after && <span className="ui-input__after">{after}</span>}
    </label>
  );
}
