import './RatingSummary.css';

export function RatingSummary({ value, label }) {
  const full = Math.round(value);
  return (
    <div className="ui-rsum">
      <span className="ui-rsum__value">{value.toFixed(1)}</span>
      <div>
        <div className="ui-rsum__stars" role="img" aria-label={`${value.toFixed(1)} out of 5`}>{'★'.repeat(full)}{'☆'.repeat(5 - full)}</div>
        <small>{label}</small>
      </div>
    </div>
  );
}
