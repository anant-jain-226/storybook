import './Card.css';

export function Card({ title, children, className = '' }) {
  return (
    <section className={`ui-card ${className}`}>
      {title && <h2 className="ui-card__title">{title}</h2>}
      {children}
    </section>
  );
}
