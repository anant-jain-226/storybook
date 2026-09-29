import './ServiceTile.css';

export function ServiceTile({ icon, title, description, href = '#' }) {
  return (
    <a className="ui-svc" href={href}>
      <span className="ui-svc__icon" aria-hidden="true">{icon}</span>
      <h3 className="ui-svc__title">{title}</h3>
      <p className="ui-svc__desc">{description}</p>
    </a>
  );
}
