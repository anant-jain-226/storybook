import './LiveTicker.css';

function Group({ items, hidden }) {
  return (
    <div className="ui-ticker__group" aria-hidden={hidden || undefined}>
      {items.map((it) => (
        <p key={it.id} className="ui-ticker__item">
          <b>{it.name}</b>{it.place && <> from {it.place}</>} {it.action} <em>{it.target}</em>
          <span className="ui-ticker__time">{it.time}</span>
        </p>
      ))}
    </div>
  );
}

export function LiveTicker({ items }) {
  return (
    <div className="ui-ticker" role="marquee" aria-label="Recent activity">
      <div className="ui-ticker__track"><Group items={items} /><Group items={items} hidden /></div>
    </div>
  );
}
