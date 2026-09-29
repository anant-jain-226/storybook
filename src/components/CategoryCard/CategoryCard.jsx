import './CategoryCard.css';

export function CategoryCard({ icon, title, count, tone = 'pink', href = '#', onClick }) {
  return (
    <a className={`ui-cat ui-cat--${tone}`} href={href} onClick={onClick}>
      <span className="ui-cat__icon" aria-hidden="true">{icon}</span>
      <h3 className="ui-cat__title">{title}</h3>
      <p className="ui-cat__count">{count.toLocaleString('en-IN')}+ astrologers</p>
      <span className="ui-cat__go" aria-hidden="true">→</span>
    </a>
  );
}
