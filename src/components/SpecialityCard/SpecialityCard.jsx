import './SpecialityCard.css';

export function SpecialityCard({ media, title, description, href = '#' }) {
  return (
    <a className="ui-spec" href={href}>
      <div className="ui-spec__media">{media}</div>
      <h3 className="ui-spec__title">{title}</h3>
      <p className="ui-spec__desc">{description}</p>
    </a>
  );
}
