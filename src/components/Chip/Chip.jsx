import './Chip.css';

export function Chip({ children, selected = false, onClick }) {
  return <button type="button" className={`ui-chip${selected ? ' ui-chip--on' : ''}`} aria-pressed={selected} onClick={onClick}>{children}</button>;
}
