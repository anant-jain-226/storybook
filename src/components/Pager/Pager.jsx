import './Pager.css';

export function Pager({ index, total, onPrev, onNext }) {
  return (
    <div className="ui-pager">
      <button type="button" aria-label="Previous" onClick={onPrev}>‹</button>
      <span aria-live="polite">{index + 1} / {total}</span>
      <button type="button" aria-label="Next" onClick={onNext}>›</button>
    </div>
  );
}
