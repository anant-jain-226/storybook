import './RatingBadge.css';

export function RatingBadge({ percent }) {
  return <span className="ui-rating" aria-label={`${percent} percent recommend`}><span aria-hidden="true">👍</span> {percent}%</span>;
}
