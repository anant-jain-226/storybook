import './NavBar.css';

export function NavBar({ brand, links = [], actions }) {
  return (
    <header className="ui-nav">
      <div className="ui-nav__inner">
        <a className="ui-nav__brand" href="/">{brand}</a>
        <nav className="ui-nav__links" aria-label="Primary">
          {links.map((l) => <a key={l.label} href={l.href}>{l.label}</a>)}
        </nav>
        <div className="ui-nav__actions">{actions}</div>
      </div>
    </header>
  );
}
