import './Button.css';

export function Button({ variant = 'primary', children, className = '', ...rest }) {
  return (
    <button type="button" className={`ui-btn ui-btn--${variant} ${className}`} {...rest}>
      {children}
    </button>
  );
}
