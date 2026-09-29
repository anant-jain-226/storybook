import './VerifiedBadge.css';

export function VerifiedBadge({ children }) {
  return <span className="ui-verified"><span className="ui-verified__tick" aria-hidden="true">✓</span>{children}</span>;
}
