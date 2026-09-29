import './FeatureCard.css';

export function FeatureCard({ title, description, media, tone = 'blue', href = '#' }) {
  return (
    <a className="ui-fcard" href={href}>
      <div className={`ui-fcard__media ui-fcard__media--${tone}`} aria-hidden="true">{media}</div>
      <div className="ui-fcard__body">
        <h3 className="ui-fcard__title">{title}</h3>
        <p className="ui-fcard__desc">{description}</p>
      </div>
    </a>
  );
}
