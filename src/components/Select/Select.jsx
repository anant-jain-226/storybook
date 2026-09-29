import './Select.css';

export function Select({ label, options, value, onChange, tone = 'light', className = '' }) {
  return (
    <span className={`ui-select ui-select--${tone} ${className}`}>
      <select aria-label={label} value={value} onChange={(e) => onChange(e.target.value)}>
        {options.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
      </select>
    </span>
  );
}
