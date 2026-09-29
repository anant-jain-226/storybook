import './SectionHeader.css';

export function SectionHeader({ title, subtitle, action, align = 'start', eyebrow, display = false }) {
  return (
    <div className={`ui-sh ui-sh--${align}`}>
      <div>
        {eyebrow && <p className="ui-sh__eyebrow">{eyebrow}</p>}
        <h2 className={`ui-sh__title${display ? ' ui-sh__title--display' : ''}`}>{title}</h2>
        {subtitle && <p className="ui-sh__sub">{subtitle}</p>}
      </div>
      {action}
    </div>
  );
}
