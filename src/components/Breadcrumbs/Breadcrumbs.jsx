import './Breadcrumbs.css';

export function Breadcrumbs({ items }) {
  return (
    <nav aria-label="Breadcrumb" className="ui-crumbs">
      <ol>
        {items.map((it, i) => {
          const last = i === items.length - 1;
          return <li key={it.label}>{last ? <span aria-current="page">{it.label}</span> : <a href={it.href}>{it.label}</a>}</li>;
        })}
      </ol>
    </nav>
  );
}
