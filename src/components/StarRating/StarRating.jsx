import './StarRating.css';

export function StarRating({ value, max = 5 }) {
  const filled = Math.round(value);
  return (
    <span className="ui-stars" role="img" aria-label={`${value.toFixed(1)} out of ${max} stars`}>
      <span className="ui-stars__val">{value.toFixed(1)}</span>
      <span aria-hidden="true">{'★'.repeat(filled)}{'☆'.repeat(max - filled)}</span>
    </span>
  );
}
