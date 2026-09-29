import './AvailabilityTag.css';

export function AvailabilityTag({ children = 'Available Today', tone = 'success' }) {
  return <span className={`ui-avail ui-avail--${tone}`}><span aria-hidden="true">📅</span> {children}</span>;
}
