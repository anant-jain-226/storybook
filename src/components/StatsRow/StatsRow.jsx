import './StatsRow.css';

export function StatsRow({ items, center = false }) {
  return (
    <dl className={`ui-stats${center ? ' ui-stats--center' : ''}`}>
      {items.map((s) => (
        <div key={s.label} className="ui-stats__item">
          {s.icon && <span className="ui-stats__icon" aria-hidden="true">{s.icon}</span>}
          <dd className="ui-stats__value">{s.value}</dd>
          <dt className="ui-stats__label">{s.label}</dt>
        </div>
      ))}
    </dl>
  );
}
