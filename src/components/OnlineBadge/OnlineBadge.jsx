import './OnlineBadge.css';

export function OnlineBadge({ count, label = 'astrologers online now' }) {
  return <span className="ui-online"><span className="ui-online__dot" aria-hidden="true" />{count.toLocaleString('en-IN')} {label}</span>;
}
